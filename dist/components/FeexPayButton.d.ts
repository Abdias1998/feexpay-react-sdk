import { PaymentStatus, Currency } from 'src/types';
interface FeexPayButtonProps {
    amount: number;
    description: string;
    id: string;
    token: string;
    callback_url?: string;
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
    }) => void;
    currency?: Currency;
    case?: string;
    callback_info?: Record<string, unknown>;
    error_callback_url?: string;
    id_custom_button?: string;
    buttonText?: string;
    buttonClass?: string;
}
declare const Feexpay: React.FC<FeexPayButtonProps>;
export default Feexpay;
