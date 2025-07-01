import  { createContext, useContext, useState, ReactNode } from 'react';
import { PaymentConfig } from '../types/index';

interface FeexPayContextType {
  paymentConfig: PaymentConfig;
  setPaymentConfig: (config: PaymentConfig) => void;
}

const FeexPayContext = createContext<FeexPayContextType | undefined>(undefined);

export const useFeexPay = (): FeexPayContextType => {
  const context = useContext(FeexPayContext);
  if (!context) {
    throw new Error('useFeexPay must be used within a FeexPayProvider');
  }
  return context;
};

interface FeexPayProviderProps {
  children: ReactNode;
}

const defaultPaymentConfig: PaymentConfig = {
  amount: 0,
  description: '',
  id: '',
  token: '',
  mode: 'SANDBOX',
};

export const FeexPayProvider: React.FC<FeexPayProviderProps> = ({ children }) => {
  const [paymentConfig, setPaymentConfig] = useState<PaymentConfig>(defaultPaymentConfig);

  return (
    <FeexPayContext.Provider value={{ paymentConfig, setPaymentConfig }}>
      {children}
    </FeexPayContext.Provider>
  );
};
