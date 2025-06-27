import { PaymentStatus, Network, Country, PaymentConfig } from '../types/index';
interface PaymentHandlerProps {
    phoneNumber: string;
    baseAmount: number;
    network: Network;
    country: Country;
    paymentConfig: PaymentConfig;
    transactionReference: string;
    generateRandomId: () => string;
    fullName: string;
    email: string;
    setStateCallbacks: {
        setTransactionReference: (ref: string) => void;
        setPaymentStatus: (status: PaymentStatus) => void;
        setStatusMessage: (message: string) => void;
        setStatusModalOpen: (isOpen: boolean) => void;
        setIsLoading: (isLoading: boolean) => void;
    };
}
export declare const handlePaymentSubmit: (e: React.FormEvent, props: PaymentHandlerProps, validateForm: () => boolean, getFormattedPhoneNumber: () => string) => Promise<{
    reference: string;
} | undefined>;
export declare const startStatusCheck: (ref: string, props: PaymentHandlerProps, network: Network, getFormattedPhoneNumber: () => string) => () => void;
export {};
