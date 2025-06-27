export type Network = 'MTN' | 'MOOV' | 'CELTIIS' | 'CORIS' | 'ORANGE' | 'WAVE' | 'FREE' | 'TOGOCOM';
export type Country = 'BENIN' | 'COTE_D_IVOIRE' | 'BURKINA_FASO' | 'CONGO_BRAZZAVILLE' | 'SENEGAL' | 'TOGO';
export type PaymentMethod = 'MOBILE' | 'CARD' | 'WALLET';
export type Currency = 'XOF' | 'USD' | 'CAD';
export type PaymentStatus = 'PENDING' | 'SUCCESSFUL' | 'FAILED' | 'TIMEOUT' | 'INSUFFICIENT_FUNDS' | 'SUCCESS';
export interface PaymentConfig {
    amount: number;
    description: string;
    shop: string;
    apiToken: string;
    callbackUrl?: string;
    mode?: 'SANDBOX' | 'LIVE';
    customId?: string;
    fields_to_hide?: string[];
    callback?: (response: {
        reference: string;
        status: PaymentStatus;
        phoneNumber: string;
        reseau: string;
        callback_info: Record<string, unknown>;
        description: string;
        transaction_id: string;
        message: string;
        amount: number;
        currency: string;
        first_name: string;
        email: string;
    }) => void;
    currency?: Currency;
    case?: string;
    callback_info?: Record<string, unknown>;
    error_callback_url?: string;
    first_name?: string;
    email?: string;
}
export interface Transaction {
    reference: string;
    status: PaymentStatus;
    amount: number;
    fees: number;
    total: number;
    phoneNumber: string;
    network: Network;
    country: Country;
    timestamp: number;
}
