import React, { useState, useEffect, useRef, useCallback } from 'react';
import PaymentModal from './PaymentModal';
import { useFeexPay } from '../context/FeexPayContext';
import { PaymentStatus, Currency } from 'src/types';
import { getShop } from '../apis/feexPayApi';

interface FeexPayButtonProps {
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
    callback_info: string;
    description: string;
    transaction_id: string;
    message: string;
    amount: number;
    email: string;
    currency: string;
  }) => void;
  currency?: Currency;
  case?: string;
  callback_info?: Record<string, unknown>;
  error_callback_url?: string;
  custom_button?: boolean;
  id_custom_button?: string;
  buttonText?: string;
  buttonClass?: string;
}

const Feexpay: React.FC<FeexPayButtonProps> = ({
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
  buttonText = `Payer ${amount} ${currency}`,
  buttonClass,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setPaymentConfig } = useFeexPay();
  const containerRef = useRef<HTMLDivElement>(null);

  const [shopLoaded, setShopLoaded] = useState(false);
  const [shopError, setShopError] = useState<string | null>(null);

  useEffect(() => {
    const loadShop = async () => {
      try {
        await getShop(shop); // Appel API ici
        setShopLoaded(true);
      } catch {
        setShopError("Veuillez vérifier vos identifiants de boutique (ID et token) et rester en mode LIVE.");
      }
    };
    loadShop();
  }, [shop]);

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
    setPaymentConfig
  ]);

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
      {shopError ? (
        <p className="text-red-600 text-sm mb-2">{shopError}</p>
      ) : shopLoaded && !custom_button && (
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

export default Feexpay;
