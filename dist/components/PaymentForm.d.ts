import React from 'react';
interface PaymentFormProps {
    fullName: string;
    setFullName: (value: string) => void;
    email: string;
    setEmail: (value: string) => void;
    onSubmit: (e: React.FormEvent) => void;
}
declare const PaymentForm: React.FC<PaymentFormProps>;
export default PaymentForm;
