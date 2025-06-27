import React from 'react';
interface OTPModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (otp: string) => void;
    reference: string;
}
declare const OTPModal: React.FC<OTPModalProps>;
export default OTPModal;
