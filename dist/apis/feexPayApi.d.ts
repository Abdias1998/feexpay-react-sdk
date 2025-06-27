import { Network, Country, PaymentStatus, Currency } from '../types/index';
interface RequestWalletCorisParams {
    phoneNumber: string;
    amount: number;
    shop: string;
    email: string;
    first_name: string;
    description?: string;
    reference?: string;
    otp?: string;
    currency: Currency;
    apiToken: string;
    callback_info: Record<string, unknown>;
}
interface RequestCardPaymentParams {
    phone: string;
    amount: number;
    shop: string;
    first_name: string;
    last_name: string;
    email: string;
    type_card: 'VISA' | 'MASTERCARD';
    currency: Currency;
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
    currency: Currency;
    callback_info: Record<string, unknown>;
}
export interface TransactionResponse {
    status: PaymentStatus;
    reason?: string;
    reference: string;
    transaction_id?: string;
    amount?: number;
    email?: string;
    currency?: string;
    callback_info?: Record<string, unknown>;
    message?: string;
    statusCode?: string;
    payment_url?: string;
}
interface TransactionDetailsParams {
    network: Network;
    country: Country;
    amount: number;
    shop: string;
    apiToken: string;
    currency: Currency;
    callback_info: Record<string, unknown>;
}
interface TransactionDetailsResponse {
    iffees: boolean;
    amount: number;
    total: number;
    message: string;
}
export declare const requestToPay: (params: RequestToPayParams) => Promise<TransactionResponse>;
export declare const checkTransactionStatus: (reference: string) => Promise<TransactionResponse>;
export declare const getTransactionDetails: (params: TransactionDetailsParams) => Promise<TransactionDetailsResponse>;
export declare const requestCardPayment: (params: RequestCardPaymentParams) => Promise<TransactionResponse>;
export declare const requestWalletCorisPayment: (params: RequestWalletCorisParams) => Promise<TransactionResponse>;
export declare const getShop: (apiToken: string) => Promise<TransactionResponse>;
export {};
