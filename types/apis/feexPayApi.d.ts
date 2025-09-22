import { Network, Country, PaymentStatus, Currency } from '../types/index';
interface RequestToPayParams {
    mode?: 'SANDBOX' | 'LIVE';
    phoneNumber: string;
    amount: number;
    network: Network;
    country: Country;
    description: string;
    customId: string;
    id: string;
    token: string;
    currency: Currency;
    callback_info: Record<string, unknown>;
    first_name: string;
    email: string;
    otp?: string;
}
interface RequestWalletCorisParams {
    mode?: 'SANDBOX' | 'LIVE';
    phoneNumber: string;
    amount: number;
    network: Network;
    country: Country;
    description: string;
    customId: string;
    id: string;
    token: string;
    currency: Currency;
    callback_info: Record<string, unknown>;
    first_name: string;
    email: string;
    otp?: string;
}
interface RequestCardPaymentParams {
    phone: string;
    amount: number;
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    type_card: 'VISA' | 'MASTERCARD';
    currency: Currency;
    token: string;
}
export interface ShopResponse {
    name: string;
    reference: string;
}
export interface TransactionResponse {
    status: PaymentStatus;
    reason?: string;
    reference: string;
    transaction_id?: string;
    amount?: number;
    callback_info?: Record<string, unknown>;
    message?: string;
    statusCode?: string;
    payment_url?: string;
}
interface TransactionDetailsParams {
    network: Network;
    country: Country;
    amount: number;
    id: string;
    token: string;
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
export declare const getShop: (shop: string) => Promise<ShopResponse>;
export {};
