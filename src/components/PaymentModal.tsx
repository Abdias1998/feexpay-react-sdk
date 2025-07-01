import { useState, useEffect, useCallback, useRef } from 'react';
import CountrySelector from './CountrySelector';
import NetworkSelector from './NetworkSelector';
import StatusModal from './StatusModal';
import OTPModal from './OTPModal';
import { useFeexPay } from '../context/FeexPayContext';
import { getNetworksForCountry, getNetworkByPhonePrefix, calculateFees as calculateFeesUtil, getNetworkApiCode } from '../utils/paymentUtils';
import { NETWORK_FEES } from '../constants';
import { Network, PaymentMethod, Country, PaymentStatus } from '../types/index';
import { getTransactionDetails, requestCardPayment, requestToPay, requestWalletCorisPayment } from '../apis/feexPayApi';

import { handlePaymentSubmit as submitPayment, startStatusCheck as checkStatus } from '../utils/paymentHandlers';
import HeaderBar from './HeaderBar';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal = ({ isOpen, onClose }: PaymentModalProps) => {
  const { paymentConfig } = useFeexPay();
  // Si case est défini dans paymentConfig, utiliser cette valeur, sinon utiliser 'MOBILE' par défaut
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>(() => {
    if (paymentConfig.case && ['MOBILE', 'CARD', 'WALLET'].includes(paymentConfig.case as string)) {
      return paymentConfig.case as PaymentMethod;
    }
    return 'MOBILE';
  });



  const [country, setCountry] = useState<Country>('BENIN');
  const [network, setNetwork] = useState<Network>('MTN');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [typeCard, setTypeCard] = useState<'VISA' | 'MASTERCARD'>('VISA');
  const [baseAmount, setBaseAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [fees, setFees] = useState(0);
  const [feePercentage, setFeePercentage] = useState(0);
  const [transactionReference, setTransactionReference] = useState('');
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('PENDING');
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // États pour la gestion du code OTP (Wallet Coris)
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [pendingReference, setPendingReference] = useState('');
  const [iframeUrl, setIframeUrl] = useState<string | null>(null);
  const isCallbackCalledRef = useRef(false);
  
  // Fonction de calcul local des frais (utilisée comme fallback si l'API n'est pas disponible)
  const calculateFeesLocally = useCallback((amount: number, country: Country, network: Network, paymentMethodOverride?: PaymentMethod) => {
    const currentPaymentMethod = paymentMethodOverride || paymentMethod;
    const calculatedFees = calculateFeesUtil(amount, country, network, currentPaymentMethod, typeCard);
    setFees(calculatedFees);
    setTotal(amount + calculatedFees);
    setBaseAmount(amount);
    
    if (paymentMethod === 'CARD' && (typeCard === 'VISA' || typeCard === 'MASTERCARD')) {
      setFeePercentage(4.5);
    } else {
      const countryFees = NETWORK_FEES[country];
      if (countryFees && countryFees[network]) {
        setFeePercentage(countryFees[network] * 100);
      } else {
        setFeePercentage(0);
      }
    }
  }, [paymentMethod, typeCard]);

 
  
    // Fonction pour récupérer les détails de transaction depuis l'API
    const fetchTransactionDetails = useCallback(async (amount: number, country: Country, network: Network, paymentMethodOverride?: PaymentMethod) => {
      try {
        // Utiliser la méthode de paiement fournie en paramètre ou celle de l'état
        const currentPaymentMethod = paymentMethodOverride || paymentMethod;
        
        // Pour toutes les méthodes de paiement, interroger l'API
        const details = await getTransactionDetails({
          network,
          country,
          amount,
          shop: paymentConfig.shop,
          apiToken: paymentConfig.apiToken,
          
          callback_info: paymentConfig.callback_info || {},
        });
        
        // Si ifFees est true, appliquer les frais
        if (details && details.iffees) {
          let feesApplied = false;
          // Gestion des frais minimums pour les petits montants
          if (amount <= 30) {
            const countryFees = NETWORK_FEES[country];
            if (countryFees && countryFees[network] && countryFees[network] > 0) {
              setFees(1);
              setTotal(amount + 1);
              setFeePercentage(countryFees[network] * 100);
              feesApplied = true;
            }
          }

          if (!feesApplied) {
            if (details.total !== undefined) {
              const calculatedFees = details.total - amount;
              setFees(calculatedFees);
              setTotal(details.total);
            } else {
              calculateFeesLocally(amount, country, network, currentPaymentMethod);
            }
            
            // Mise à jour du pourcentage des frais
            if (currentPaymentMethod === 'CARD') {
              setFeePercentage(4.5);
            } else {
              const countryFees = NETWORK_FEES[country];
              if (countryFees && countryFees[network]) {
                setFeePercentage(countryFees[network] * 100);
              } else {
                setFeePercentage(0);
              }
            }
          }
        } else {
          // Si ifFees est false, aucun frais n'est appliqué
          setFees(0);
          setTotal(amount);
          setFeePercentage(0);
        }
        
        setBaseAmount(amount);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails de transaction:', error);
        calculateFeesLocally(amount, country, network, paymentMethodOverride);
      }
    }, [paymentMethod, paymentConfig.shop, paymentConfig.apiToken, calculateFeesLocally]);

    
   // Effet pour initialiser le montant et les frais
   useEffect(() => {
    if (paymentConfig.amount) {
      setBaseAmount(paymentConfig.amount);
      fetchTransactionDetails(paymentConfig.amount, country, network);
    }
  }, [paymentConfig, country, network, fetchTransactionDetails]);
  // Effet pour initialiser correctement le réseau lorsque le mode de paiement est WALLET
  useEffect(() => {
    // Si le mode de paiement initial est WALLET, configurer correctement le réseau
    if (paymentMethod === 'WALLET') {
      if (country === 'BENIN') {
        setNetwork('CORIS');
        if (paymentConfig.amount) {
          fetchTransactionDetails(paymentConfig.amount, country, 'CORIS', paymentMethod);
        }
      } else if (country === 'COTE_D_IVOIRE') {
        setNetwork('WAVE');
        if (paymentConfig.amount) {
          fetchTransactionDetails(paymentConfig.amount, country, 'WAVE', paymentMethod);
        }
      } else {
        // Si le pays n'est ni le Bénin ni la Côte d'Ivoire, définir le pays sur Bénin par défaut pour le mode Wallet
        setCountry('BENIN');
        setNetwork('CORIS');
        if (paymentConfig.amount) {
          fetchTransactionDetails(paymentConfig.amount, 'BENIN', 'CORIS', paymentMethod);
        }
      }
    }
    // Nous utilisons un tableau de dépendances vide car nous voulons que cet effet s'exécute uniquement à l'initialisation
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleNetworkChange = (newNetwork: Network) => {
    setNetwork(newNetwork);
    if (paymentConfig.amount) {
      fetchTransactionDetails(paymentConfig.amount, country, newNetwork);
    }
  };

  // Fonction pour réinitialiser tous les champs
  const resetAllFields = () => {
    // Réinitialiser les champs communs
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    
    // Réinitialiser les champs spécifiques à la carte
    setTypeCard('VISA');
  };
  
  // Fonction pour gérer le changement de mode de paiement
  const handlePaymentMethodChange = (method: PaymentMethod) => {
    // Réinitialiser tous les champs avant de changer de méthode
    resetAllFields();
    
    // Réinitialiser les frais pour éviter qu'ils ne persistent
    setFees(0);
    setTotal(paymentConfig.amount || 0);
    setFeePercentage(0);
    
    // Changer la méthode de paiement
    setPaymentMethod(method);
    
    // Traitement spécifique selon la méthode de paiement
    if (method === 'WALLET') {
      // Si le mode est Wallet, mettre à jour le réseau en fonction du pays
      if (country === 'BENIN') {
        setNetwork('CORIS');
        if (paymentConfig.amount) {
          fetchTransactionDetails(paymentConfig.amount, country, 'CORIS', method);
        }
      } else if (country === 'COTE_D_IVOIRE') {
        setNetwork('WAVE');
        if (paymentConfig.amount) {
          fetchTransactionDetails(paymentConfig.amount, country, 'WAVE', method);
        }
      } else {
        // Si le pays n'est ni le Bénin ni la Côte d'Ivoire, définir le pays sur Bénin par défaut pour le mode Wallet
        setCountry('BENIN');
        setNetwork('CORIS');
        if (paymentConfig.amount) {
          fetchTransactionDetails(paymentConfig.amount, 'BENIN', 'CORIS', method);
        }
      }
    } else if (method === 'MOBILE') {
      // Pour Mobile Money, utiliser le réseau actuel ou le premier réseau disponible pour le pays
      const availableNetworks = getNetworksForCountry(country);
      if (availableNetworks.length > 0) {
        // Vérifier si le réseau actuel est valide pour ce pays
        if (!availableNetworks.includes(network)) {
          setNetwork(availableNetworks[0]);
        }
        
        if (paymentConfig.amount) {
          fetchTransactionDetails(paymentConfig.amount, country, network, method);
        }
      }
    } else if (method === 'CARD') {
      // Pour les paiements par carte, recalculer les frais avec le taux de 4,5%
      if (paymentConfig.amount) {
        fetchTransactionDetails(paymentConfig.amount, country, network, method);
      }
    }
  };

  const handleCountryChange = (newCountry: Country) => {
    setCountry(newCountry);
    
    // Logique spécifique pour le mode Wallet
    if (paymentMethod === 'WALLET') {
      // Définir automatiquement le réseau en fonction du pays pour le mode Wallet
      if (newCountry === 'BENIN') {
        setNetwork('CORIS');
        if (paymentConfig.amount) {
          fetchTransactionDetails(paymentConfig.amount, newCountry, 'CORIS');
        }
      } else if (newCountry === 'COTE_D_IVOIRE') {
        setNetwork('WAVE');
        if (paymentConfig.amount) {
          fetchTransactionDetails(paymentConfig.amount, newCountry, 'WAVE');
        }
      }
    } else {
      // Comportement normal pour les autres modes de paiement
      const availableNetworks = getNetworksForCountry(newCountry);
      setNetwork(availableNetworks[0]);
      
      if (paymentConfig.amount) {
        fetchTransactionDetails(paymentConfig.amount, newCountry, availableNetworks[0]);
      }
    }
  };
  
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // let value = e.target.value.replace(/\D/g, '');
    const value = e.target.value;
    
    // Ne pas changer dynamiquement le réseau si le mode de paiement est WALLET
    if (country === 'BENIN' && paymentMethod !== 'WALLET') {
      // Remove any existing "01" prefix
      // if (value.startsWith('01')) {
      //   value = value.substring(2);
      // }
      
      // Only detect network after the "01" prefix
      if (value.length >= 4) {
        const prefix = value.substring(0, 4);
        const detectedNetwork = getNetworkByPhonePrefix(prefix);
        if (detectedNetwork) {
          setNetwork(detectedNetwork);
        }
      }
    }
    
    setPhoneNumber(value);
  };

  const getFormattedPhoneNumber = () => {
    if (!phoneNumber) return phoneNumber;
  
    // Supprimer tous les caractères non numériques
    let cleaned = phoneNumber.replace(/[^0-9]/g, '');
  
    // Définir le préfixe selon le pays
    let prefix = '';
    switch (country) {
      case 'BENIN':
        prefix = '229';
        break;
      case 'COTE_D_IVOIRE':
        prefix = '225';
        break;
      case 'BURKINA_FASO':
        prefix = '226';
        break;
      case 'CONGO_BRAZZAVILLE':
        prefix = '242';
        break;
      case 'SENEGAL':
        prefix = '221';
        break;
      case 'TOGO':
        prefix = '228';
        break;
      default:
        return cleaned;
    }
  
    // Supprimer un double préfixe si présent
    if (cleaned.startsWith(prefix + prefix)) {
      cleaned = cleaned.slice(prefix.length);
    }
  
    // Supprimer le préfixe s’il est déjà là une fois
    if (cleaned.startsWith(prefix)) {
      return cleaned;
    }
  
    // Ajouter le préfixe sinon
    return prefix + cleaned;
  };
  
  const getPrefixFromCountry = (country: string): string => {
    switch (country) {
      case 'BENIN':
        return '+229';
      case 'COTE_D_IVOIRE':
        return '+225';
      case 'BURKINA_FASO':
        return '+226';
      case 'CONGO_BRAZZAVILLE':
        return '+242';
      case 'SENEGAL':
        return '+221';
      case 'TOGO':
        return '+228';
      default:
        return '';
    }
  };
  
  // Fonction de calcul local des frais (utilisée comme fallback si l'API n'est pas disponible)
  // const calculateFeesLocally = useCallback((amount: number, country: Country, network: Network, paymentMethodOverride?: PaymentMethod) => {
  //   // Utiliser la méthode de paiement fournie en paramètre ou celle de l'état
  //   const currentPaymentMethod = paymentMethodOverride || paymentMethod;
    
  //   // Utiliser la fonction globale qui prend en compte tous les pays et le type de paiement
  //   const calculatedFees = calculateFeesUtil(amount, country, network, currentPaymentMethod, typeCard);
  //   setFees(calculatedFees);
  //   setTotal(amount + calculatedFees);
  //   setBaseAmount(amount);
    
  //   // Récupérer le pourcentage des frais pour l'affichage
  //   if (paymentMethod === 'CARD' && (typeCard === 'VISA' || typeCard === 'MASTERCARD')) {
  //     // Pour les paiements par carte, afficher 4,5%
  //     setFeePercentage(4.5);
  //   } else {
  //     const countryFees = NETWORK_FEES[country];
  //     if (countryFees && countryFees[network]) {
  //       setFeePercentage(countryFees[network] * 100);
  //     } else {
  //       setFeePercentage(0);
  //     }
  //   }
  // }, [paymentMethod, typeCard]);


  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    isCallbackCalledRef.current = false;
    setIsLoading(true);
    

    const iframeNetworks: string[] = ['MOOV CI', 'ORANGE CI', 'MOOV BF', 'ORANGE BF', 'FREE SN', 'WAVE CI'];
    const networkApiCode = getNetworkApiCode(country, network);

    if (iframeNetworks.includes(networkApiCode)) {
      try {
        const response = await requestToPay({
          phoneNumber: getFormattedPhoneNumber(),
          amount: baseAmount,
          network,
          country,
          description: paymentConfig.description || 'Payment',
          customId: paymentConfig.customId || '',
          shop: paymentConfig.shop,
          apiToken: paymentConfig.apiToken,
          currency: paymentConfig.currency || 'XOF',
          callback_info: paymentConfig.callback_info || {},
          first_name: fullName|| '',
          email: email || '',
          
        });
        if (response.payment_url) {
          setIframeUrl(response.payment_url);
        }

        // Que l'URL de paiement soit présente ou non, nous devons suivre le statut
        if (response.reference) {
          setTransactionReference(response.reference);
          handleStatusCheck(response.reference);
         
         
        } else if (!response.payment_url) {
          // Gérer le cas où il n'y a ni URL de paiement ni référence
          throw new Error('La réponse de paiement est invalide.');
        }
      } catch (error) {
        console.error('Payment error:', error);
        setPaymentStatus('FAILED');
        setStatusMessage('Le paiement a échoué. Veuillez réessayer.');
        setStatusModalOpen(true);
      } finally {
        setIsLoading(false);
      }
      return;
    }

    try {
      // Traitement différent selon le mode de paiement
      if (paymentMethod === 'CARD') {
        // Extraire le prénom et le nom
        const nameParts = fullName.split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';
        
        // Appel API pour le paiement par carte
        const response = await requestCardPayment({
          phone: phoneNumber,
          amount: baseAmount,
          shop: paymentConfig.shop,
          first_name: firstName,
          last_name: lastName,
          email: email,
          type_card: typeCard,
          apiToken: paymentConfig.apiToken,
          currency: paymentConfig.currency || 'XOF',
          
        });
        
        if (response && response.reference) {
          setTransactionReference(response.reference);
          handleStatusCheck(response.reference);
        } else {
          setPaymentStatus('FAILED');
          setStatusMessage('La demande de paiement par carte a échoué. Veuillez réessayer.');
          setStatusModalOpen(true);
          setIsLoading(false);
        }
      } else if (paymentMethod === 'MOBILE') {
        // Paiement mobile money (code existant)
        const result = await submitPayment(
          e,
          {
            phoneNumber,
            baseAmount,
            network,
            country,
            paymentConfig,
            transactionReference,
            fullName,
            email,
            generateRandomId,
            isCallbackCalledRef,
            setStateCallbacks: {
              setTransactionReference,
              setPaymentStatus,
              setStatusMessage,
              setStatusModalOpen,
              setIsLoading,
            },
          },
          validateForm,
          getFormattedPhoneNumber
        );
        if (result && result.reference) {
          handleStatusCheck(result.reference);
        }
      } else if (paymentMethod === 'WALLET') {
        // Cas spécifique pour Wallet Coris (Bénin)
        if (country === 'BENIN' && network === 'CORIS') {
          try {
            // Extraire le prénom et le nom
            const nameParts = fullName.split(' ');
            const firstName = nameParts[0] || '';
            
            // Formater le numéro de téléphone
            const formattedPhone = phoneNumber.startsWith('+229') ? phoneNumber : `+229${phoneNumber}`;
            
            // Appel API pour le paiement Wallet Coris
            const response = await requestWalletCorisPayment({
              phoneNumber: formattedPhone,
              amount: baseAmount,
              shop: paymentConfig.shop,
              email: email,
              first_name: firstName,
              description: 'Paiement via FeexPay',
              apiToken: paymentConfig.apiToken,
              currency: paymentConfig.currency || 'XOF',
              callback_info: paymentConfig.callback_info || {},
            });
            
            // Si le statut est 201, afficher le modal OTP
            if (response.statusCode === '201' ) {
              setPendingReference(response.reference);
              setOtpModalOpen(true);
              setIsLoading(false);
            } else {
              setPaymentStatus('FAILED');
              setStatusMessage('La demande de paiement a échoué. Veuillez réessayer.');
              setStatusModalOpen(true);
              setIsLoading(false);
            }
          } catch (error) {
            console.error('Error in Coris Wallet payment:', error);
            setPaymentStatus('FAILED');
            setStatusMessage('Une erreur est survenue lors du traitement du paiement. Veuillez réessayer.');
            setStatusModalOpen(true);
            setIsLoading(false);
          }
        } else {
          // Pour les autres pays/réseaux, utiliser le même traitement que Mobile Money
          const handlerProps = {
            phoneNumber,
            baseAmount,
            network,
            country,
            paymentConfig,
            transactionReference,
            generateRandomId,
            fullName,
            email,
            isCallbackCalledRef,
            setStateCallbacks: {
              setTransactionReference,
              setPaymentStatus,
              setStatusMessage,
              setStatusModalOpen,
              setIsLoading,
            },
          };
          
          // Appeler submitPayment et gérer la réponse pour appeler handleStatusCheck
          const response = await submitPayment(e, handlerProps, validateForm, getFormattedPhoneNumber);
          if (response && response.reference) {
            handleStatusCheck(response.reference);
          }
        }
      }
    } catch (error) {
      console.error('Error in payment submission:', error);
      setPaymentStatus('FAILED');
      setStatusMessage('Une erreur est survenue lors du traitement du paiement. Veuillez réessayer.');
      setStatusModalOpen(true);
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    const fieldsToHide = paymentConfig.fields_to_hide || [];
    
    if (paymentMethod === 'MOBILE' || paymentMethod === 'WALLET') {
      // Validation pour Mobile Money et Wallet (même validation)
      // Valider le nom si non caché
      if (!fieldsToHide.includes('name') && !fullName.trim()) {
        setStatusMessage('Veuillez entrer votre nom complet');
        setStatusModalOpen(true);
        return false;
      }
      
      // Valider l'email si non caché
      if (!fieldsToHide.includes('email') && (!email.trim() || !email.includes('@'))) {
        setStatusMessage('Veuillez entrer une adresse email valide');
        setStatusModalOpen(true);
        return false;
      }
      
      // Valider le numéro de téléphone
      if (!phoneNumber.trim() || phoneNumber.length < 8) {
        setStatusMessage('Veuillez entrer un numéro de téléphone valide');
        setStatusModalOpen(true);
        return false;
      }
      
      // Pour le mode Wallet, vérifier que le pays est soit Bénin soit Côte d'Ivoire
      if (paymentMethod === 'WALLET' && country !== 'BENIN' && country !== 'COTE_D_IVOIRE') {
        setStatusMessage('Seuls le Bénin (Coris) et la Côte d\'Ivoire (Wave) sont supportés pour les paiements Wallet');
        setStatusModalOpen(true);
        return false;
      }
    } else if (paymentMethod === 'CARD') {
      // Validation pour Carte Bancaire
      if (!fullName || fullName.trim().split(' ').length < 2) {
        setStatusMessage('Veuillez entrer votre nom et prénom complets');
        setPaymentStatus('FAILED');
        setStatusModalOpen(true);
        return false;
      }
      
      if (!email || !email.includes('@')) {
        setStatusMessage('Veuillez entrer une adresse email valide');
        setPaymentStatus('FAILED');
        setStatusModalOpen(true);
        return false;
      }
      
      if (!phoneNumber) {
        setStatusMessage('Veuillez entrer un numéro de téléphone valide');
        setPaymentStatus('FAILED');
        setStatusModalOpen(true);
        return false;
      }
    }
    
    return true;
  };

// ...
  const generateRandomId = () => {
    return `TRX-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
  };

  // Fonction pour gérer la soumission du code OTP
  const handleOTPSubmit = async (otp: string) => {
    setIsLoading(true);
    
    try {
      // Extraire le prénom et le nom
      const nameParts = fullName.split(' ');
      const firstName = nameParts[0] || '';
      
      // Formater le numéro de téléphone
      const formattedPhone = phoneNumber.startsWith('+229') ? phoneNumber : `+229${phoneNumber}`;
      
      // Appel API pour le paiement Wallet Coris avec OTP
      const response = await requestWalletCorisPayment({
        phoneNumber: formattedPhone,
        amount: baseAmount,
        shop: paymentConfig.shop,
        email: email,
        first_name: firstName,
        description: 'Paiement via FeexPay',
        reference: pendingReference,
        otp: otp,
        apiToken: paymentConfig.apiToken,
        currency: paymentConfig.currency || 'XOF', 
        callback_info: paymentConfig.callback_info || {},
      });
      
      // Fermer le modal OTP
      setOtpModalOpen(false);
      
      // console.log('OTP submission response:', response);
      
      // Exploiter la réponse de l'API
      if (response.reference) {
        // Vérifier le statut de la transaction dans la réponse
        if (response.status === 'SUCCESSFUL' || response.status === 'SUCCESS') {
          // Transaction réussie
          setPaymentStatus('SUCCESSFUL');
          setStatusMessage('Paiement effectué avec succès!');
          setStatusModalOpen(true);
          setIsLoading(false);
          
          // Redirection si une URL de succès est configurée
          if (paymentConfig.callback_url) {
            setTimeout(() => {
              window.location.href = `${paymentConfig.callback_url}?ref=${response.reference}`;
            }, 2000);
          }
        } else if (response.status === 'PENDING') {
          // Transaction en attente, continuer avec la vérification du statut
          setTransactionReference(response.reference);
          handleStatusCheck(response.reference);
        } else {
          // Transaction échouée avec un statut connu
          setPaymentStatus('FAILED');
          setStatusMessage(response.message || 'La transaction a échoué. Veuillez réessayer.');
          setStatusModalOpen(true);
          setIsLoading(false);
          
          // Redirection si une URL d'erreur est configurée
          if (paymentConfig.error_callback_url) {
            setTimeout(() => {
              window.location.href = `${paymentConfig.error_callback_url}?ref=${response.reference}`;
            }, 2000);
          }
        }
      } else {
        // Aucune référence dans la réponse
        setPaymentStatus('FAILED');
        setStatusMessage(response.message || 'La confirmation du paiement a échoué. Veuillez réessayer.');
        setStatusModalOpen(true);
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error in OTP submission:', error);
      setPaymentStatus('FAILED');
      setStatusMessage('Une erreur est survenue lors de la confirmation du paiement. Veuillez réessayer.');
      setStatusModalOpen(true);
      setIsLoading(false);
      setOtpModalOpen(false);
    }
  };

  
  
  const handleStatusCheck = (ref: string) => {
    checkStatus(ref, {
      phoneNumber,
      baseAmount,
      network,
      country,
      paymentConfig,
      transactionReference: ref,
      generateRandomId,
      fullName,
      email,
      isCallbackCalledRef,
      setStateCallbacks: {
        setTransactionReference,
        setPaymentStatus,
        setStatusMessage,
        setStatusModalOpen,
        setIsLoading,
      },
    }, network, getFormattedPhoneNumber);
  };


  if (!isOpen) return null;

  // Fonctions de navigation entre étapes supprimées car tout est sur une seule page

  return (
    
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-hidden">
      
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative max-h-[90vh] flex flex-col">

      {iframeUrl && (
        <div className="absolute inset-0 bg-white z-10 rounded-lg overflow-hidden">
           <button
            onClick={() => setIframeUrl(null)}
            className="absolute top-2 right-2 z-20 bg-gray-200 text-gray-800 rounded-full p-1 hover:bg-gray-300 focus:outline-none"
            aria-label="Fermer la passerelle de paiement"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
          <iframe
            src={iframeUrl}
            className="w-full h-full border-0"
            title="Payment Gateway"
            allow="payment"
          ></iframe>
        </div>
      )}

<HeaderBar shop={paymentConfig.shop} onClose={onClose} />


    <div className="p-6 overflow-y-auto flex-grow">
          <p className="text-sm text-gray-600 text-center mb-4">
            Remplissez les champs suivants pour effectuer votre paiement
          </p>

          {/* Afficher les onglets de sélection de méthode de paiement uniquement si case n'est pas défini */}
          {!paymentConfig.case  && (
       <div className="flex justify-center mb-6 border-b pb-4 w-fit gap-2">
    {[
      { label: 'Mobile Money', value: 'MOBILE', icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D45D00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12" y2="18" />
        </svg>
      )},
      { label: 'Carte Bancaire', value: 'CARD', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
          <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
        </svg>
      )},
      { label: 'Wallet', value: 'WALLET', icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      )}
    ].map(({ label, value, icon }) => {
      const isSelected = paymentMethod === value;
      return (
        <div
        key={value}
        className={`flex flex-col items-center px-4 py-2 cursor-pointer rounded border ${
          isSelected
            ? 'bg-[#fff7ed] border-[#D45D00]'
            : 'bg-white border-[#D45D00]'
        }`}
        onClick={() => handlePaymentMethodChange(value as PaymentMethod)}
      >
        <div className="w-8 h-8 rounded-full flex items-center justify-center mb-1">
          {icon}
        </div>
        <span className="text-xs font-medium">{label}</span>
      </div>
      
      );
    })}
  </div>
)}

          <div className="space-y-6">
            {/* Section Informations Personnelles - affichée seulement si fields_to_hide ne contient pas à la fois 'email' et 'name' ET si le mode de paiement n'est pas par carte */}
            {!((paymentConfig.fields_to_hide || []).includes('email') && (paymentConfig.fields_to_hide || []).includes('name')) && paymentMethod !== 'CARD' ? (
              <div className="space-y-4">
                <h2 className="font-bold text-gray-800 mb-2 flex items-center">
                  <span className="bg-gray-800 text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs mr-2">1</span>
                  Informations Personnelles
                </h2>
                
                {!(paymentConfig.fields_to_hide || []).includes('name') && (
                  <div>
                    <input
                      type="text"
                      placeholder="Nom et Prénoms"
                      className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                )}
                
                {!(paymentConfig.fields_to_hide || []).includes('email') && (
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                )}
              </div>
            ) : null}
            
            {/* Section Méthodes de paiement - toujours affichée */}
            <div className="space-y-4">
              <h2 className="font-bold text-gray-800 mb-2 flex items-center">
                <span className="bg-gray-800 text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs mr-2">
                  {paymentMethod === 'CARD' || ((paymentConfig.fields_to_hide || []).includes('email') && (paymentConfig.fields_to_hide || []).includes('name')) ? '1' : '2'}
                </span>
               {paymentMethod === 'CARD' ? 'Paiement par Carte Bancaire' : 'Méthodes de paiement'}
              </h2>
           
              
              {/* Formulaire pour Mobile Money */}
              {/* Formulaire pour Mobile Money */}
              {paymentMethod === 'MOBILE' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <CountrySelector 
                        selectedCountry={country} 
                        onChange={handleCountryChange} 
                      />
                    </div>
                    
                    <div>
                      <NetworkSelector 
                        selectedNetwork={network} 
                        onChange={handleNetworkChange}
                        country={country}
                      />
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md flex items-center justify-center">
                      <span className="text-gray-600 text-xs">{getPrefixFromCountry(country)}</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="Numéro de téléphone sans indicatif"
                      className="flex-1 px-2 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                    />
                  </div>
                </>
              )}

                {/* Formulaire pour Carte Bancaire */}
                {(paymentMethod === 'CARD' ) && (
                <div className="space-y-4">
                  <p className="text-red-500 text-md">Les paiements par cartes sont momentanément indisponibles.</p>

                  {/* Formulaire pour Carte Bancaire */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                      <input
                        type="text"
                        placeholder="Prénom"
                        className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs"
                        value={fullName.split(' ')[0] || ''}
                        onChange={(e) => {
                          const lastName = fullName.split(' ').slice(1).join(' ');
                          setFullName(`${e.target.value} ${lastName}`.trim());
                        }}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                      <input
                        type="text"
                        placeholder="Nom"
                        className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs"
                        value={fullName.split(' ').slice(1).join(' ') || ''}
                        onChange={(e) => {
                          const firstName = fullName.split(' ')[0] || '';
                          setFullName(`${firstName} ${e.target.value}`.trim());
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="exemple@email.com"
                      className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                    <input
                      type="tel"
                      placeholder="Numéro de téléphone avec indicatif"
                      className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Type de carte</label>
                    <select
                      className="w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs"
                      value={typeCard}
                      onChange={(e) => setTypeCard(e.target.value as 'VISA' | 'MASTERCARD')}
                    >
                      <option value="VISA">VISA</option>
                      <option value="MASTERCARD">MASTERCARD</option>
                    </select>
                  </div>

                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Numéro de carte</label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-sm"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date d'expiration</label>
                      <input
                        type="text"
                        placeholder="MM/AA"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-sm"
                      />
                    </div>
                  </div> */}
                </div>
              )}
              

              {/* Formulaire pour Wallet */}
          {/* Formulaire pour Wallet - Utilise la même interface que Mobile Money */}
          {paymentMethod === 'WALLET' && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Pays</label>
                      <select
                        value={country}
                        onChange={(e) => handleCountryChange(e.target.value as Country)}
                        className="block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs"
                      >
                        <option value="BENIN">Bénin</option>
                        <option value="COTE_D_IVOIRE">Côte d'Ivoire</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Réseau</label>
                      <select
                        value={network}
                        onChange={(e) => handleNetworkChange(e.target.value as Network)}
                        className="block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs"
                        disabled
                      >
                        {country === 'BENIN' && (
                          <option value="CORIS">Coris</option>
                        )}
                        {country === 'COTE_D_IVOIRE' && (
                          <option value="WAVE">Wave</option>
                        )}
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md flex items-center justify-center">
                      <span className="text-gray-600 text-sm">
                        {country === 'BENIN' ? '+229' : country === 'COTE_D_IVOIRE' ? '+225' : ''}
                      </span>
                    </div>
                    <input
                      type="tel"
                      placeholder="Numéro de téléphone sans indicatif"
                      className="flex-1 px-2 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs"
                      value={phoneNumber}
                      onChange={handlePhoneNumberChange}
                    />
                  </div>
                </>
              )}
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Montant :</span>
                  <span className="text-sm font-medium">{paymentConfig.amount?.toLocaleString('fr-FR')} {paymentConfig.currency}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Frais* :</span>
                  <span className="text-sm font-medium">
                    {fees > 0 ? `${fees.toLocaleString('fr-FR')} ${paymentConfig.currency}` : `0 ${paymentConfig.currency}`}
                  </span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Montant Total à payer :</span>
                  <span>{total.toLocaleString('fr-FR')} {paymentConfig.currency}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {fees > 0 ? `*Les frais de transaction sont de ${feePercentage.toFixed(1).replace('.', ',')}% du montant.` : "*Aucun frais de transaction applicable pour cette transaction."}
                </p>
              </div>
              
              <div className="pt-2">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onClose()}
                    className="w-1/3 bg-gray-200 hover:bg-gray-300 text-primary-blue font-bold py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
                  >
                    Retour
                  </button>
                  <button
                    onClick={handlePaymentSubmit}
                    disabled={isLoading}
                    className={`w-2/3 bg-primary-orange hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? (
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : null}
                    Payer {total.toLocaleString('fr-FR')} {paymentConfig.currency}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center text-xs text-gray-500 flex-shrink-0 bg-gray-50 w-full p-2">
        <p className="mt-2">Paiements sécurisés par FeexPay</p>
        <p className="mt-2">En payant par ce plugin, vous acceptez les <a className="text-blue-900" style={{textDecoration: 'underline'}} target="_blank" href="https://feexpay.me/fr/terms-and-conditions">conditions générales d'utilisation de FeexPay</a></p>
          </div>
        </div>
      </div>



      <StatusModal 
        isOpen={statusModalOpen}
        onClose={() => setStatusModalOpen(false)}
        status={paymentStatus}
        message={statusMessage}
      />
      
      {/* Modal pour la saisie du code OTP pour Wallet Coris */}
      <OTPModal
        isOpen={otpModalOpen}
        onClose={() => {
          setOtpModalOpen(false);
          setIsLoading(false);
        }}
        onSubmit={handleOTPSubmit}
        reference={pendingReference}
      />
    </div>
  );
};

export default PaymentModal;