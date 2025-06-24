import { PaymentStatus, Network, Country } from '../types/index';
import { requestToPay, checkTransactionStatus } from '../apis/feexPayApi';

// Types nécessaires pour les fonctions
interface PaymentConfig {
  amount?: number;
  description?: string;
  customId?: string;
  shop: string;
  apiToken: string;
  callback?: (data: { reference: string; status: PaymentStatus }) => void;
  callbackUrl?: string;
  error_callback_url?: string;
  fields_to_hide?: string[];
}

interface PaymentHandlerProps {
  phoneNumber: string;
  baseAmount: number;
  network: Network;
  country: Country;
  paymentConfig: PaymentConfig;
  transactionReference: string;
  generateRandomId: () => string;
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
      apiToken: paymentConfig.apiToken
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
          status: 'INSUFFICIENT_FUNDS'
        });
      }
      
      // Rediriger vers l'URL d'erreur si fournie
      if (paymentConfig.error_callback_url) {
        window.location.href = `${paymentConfig.error_callback_url}?reference=${response.reference}&status=INSUFFICIENT_FUNDS`;
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
          status: 'FAILED'
        });
      }
      
      // Rediriger vers l'URL d'erreur si fournie
      if (paymentConfig.error_callback_url) {
        window.location.href = `${paymentConfig.error_callback_url}?reference=${response.reference}&status=FAILED`;
      }
      return;
    }
    
    setTransactionReference(response.reference);
    // Ne pas appeler startStatusCheck ici, cela sera fait par le composant
    return { reference: response.reference };
  } catch (error) {
    console.error('Payment initiation failed:', error);
    setPaymentStatus('FAILED');
    setStatusMessage('Le paiement a échoué. Veuillez réessayer.');
    setStatusModalOpen(true);
    setIsLoading(false); 
  }
};

/**
 * Vérifie périodiquement le statut d'une transaction
 */
export const startStatusCheck = (ref: string, props: PaymentHandlerProps) => {
  let checkCount = 0;
  const maxChecks = 30; // 60 secondes (30 * 2000ms)
  
  const {
    paymentConfig,
        setStateCallbacks
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
            status: 'INSUFFICIENT_FUNDS'
          });
        }
        
        // Rediriger vers l'URL d'erreur si fournie
        if (paymentConfig.error_callback_url) {
          window.location.href = `${paymentConfig.error_callback_url}?reference=${ref}&status=INSUFFICIENT_FUNDS`;
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
            status: 'FAILED'
          });
        }
        
        // Rediriger vers l'URL d'erreur si fournie
        if (paymentConfig.error_callback_url) {
          window.location.href = `${paymentConfig.error_callback_url}?reference=${ref}&status=FAILED`;
        }
        return;
      }
      
      // Si aucune raison spécifique n'est trouvée, déterminer le statut de paiement en fonction de la réponse de l'API
      const paymentStatus = status.status.toUpperCase() as PaymentStatus;
      
      // Gérer les différents statuts possibles
      switch (paymentStatus) {
        case 'SUCCESSFUL':
          clearInterval(intervalId);
          setPaymentStatus('SUCCESSFUL');
          setStatusMessage('Paiement réussi !');
          setStatusModalOpen(true);
          setIsLoading(false);
          
          // Appeler la fonction de callback si fournie
          if (paymentConfig.callback) {
            paymentConfig.callback({
              reference: status.reference,
              status: paymentStatus
            });
          }
          
          // Rediriger vers l'URL de callback si fournie
          if (paymentConfig.callbackUrl) {
            window.location.href = `${paymentConfig.callbackUrl}?reference=${ref}&status=${paymentStatus}`;
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
              status: paymentStatus
            });
          }
          
          // Rediriger vers l'URL d'erreur si fournie
          if (paymentConfig.error_callback_url) {
            window.location.href = `${paymentConfig.error_callback_url}?reference=${ref}&status=${paymentStatus}`;
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
              status: paymentStatus
            });
          }
          
          // Rediriger vers l'URL d'erreur si fournie
          if (paymentConfig.error_callback_url) {
            window.location.href = `${paymentConfig.error_callback_url}?reference=${ref}&status=${paymentStatus}`;
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
              status: paymentStatus
            });
          }
          
          // Rediriger vers l'URL d'erreur si fournie
          if (paymentConfig.error_callback_url) {
            window.location.href = `${paymentConfig.error_callback_url}?reference=${ref}&status=${paymentStatus}`;
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
                status: 'TIMEOUT'
              });
            }
            
            // Rediriger vers l'URL d'erreur si fournie
            if (paymentConfig.error_callback_url) {
              window.location.href = `${paymentConfig.error_callback_url}?reference=${ref}&status=TIMEOUT`;
            }
          }
          break;
          
        default:
          // Pour tout autre statut non géré, continuer à vérifier jusqu'à atteindre le nombre maximum de vérifications
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
                status: 'TIMEOUT'
              });
            }
            
            // Rediriger vers l'URL d'erreur si fournie
            if (paymentConfig.error_callback_url) {
              window.location.href = `${paymentConfig.error_callback_url}?reference=${ref}&status=TIMEOUT`;
            }
          }
          break;
      }
    } catch (error) {
      console.error('Error checking transaction status:', error);
      
      // En cas d'erreur lors de la vérification, continuer à vérifier jusqu'à atteindre le nombre maximum de vérifications
      if (checkCount >= maxChecks) {
        clearInterval(intervalId);
        setPaymentStatus('TIMEOUT');
        setStatusMessage('La vérification du paiement a échoué. Veuillez vérifier votre compte pour confirmer le statut.');
        setStatusModalOpen(true);
        setIsLoading(false);
        
        // Appeler la fonction de callback si fournie
        if (paymentConfig.callback) {
          paymentConfig.callback({
            reference:  ref,
            status: 'TIMEOUT'
          });
        }
        
        // Rediriger vers l'URL d'erreur si fournie
        if (paymentConfig.error_callback_url) {
          window.location.href = `${paymentConfig.error_callback_url}?reference=${ref}&status=TIMEOUT`;
        }
      }
    }
  }, 2000); // Vérifier toutes les 2 secondes
  
  return intervalId;
};
