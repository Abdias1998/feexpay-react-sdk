import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PaymentConfig } from '../types/index';

interface FeexPayContextType {
  paymentConfig: PaymentConfig;
  setPaymentConfig: (config: PaymentConfig) => void;
}

const defaultPaymentConfig: PaymentConfig = {
  amount: 0,
  description: '',
  shop: '',
  apiToken: '',
  mode: 'SANDBOX',
};

const FeexPayContext = createContext<FeexPayContextType>({
  paymentConfig: defaultPaymentConfig,
  setPaymentConfig: () => {},
});

export const useFeexPay = () => useContext(FeexPayContext);

interface FeexPayProviderProps {
  children: ReactNode;
}

export const FeexPayProvider: React.FC<FeexPayProviderProps> = ({ children }) => {
  const [paymentConfig, setPaymentConfig] = useState<PaymentConfig>(defaultPaymentConfig);

  return (
    <FeexPayContext.Provider value={{ paymentConfig, setPaymentConfig }}>
      {children}
    </FeexPayContext.Provider>
  );
};