import { Network, Country } from '../types/index';
import { getNetworkApiCode } from '../utils/paymentUtils';

// Type pour les paiements Wallet Coris
interface RequestWalletCorisParams {
  phoneNumber: string;
  amount: number;
  shop: string;
  email: string;
  first_name: string;
  description?: string;
  reference?: string;
  otp?: string;
  apiToken: string;
}

// Type pour les paiements par carte
interface RequestCardPaymentParams {
  phone: string;
  amount: number;
  shop: string;
  first_name: string;
  last_name: string;
  email: string;
  type_card: 'VISA' | 'MASTERCARD';
  apiToken: string;
}

interface RequestToPayParams {
  phoneNumber: string;
  amount: number;
  network: Network;
  country: Country;
  description: string;
  customId: string;
  shop: string;
  apiToken: string;
}

interface TransactionResponse {
  reference: string;
  status: string;
  message: string;
  statusCode?: string; // Code de statut pour la requête de paiement
  reason?: string;    // Raison de l'échec pour la vérification
}

interface TransactionDetailsParams {
  network: Network;
  country: Country;
  amount: number;
  shop: string;
  apiToken: string;
}

interface TransactionDetailsResponse {
  iffees: boolean;
  amount: number;
  total: number;
  message: string;
}

const getClientIP = async (): Promise<string> => {
  try {
    const res = await fetch('https://api.ipify.org?format=json');
    const data = await res.json();
    return data.ip;
  } catch {
    return 'unknown';
  }
};

export const requestToPay = async (params: RequestToPayParams): Promise<TransactionResponse> => {
  const networkApiCode = getNetworkApiCode(params.country, params.network);
  const apiUrl = `https://api.feexpay.me/api/transactions/requesttopay/integration`;

  try {
    const merchantDomain = window.location.origin;
    const merchantIp = await getClientIP(); // Appelle la fonction définie plus haut

    const apiParams = {
      phoneNumber: params.phoneNumber,
      amount: params.amount,
      reseau: networkApiCode,
      description: params.description,
      customId: params.customId,
      shop: params.shop,
      token: params.apiToken,
      merchant_domain: merchantDomain,
      merchant_ip: merchantIp,
      payment_interface : "REACT"
    };

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.apiToken}`,
      },
      body: JSON.stringify(apiParams),
    });

    if (!response.ok) {
      throw new Error('Payment request failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Payment request error:', error);
    throw error;
  }
};


export const checkTransactionStatus = async (reference: string): Promise<TransactionResponse> => {
  const apiUrl = `https://api.feexpay.me/api/transactions/getrequesttopay/integration/${reference}`;
  
  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Status check failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Status check error:', error);
    throw error;
  }
};

/**
 * Vérifie les détails de transaction, notamment si des frais doivent être appliqués
 * @param params Paramètres de la transaction
 * @returns Réponse contenant les informations sur les frais
 */
export const getTransactionDetails = async (params: TransactionDetailsParams): Promise<TransactionDetailsResponse> => {
  const apiUrl = 'https://api.feexpay.me/api/transactions/details';
  
  try {
    // Convertir le réseau au format attendu par l'API
    const networkApiCode = getNetworkApiCode(params.country, params.network);
    
    // Préparer les paramètres pour l'API
    const requestParams = {
      network: networkApiCode,
      amount: params.amount,
      shop: params.shop
    };
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.apiToken}`,
      },
      body: JSON.stringify(requestParams),
    });

    if (!response.ok) {
      throw new Error('Failed to get transaction details');
    }

    return await response.json();
  } catch (error) {
    console.error('Transaction details error:', error);
    throw error;
  }
};

/**
 * Effectue une demande de paiement par carte bancaire
 * @param params Paramètres pour le paiement par carte
 * @returns Réponse contenant la référence de transaction et le statut
 */
export const requestCardPayment = async (params: RequestCardPaymentParams): Promise<TransactionResponse> => {
  const apiUrl = 'https://api.feexpay.me/api/transactions/public/initcard';
  
  try {
    const requestParams = {
      phone: params.phone,
      amount: params.amount,
      shop: params.shop,
      first_name: params.first_name,
      last_name: params.last_name,
      email: params.email,
      type_card: params.type_card,
      currency: 'XOF' // La devise est toujours XOF pour FeexPay
    };
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.apiToken}`,
      },
      body: JSON.stringify(requestParams),
    });

    if (!response.ok) {
      throw new Error('Card payment request failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Card payment request error:', error);
    throw error;
  }
};

/**
 * Effectue une demande de paiement via Wallet Coris
 * @param params Paramètres pour le paiement Wallet Coris
 * @returns Réponse contenant la référence de transaction et le statut
 */
export const requestWalletCorisPayment = async (params: RequestWalletCorisParams): Promise<TransactionResponse> => {
  const apiUrl = 'https://api.feexpay.me/api/transactions/requesttopay/integration';
  
  try {
    // Extraire le code pays et le numéro sans indicatif
    const countryCode = '229'; // Bénin pour Coris
    const phoneNumberRight = params.phoneNumber.startsWith('+229') 
      ? params.phoneNumber.substring(4) 
      : params.phoneNumber.startsWith('229') 
        ? params.phoneNumber.substring(3) 
        : params.phoneNumber;
    
    const requestParams = {
      phoneNumber: `229${phoneNumberRight}`,
      country: countryCode,
      phoneNumberRight: phoneNumberRight,
      amount: params.amount.toString(),
      currency: 'XOF',
      description: params.description || 'Paiement via FeexPay',
      email: params.email,
      first_name: params.first_name,
      otp: params.otp || '',
      reference: params.reference || '',
      reseau: 'CORIS',
      shop: params.shop,
      token: params.apiToken
    };
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestParams),
    });

    const responseData = await response.json();
    
    // Ajouter le code de statut à la réponse pour pouvoir détecter le besoin d'OTP
    return {
      ...responseData,
      statusCode: response.status.toString(),
    };
  } catch (error) {
    console.error('Wallet Coris payment request error:', error);
    throw error;
  }
};


export const getShop = async (apiToken: string): Promise<TransactionResponse> => {
  const apiUrl = `https://api.feexpay.me/api/shop/${apiToken}/get_shop`;
  
  try {
    const response = await fetch(apiUrl);
    
    if (!response.ok) {
      throw new Error('Shop retrieval failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Shop retrieval error:', error);
    throw error;
  }
};