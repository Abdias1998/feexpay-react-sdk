import { Network } from '../types/index';

interface RequestToPayParams {
  phoneNumber: string;
  amount: number;
  network: Network;
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

export const requestToPay = async (params: RequestToPayParams): Promise<TransactionResponse> => {
  const apiUrl = `https://api.feexpay.me/api/transactions/public/requesttopay/${params.network}`;
  
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${params.apiToken}`,
      },
      body: JSON.stringify(params),
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