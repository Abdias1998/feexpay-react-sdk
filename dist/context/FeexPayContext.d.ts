import React, { ReactNode } from 'react';
import { PaymentConfig } from '../types/index';
interface FeexPayContextType {
    paymentConfig: PaymentConfig;
    setPaymentConfig: (config: PaymentConfig) => void;
}
export declare const useFeexPay: () => FeexPayContextType;
interface FeexPayProviderProps {
    children: ReactNode;
}
export declare const FeexPayProvider: React.FC<FeexPayProviderProps>;
export {};
