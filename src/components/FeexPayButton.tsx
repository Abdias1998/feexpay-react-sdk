import React, { useState, useEffect, useRef, useCallback } from 'react';
import PaymentModal from './PaymentModal';
import { useFeexPay } from '../context/FeexPayContext';
import { PaymentStatus, Currency } from 'src/types';

interface FeexPayButtonProps {
  amount: number;
  description: string;
  shop: string;
  apiToken: string;
  callbackUrl?: string;
  mode?: 'SANDBOX' | 'LIVE';
  customId?: string;
  fields_to_hide?: string[];
  callback?: (response: { reference: string; status: PaymentStatus;phoneNumber: string;reseau: string;callback_info: string;
    description : string;transaction_id : string;message:string;amount:number;email:string;currency:string; }) => void;
  currency?: Currency;
  /**
   * Spécifie le type de méthode de paiement à afficher dans le modal.
   * Si défini, le modal n'affichera que le formulaire correspondant à cette méthode.
   * Valeurs possibles: 'MOBILE', 'CARD', 'WALLET'
   */
  case?: string;
  callback_info?: Record<string, unknown>;
  error_callback_url?: string;
  custom_button?: boolean;
  id_custom_button?: string;
  buttonText?: string;
  buttonClass?: string;
}

const FeexPayButton: React.FC<FeexPayButtonProps> = ({
  amount,
  description,
  shop,
  apiToken,
  callbackUrl,
  mode = 'LIVE',
  customId,
  fields_to_hide,
  callback,
  currency = 'XOF',
  case: caseType,
  callback_info,
  error_callback_url,
  custom_button = false,
  // id_custom_button is handled at the SDK level, not needed in component
  buttonText = `Payer ${amount} ${currency}`,
  buttonClass,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setPaymentConfig } = useFeexPay();
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePaymentClick = useCallback(() => {
    setPaymentConfig({
      amount,
      description,
      shop,
      apiToken,
      callbackUrl,
      mode,
      customId: customId || generateRandomId(),
      fields_to_hide,
      callback,
      currency,
      case: caseType,
      callback_info,
      error_callback_url,
    });
    setIsModalOpen(true);
  }, [
    amount,
    description,
    shop,
    apiToken,
    callbackUrl,
    mode,
    customId,
    fields_to_hide,
    callback,
    currency,
    caseType,
    callback_info,
    error_callback_url,
    setPaymentConfig,
    setIsModalOpen
  ]);
  
  // Listen for custom trigger events
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleTrigger = () => {
      handlePaymentClick();
    };
    
    container.addEventListener('feexpay:trigger', handleTrigger);
    
    return () => {
      container.removeEventListener('feexpay:trigger', handleTrigger);
    };
  }, [handlePaymentClick]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const generateRandomId = () => {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  };

  return (
    <div ref={containerRef}>
     
      {!custom_button && (
        <button
          onClick={handlePaymentClick}
          className={buttonClass || "w-full bg-primary-orange hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"}
        >
          {buttonText}
        </button>
      )}


      {isModalOpen && (
        <PaymentModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default FeexPayButton;