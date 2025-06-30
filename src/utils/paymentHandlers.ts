import { PaymentStatus, Network, Country, PaymentConfig } from '../types/index';
import { requestToPay, checkTransactionStatus } from '../apis/feexPayApi';



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
  isCallbackCalledRef: React.MutableRefObject<boolean>;
  setStateCallbacks: {
    setTransactionReference: (ref: string) => void;
    setPaymentStatus: (status: PaymentStatus) => void;
    setStatusMessage: (message: string) => void;
    setStatusModalOpen: (isOpen: boolean) => void;
    setIsLoading: (isLoading: boolean) => void;
  };
}

/**
 * Gère la soumission du paiement
 * @returns Une promesse qui résout avec la référence de transaction
 */
export const handlePaymentSubmit = async (
  e: React.FormEvent,
  props: PaymentHandlerProps,
  validateForm: () => boolean,
  getFormattedPhoneNumber: () => string
): Promise<{ reference: string } | undefined> => {
  e.preventDefault();

  if (!validateForm()) {
    return;
  }

  const {
    baseAmount,
    network,
    country,
    paymentConfig,
    generateRandomId,
    fullName,
    email,
    setStateCallbacks
  } = props;

  const {
    setTransactionReference,
    setPaymentStatus,
    setStatusMessage,
    setStatusModalOpen,
    setIsLoading
  } = setStateCallbacks;

  setIsLoading(true);

  try {
    const formattedPhoneNumber = getFormattedPhoneNumber();
    const response = await requestToPay({
      phoneNumber: formattedPhoneNumber,
      amount: baseAmount, // Envoyer le montant sans frais
      network,
      country, // Ajout du paramètre country
      description: paymentConfig.description,
      customId: paymentConfig.customId || generateRandomId(),
      shop: paymentConfig.shop,
      apiToken: paymentConfig.apiToken,
      currency: paymentConfig.currency || "XOF",
      callback_info: paymentConfig.callback_info || {},
      first_name: fullName,
      email: email,
    });
    
    // Vérifier les codes de statut spécifiques
    if (response.statusCode === "10") {
      // Code 10: Fonds insuffisants
      setPaymentStatus('INSUFFICIENT_FUNDS');
      setStatusMessage('Fonds insuffisants. Veuillez vérifier votre solde et réessayer.');
      setStatusModalOpen(true);
      setIsLoading(false);
      
      // Appeler la fonction de callback si fournie
      if (paymentConfig.callback) {
        paymentConfig.callback({
          reference: response.reference,
          status: 'FAILED',
          phoneNumber: formattedPhoneNumber,
          reseau: network,
          callback_info: paymentConfig.callback_info || {},
          description: paymentConfig.description,
          transaction_id: response.reference,
          message:"Le paiement a échoué. Veuillez vérifier votre solde et réessayer.",
          amount: paymentConfig.amount,
          currency: paymentConfig.currency || "XOF",
          first_name: fullName,
          email: email,
        });
      }
      
      // Rediriger vers l'URL d'erreur si fournie
      if (paymentConfig.error_callback_url) {
        window.location.href = `${paymentConfig.error_callback_url}?ref=${response.reference}`;
      }
      return;
    } else if (response.statusCode === "92") {
      // Code 92: Transaction annulée
      setPaymentStatus('FAILED');
      setStatusMessage('La transaction a été annulée. Veuillez réessayer.');
      setStatusModalOpen(true);
      setIsLoading(false);
      
      // Appeler la fonction de callback si fournie
      if (paymentConfig.callback) {
        paymentConfig.callback({
          reference: response.reference,
          status: 'FAILED',
          phoneNumber: formattedPhoneNumber,
          reseau: network,
          callback_info: paymentConfig.callback_info || {},
          description: paymentConfig.description,
          transaction_id: response.reference,
          message:"La transaction a été annulée. Veuillez réessayer.",
          amount: paymentConfig.amount,
          first_name: fullName,
          email: email,
          currency: paymentConfig.currency || "XOF" ,
        });
      }
      
      // Rediriger vers l'URL d'erreur si fournie
      if (paymentConfig.error_callback_url) {
        window.location.href = `${paymentConfig.error_callback_url}?ref=${response.reference}`;
      }
      return;
    }
    
    setTransactionReference(response.reference);
    startStatusCheck(response.reference, props, network, getFormattedPhoneNumber);

    return { reference: response.reference };
  } catch (error) {
    console.error('Payment error:', error);
    setPaymentStatus('FAILED');
    setStatusMessage('Le paiement a échoué. Veuillez réessayer.');
    setStatusModalOpen(true);
    setIsLoading(false);
  }
};

/**
 * Vérifie périodiquement le statut d'une transaction
 */
export const startStatusCheck = (ref: string, props: PaymentHandlerProps, network: Network, getFormattedPhoneNumber: () => string) => {
  let checkCount = 0;
  const maxChecks = 12; // 60 secondes (12 * 5000ms)
  let isCallbackCalled = false; // Flag to ensure callback is called only once
  let timeoutId: NodeJS.Timeout | null = null;

  const {
    paymentConfig,
    setStateCallbacks,
    fullName,
    email,
  } = props;

  const {
    setPaymentStatus,
    setStatusMessage,
    setStatusModalOpen,
    setIsLoading
  } = setStateCallbacks;

  const handleFinalStatus = (status: PaymentStatus, message: string, callbackStatus: PaymentStatus) => {
    if (props.isCallbackCalledRef.current) return;
    props.isCallbackCalledRef.current = true;

    if (timeoutId) clearTimeout(timeoutId);

    setPaymentStatus(status);
    setStatusMessage(message);
    setStatusModalOpen(true);
    setIsLoading(false);

    const callbackData = {
      reference: ref,
      status: callbackStatus,
      phoneNumber: getFormattedPhoneNumber(),
      reseau: network as string,
      callback_info: paymentConfig.callback_info || {},
      description: paymentConfig.description,
      transaction_id: ref,
      message: message,
      amount: paymentConfig.amount,
      currency: (paymentConfig.currency || "XOF") as string,
      first_name: fullName,
      email: email,
    };

    if (paymentConfig.callback) {
      paymentConfig.callback(callbackData);
    }

    const isSuccess = callbackStatus === 'SUCCESSFUL' || callbackStatus === 'SUCCESS';
    if (isSuccess && paymentConfig.callbackUrl) {
      window.location.href = `${paymentConfig.callbackUrl}?ref=${ref}`;
    } else if (!isSuccess && paymentConfig.error_callback_url) {
      window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
    }
  };

  const checkStatus = async () => {
    if (isCallbackCalled) return;
    checkCount++;

    try {
      const status = await checkTransactionStatus(ref);

      if (status.reason === "LOW_BALANCE_OR_PAYEE_LIMIT_REACHED_OR_NOT_ALLOWED") {
        handleFinalStatus('INSUFFICIENT_FUNDS', 'Fonds insuffisants. Veuillez vérifier votre solde et réessayer.', 'FAILED');
        return;
      } else if (status.reason === "PAYER NOT FOUND") {
        handleFinalStatus('FAILED', 'Numéro de téléphone non trouvé. Veuillez vérifier le numéro et réessayer.', 'FAILED');
        return;
      }

      const paymentStatus = status.status.toUpperCase() as PaymentStatus;

      switch (paymentStatus) {
        case 'SUCCESSFUL':
        case 'SUCCESS':
          handleFinalStatus('SUCCESSFUL', 'Paiement réussi !', paymentStatus);
          break;
        case 'FAILED':
          handleFinalStatus('FAILED', 'Le paiement a échoué. Veuillez réessayer.', 'FAILED');
          break;
        case 'INSUFFICIENT_FUNDS':
          handleFinalStatus('INSUFFICIENT_FUNDS', 'Fonds insuffisants. Veuillez vérifier votre solde et réessayer.', 'INSUFFICIENT_FUNDS');
          break;
        case 'TIMEOUT':
            handleFinalStatus('TIMEOUT', 'La vérification du paiement a expiré.', 'TIMEOUT');
            break;
        case 'PENDING':
          if (checkCount >= maxChecks) {
            handleFinalStatus('TIMEOUT', 'La vérification du paiement a expiré. Veuillez vérifier votre compte.', 'TIMEOUT');
          } else {
            timeoutId = setTimeout(checkStatus, 5000);
          }
          break;
        default:
          if (checkCount >= maxChecks) {
            handleFinalStatus('TIMEOUT', 'Statut de transaction inconnu après plusieurs tentatives.', 'TIMEOUT');
          }
          break;
      }
    } catch (error) {
      console.error(`Status check failed for ref ${ref}:`, error);
      if (checkCount >= maxChecks) {
        handleFinalStatus('TIMEOUT', 'La vérification du paiement a échoué après plusieurs tentatives.', 'TIMEOUT');
      }
    }
  };

  checkStatus();

  return () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    isCallbackCalled = true; // Prevent any further callbacks when component unmounts
  };
};
    

