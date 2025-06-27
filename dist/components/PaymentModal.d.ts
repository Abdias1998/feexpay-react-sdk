import React from 'react';
interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
}
declare const PaymentModal: React.FC<PaymentModalProps>;
export default PaymentModal;
