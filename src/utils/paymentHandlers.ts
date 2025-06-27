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
      currency: paymentConfig.currency,
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
          currency: paymentConfig.currency ,
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
          currency: paymentConfig.currency ,
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
  const maxChecks = 12; // 60 secondes (30 * 2000ms)
  
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
  
  const intervalId = setInterval(async () => {
    checkCount++;
    
    try {
      // Vérifier le statut de la transaction avec l'API
      const status = await checkTransactionStatus(ref);
      // console.log(`Transaction status check ${checkCount}:`, status);
      
      // Vérifier d'abord les raisons d'échec spécifiques
      if (status.reason === "LOW_BALANCE_OR_PAYEE_LIMIT_REACHED_OR_NOT_ALLOWED") {
        clearInterval(intervalId);
        setPaymentStatus('INSUFFICIENT_FUNDS');
        setStatusMessage('Fonds insuffisants. Veuillez vérifier votre solde et réessayer.');
        setStatusModalOpen(true);
        setIsLoading(false);
        
        // Appeler la fonction de callback si fournie
        if (paymentConfig.callback) {
          paymentConfig.callback({
            reference: status.reference,
            status: 'FAILED',
            phoneNumber: getFormattedPhoneNumber(),
            reseau: network,
            callback_info:paymentConfig.callback_info ,
            description: paymentConfig.description,
            transaction_id: status.reference,
            message:"Le paiement a échoué. Veuillez vérifier votre solde et réessayer.",
            amount: paymentConfig.amount,
            first_name: fullName,
            email: email,
            currency: paymentConfig.currency ,
    
          });
        }
        
        // Rediriger vers l'URL d'erreur si fournie
        if (paymentConfig.error_callback_url) {
          window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
        }
        return;
      } else if (status.reason === "PAYER NOT FOUND") {
        clearInterval(intervalId);
        setPaymentStatus('FAILED');
        setStatusMessage('Numéro de téléphone non trouvé. Veuillez vérifier le numéro et réessayer.');
        setStatusModalOpen(true);
        setIsLoading(false);
        
        // Appeler la fonction de callback si fournie
        if (paymentConfig.callback) {
          paymentConfig.callback({
            reference: status.reference,
            status: 'FAILED',
            phoneNumber: getFormattedPhoneNumber(),
            reseau: network,
            callback_info:paymentConfig.callback_info ,
            description: paymentConfig.description,
            transaction_id: status.reference,
            message:"Le paiement a echoué. Veuillez vérifier le numéro et réessayer.",
            amount: paymentConfig.amount,
            first_name: fullName,
            email: email,
            currency: paymentConfig.currency ,
          });
        }
        
        // Rediriger vers l'URL d'erreur si fournie
        if (paymentConfig.error_callback_url) {
          window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
        }
        return;
      }
      
      // Si aucune raison spécifique n'est trouvée, déterminer le statut de paiement en fonction de la réponse de l'API
      const paymentStatus = status.status.toUpperCase() as PaymentStatus;
      
      // Gérer les différents statuts possibles
      switch (paymentStatus) {
        case 'SUCCESSFUL':
        case 'SUCCESS':
          clearInterval(intervalId);
          setPaymentStatus('SUCCESSFUL');
          setStatusMessage('Paiement réussi !');
          setStatusModalOpen(true);
          setIsLoading(false);
          
          // Appeler la fonction de callback si fournie
          if (paymentConfig.callback) {
            paymentConfig.callback({
              reference: status.reference,
              status: paymentStatus,
              phoneNumber: getFormattedPhoneNumber(),
              reseau: network,
              callback_info:paymentConfig.callback_info || {},
              description: paymentConfig.description,
              transaction_id: status.reference,
              message:"La transaction a été effectuée avec succès.",
              amount: paymentConfig.amount,
              currency: paymentConfig.currency,
              first_name: fullName,
              email: email,
            });
          }
          
          // Rediriger vers l'URL de callback si fournie
          if (paymentConfig.callbackUrl) {
            window.location.href = `${paymentConfig.callbackUrl}?ref=${ref}`;
          }
          break;
          
        case 'FAILED':
          clearInterval(intervalId);
          setPaymentStatus('FAILED');
          setStatusMessage('Le paiement a échoué. Veuillez réessayer ou utiliser une autre méthode de paiement.');
          setStatusModalOpen(true);
          setIsLoading(false);
          
          // Appeler la fonction de callback si fournie
          if (paymentConfig.callback) {
            paymentConfig.callback({
              reference: status.reference,
              status: paymentStatus,
              phoneNumber: getFormattedPhoneNumber(),
              reseau: network,
              callback_info:paymentConfig.callback_info || {},
              description: paymentConfig.description,
              transaction_id: status.reference,
              message:"Le paiement a échoué. Veuillez réessayer ou utiliser une autre méthode de paiement.",
              amount: paymentConfig.amount,
              currency: paymentConfig.currency,
              first_name: fullName,
              email: email,
            });
          }
          
          // Rediriger vers l'URL d'erreur si fournie
          if (paymentConfig.error_callback_url) {
            window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
          }
          break;
          
        case 'INSUFFICIENT_FUNDS':
          clearInterval(intervalId);
          setPaymentStatus('INSUFFICIENT_FUNDS');
          setStatusMessage('Fonds insuffisants. Veuillez vérifier votre solde et réessayer.');
          setStatusModalOpen(true);
          setIsLoading(false);
          
          // Appeler la fonction de callback si fournie
          if (paymentConfig.callback) {
            paymentConfig.callback({
              reference: status.reference,
              status: paymentStatus,
              phoneNumber: getFormattedPhoneNumber(),
              reseau: network,
              callback_info:paymentConfig.callback_info || {},
              description: paymentConfig.description,
              transaction_id: status.reference,
              message:"Le paiement a échoué. Veuillez vérifier votre solde et réessayer.",
              amount: paymentConfig.amount,
              currency: paymentConfig.currency,
              first_name: fullName,
              email: email,
            });
          }
          
          // Rediriger vers l'URL d'erreur si fournie
          if (paymentConfig.error_callback_url) {
            window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
          }
          break;
          
        case 'TIMEOUT':
          clearInterval(intervalId);
          setPaymentStatus('TIMEOUT');
          setStatusMessage('La vérification du paiement a expiré. Veuillez vérifier votre compte pour confirmer le statut.');
          setStatusModalOpen(true);
          setIsLoading(false);
          
          // Appeler la fonction de callback si fournie
          if (paymentConfig.callback) {
            paymentConfig.callback({
              reference: status.reference,
              status: paymentStatus,
              phoneNumber: getFormattedPhoneNumber(),
              reseau: network,
              callback_info:paymentConfig.callback_info || {},
              description: paymentConfig.description,
              transaction_id: status.reference,
              message:"La vérification du paiement a expiré. Veuillez vérifier votre compte pour confirmer le statut.",
              amount: paymentConfig.amount,
              currency: paymentConfig.currency,
              first_name: fullName,
              email: email,
            });
          }
          
          // Rediriger vers l'URL d'erreur si fournie
          if (paymentConfig.error_callback_url) {
            window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
          }
          break;
          
        case 'PENDING':
          // Si le statut est toujours en attente et que nous avons atteint le nombre maximum de vérifications
          if (checkCount >= maxChecks) {
            clearInterval(intervalId);
            setPaymentStatus('TIMEOUT');
            setStatusMessage('La vérification du paiement a expiré. Veuillez vérifier votre compte pour confirmer le statut.');
            setStatusModalOpen(true);
            setIsLoading(false);
            
            // Appeler la fonction de callback si fournie
            if (paymentConfig.callback) {
              paymentConfig.callback({
                reference: status.reference,
                status: 'TIMEOUT',
                phoneNumber: getFormattedPhoneNumber(),
                reseau: network,
                callback_info:paymentConfig.callback_info || {},
                description: paymentConfig.description,
                transaction_id: status.reference,
                message:"La vérification du paiement a expiré. Veuillez vérifier votre compte pour confirmer le statut.",
                amount: paymentConfig.amount,
                currency: paymentConfig.currency,
                first_name: fullName,
                email: email,
              });
            }
            
            // Rediriger vers l'URL d'erreur si fournie
            if (paymentConfig.error_callback_url) {
              window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
            }
          }
          break;
          
        default:
          // Pour tout autre statut non géré, continuer à vérifier jusqu'à atteindre le nombre maximum de vérifications
          if (checkCount >= maxChecks) {
            clearInterval(intervalId);
            setPaymentStatus('TIMEOUT');
            setStatusMessage('Le statut de la transaction est inconnu après plusieurs tentatives.');
            setStatusModalOpen(true);
            setIsLoading(false);
            
            if (paymentConfig.callback) {
              paymentConfig.callback({
                reference: ref,
                status: 'TIMEOUT',
                phoneNumber: getFormattedPhoneNumber(),
                reseau: network,
                callback_info: paymentConfig.callback_info,
                description: paymentConfig.description,
                transaction_id: ref,
                message: 'Le statut de la transaction est inconnu après plusieurs tentatives.',
                amount: paymentConfig.amount,
                
                currency    : paymentConfig.currency,
                first_name: fullName,
                email: email,
              });
            }

            if (paymentConfig.error_callback_url) {
              window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
            }
          }
          break;
      }
    } catch (error) {
      console.error(`Status check failed for ref ${ref}:`, error);
      if (checkCount >= maxChecks) {
        clearInterval(intervalId);
        setPaymentStatus('TIMEOUT');
        setStatusMessage('La vérification du paiement a échoué après plusieurs tentatives.');
        setStatusModalOpen(true);
        setIsLoading(false);

        if (paymentConfig.callback) {
          paymentConfig.callback({
            reference: ref,
            status: 'TIMEOUT',
            phoneNumber: getFormattedPhoneNumber(),
            reseau: network,
            callback_info: paymentConfig.callback_info,
            description: paymentConfig.description,
            transaction_id: ref,
            message: 'La vérification du paiement a échoué après plusieurs tentatives.',
            amount: paymentConfig.amount,
            
            currency: paymentConfig.currency,
            first_name: fullName,
            email: email,
          });
        }

        if (paymentConfig.error_callback_url) {
          window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
        }
      }
    }
  }, 20000);

  return () => {
    clearInterval(intervalId);
  };
};
    

