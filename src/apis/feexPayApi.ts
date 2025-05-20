import { Network, Country } from '../types/index';
import { getNetworkApiCode } from '../utils/paymentUtils';

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

export const requestToPay = async (params: RequestToPayParams): Promise<TransactionResponse> => {
  // Convertir le réseau au format attendu par l'API
  const networkApiCode = getNetworkApiCode(params.country, params.network);
  
  const apiUrl = `https://api.feexpay.me/api/transactions/public/requesttopay/${networkApiCode}`;
  
  try {
    // Créer une copie des paramètres sans le pays (non attendu par l'API)
    const apiParams = {
      phoneNumber: params.phoneNumber,
      amount: params.amount,
      network: networkApiCode, // Utiliser le code réseau mappé
      description: params.description,
      customId: params.customId,
      shop: params.shop,
      apiToken: params.apiToken
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
    const apiParams = {
      network: networkApiCode,
      amount: params.amount,
      shop: params.shop
    };
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.apiToken}`
      },
      body: JSON.stringify(apiParams)
    });
    
    if (!response.ok) {
      throw new Error('Transaction details check failed');
    }

    return await response.json();
  } catch (error) {
    console.error('Transaction details error:', error);
    throw error;
  }
};