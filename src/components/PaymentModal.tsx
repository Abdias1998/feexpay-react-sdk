import React, { useState, useEffect } from 'react';
import CountrySelector from './CountrySelector';
import NetworkSelector from './NetworkSelector';
import StatusModal from './StatusModal';
import { useFeexPay } from '../context/FeexPayContext';
import { getNetworkByPhonePrefix } from '../utils/paymentUtils';
import { Network, PaymentMethod, Country, PaymentStatus } from '../types/index';
import { requestToPay, checkTransactionStatus } from '../apis/feexPayApi';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  const { paymentConfig } = useFeexPay();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('MOBILE');
  const [country, setCountry] = useState<Country>('BENIN');
  const [network, setNetwork] = useState<Network>('MTN');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [total, setTotal] = useState(0);
  const [fees, setFees] = useState(0);
  const [transactionReference, setTransactionReference] = useState('');
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>('PENDING');
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(() => {
    // Skip to step 2 if both email and name fields are hidden
    const fieldsToHide = paymentConfig.fields_to_hide || [];
    if (fieldsToHide.includes('email') && fieldsToHide.includes('name')) {
      return 2;
    }
    return 1;
  });

  useEffect(() => {
    if (paymentConfig.amount) {
      calculateFees(paymentConfig.amount, country, network);
    }
  }, [paymentConfig, country, network]);

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // let value = e.target.value.replace(/\D/g, '');
    const value = e.target.value;
    
    if (country === 'BENIN') {
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
    if (country === 'BENIN' && phoneNumber) {
      return `229${phoneNumber}`;
    }
    return phoneNumber;
  };

  const calculateFees = (amount: number, country: Country, network: Network) => {
    let feePercentage = 0;
    
    if (country === 'BENIN') {
      feePercentage = 0.017;
    } else if (country === 'COTE_D_IVOIRE') {
      if (network === 'WAVE') {
        feePercentage = 0.032;
      } else {
        feePercentage = 0.029;
      }
    }
    
    const calculatedFees = Math.round(amount * feePercentage);
    setFees(calculatedFees);
    setTotal(amount + calculatedFees);
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!validateForm()) {
      return;
    }
  
    setIsLoading(true);
  
    try {
      const formattedPhoneNumber = getFormattedPhoneNumber();
      const response = await requestToPay({
        phoneNumber: formattedPhoneNumber,
        amount: total,
        network,
        description: paymentConfig.description,
        customId: paymentConfig.customId || generateRandomId(),
        shop: paymentConfig.shop,
        apiToken: paymentConfig.apiToken
      });
      
      setTransactionReference(response.reference);
      startStatusCheck(response.reference);
    } catch (error) {
      console.error('Payment initiation failed:', error);
      setPaymentStatus('FAILED');
      setStatusMessage('Payment initiation failed. Please try again.');
      setStatusModalOpen(true);
      setIsLoading(false); 
    }
  };

  const validateForm = () => {
    const fieldsToHide = paymentConfig.fields_to_hide || [];
    
    // Only validate fullName if it's not hidden
    if (!fieldsToHide.includes('name') && !fullName.trim()) {
      setStatusMessage('Please enter your full name');
      setStatusModalOpen(true);
      return false;
    }
    
    // Only validate email if it's not hidden
    if (!fieldsToHide.includes('email') && (!email.trim() || !email.includes('@'))) {
      setStatusMessage('Please enter a valid email address');
      setStatusModalOpen(true);
      return false;
    }
    
    if (!phoneNumber.trim() || phoneNumber.length < 8) {
      setStatusMessage('Please enter a valid phone number');
      setStatusModalOpen(true);
      return false;
    }
    
    return true;
  };

  const generateRandomId = () => {
    return `TRX-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
  };

  const startStatusCheck = (ref: string) => {
    let checkCount = 0;
    const maxChecks = 30;
    
    const intervalId = setInterval(async () => {
      checkCount++;
      
      try {
        const status = await checkTransactionStatus(ref);
        
        if (status.status === 'SUCCESSFUL') {
          clearInterval(intervalId);
          setPaymentStatus('SUCCESSFUL');
          setStatusMessage('Payment successful! Thank you for your purchase.');
          setStatusModalOpen(true);
          setIsLoading(false);
          
          // Call the callback function if provided
          if (paymentConfig.callback) {
            paymentConfig.callback({
              reference: transactionReference,
              status: 'SUCCESSFUL'
            });
          }
          
          // Redirect to callback URL if provided
          if (paymentConfig.callbackUrl) {
            window.location.href = paymentConfig.callbackUrl;
          }
        } else if (status.status === 'FAILED') {
          clearInterval(intervalId);
          setPaymentStatus('FAILED');
          setStatusMessage('Payment failed. Please try again or use a different payment method.');
          setStatusModalOpen(true);
          setIsLoading(false);
          
          // Call the callback function if provided
          if (paymentConfig.callback) {
            paymentConfig.callback({
              reference: transactionReference,
              status: 'FAILED'
            });
          }
        } else if (status.status === 'INSUFFICIENT_FUNDS') {
          clearInterval(intervalId);
          setPaymentStatus('FAILED');
          setStatusMessage('Insufficient funds. Please try again with a different payment method.');
          setStatusModalOpen(true);
          setIsLoading(false);
          
          // Call the callback function if provided
          if (paymentConfig.callback) {
            paymentConfig.callback({
              reference: transactionReference,
              status: 'INSUFFICIENT_FUNDS'
            });
          }
        } else if (checkCount >= maxChecks) {
          clearInterval(intervalId);
          setPaymentStatus('TIMEOUT');
          setStatusMessage('Payment verification timed out. Please check your payment status later.');
          setStatusModalOpen(true);
          setIsLoading(false);
          
          // Call the callback function if provided
          if (paymentConfig.callback) {
            paymentConfig.callback({
              reference: transactionReference,
              status: 'TIMEOUT'
            });
          }
        }
      } catch (error) {
        console.error('Status check failed:', error);
        if (checkCount >= maxChecks) {
          clearInterval(intervalId);
          setPaymentStatus('FAILED');
          setStatusMessage('Payment verification failed. Please contact support.');
          setStatusModalOpen(true);
          setIsLoading(false); 
        }
      }
    }, 5000);
  };

  if (!isOpen) return null;

  const handleNextStep = () => {
    const fieldsToHide = paymentConfig.fields_to_hide || [];
    
    // Only validate fields that aren't hidden
    if (step === 1) {
      const nameRequired = !fieldsToHide.includes('name') && !fullName.trim();
      const emailRequired = !fieldsToHide.includes('email') && !email.trim();
      
      if (nameRequired || emailRequired) {
        setStatusMessage('Please fill in all required personal information fields');
        setStatusModalOpen(true);
        return;
      }
    }
    setStep(2);
  };

  const handleBackStep = () => {
    setStep(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative">
        <div className="flex justify-between items-center border-b p-4">
          <div className="flex items-center">
            <div className="h-5 w-5 bg-orange-500 rounded mr-2"></div>
            <span className="text-lg font-bold text-blue-900">FeexPay</span>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <p className="text-sm text-gray-600 text-center mb-4">
            Remplissez les champs suivants pour effectuer votre paiement
          </p>

          <div className="flex justify-center mb-6 border-b pb-4">
            <div 
              className={`flex flex-col items-center px-4 py-2 cursor-pointer ${paymentMethod === 'MOBILE' ? 'border-b-2 border-orange-500' : ''}`}
              onClick={() => setPaymentMethod('MOBILE')}
            >
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3z" />
                  <path fillRule="evenodd" d="M14 6h-4v8h4V6z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs font-medium">Mobile Money</span>
            </div>

            <div 
              className={`flex flex-col items-center px-4 py-2 cursor-pointer ${paymentMethod === 'CARD' ? 'border-b-2 border-orange-500' : ''}`}
              onClick={() => setPaymentMethod('CARD')}
            >
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs font-medium">Carte Bancaire</span>
            </div>

            <div 
              className={`flex flex-col items-center px-4 py-2 cursor-pointer ${paymentMethod === 'WALLET' ? 'border-b-2 border-orange-500' : ''}`}
              onClick={() => setPaymentMethod('WALLET')}
            >
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs font-medium">Wallet</span>
            </div>
          </div>

          {step === 1 ? (
            <div className="space-y-4">
              <h2 className="font-bold text-gray-800 mb-2 flex items-center">
                <span className="bg-gray-800 text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs mr-2">1</span>
                Informations Personnelles
              </h2>
              
              <div>
                <input
                  type="text"
                  placeholder="Nom et Prénoms"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="pt-4">
                <button
                  onClick={handleNextStep}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                >
                  Continuer
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <h2 className="font-bold text-gray-800 mb-2 flex items-center">
                <span className="bg-gray-800 text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs mr-2">2</span>
                Méthodes de paiement
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <CountrySelector 
                    selectedCountry={country} 
                    onChange={setCountry} 
                  />
                </div>
                
                <div>
                  <NetworkSelector 
                    selectedNetwork={network} 
                    onChange={setNetwork}
                    country={country}
                  />
                </div>
              </div>
              
              <div className="flex">
                <div className="bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md flex items-center justify-center">
                  <span className="text-gray-600 text-sm">+229</span>
                </div>
                <input
                  type="tel"
                  placeholder="Numéro de téléphone"
                  className="flex-1 px-4 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </div>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Montant :</span>
                  <span className="text-sm font-medium">{paymentConfig.amount?.toLocaleString('fr-FR')} FCFA</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">Frais* :</span>
                  <span className="text-sm font-medium">{fees.toLocaleString('fr-FR')} FCFA</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Montant Total à payer :</span>
                  <span>{total.toLocaleString('fr-FR')} FCFA</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  *Les frais de transaction sont de {country === 'BENIN' ? '1,7%' : network === 'WAVE' ? '3,2%' : '2,9%'} du montant.
                </p>
              </div>
              
              <div className="flex space-x-3 pt-2">
                <button
                  onClick={handleBackStep}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Retour
                </button>
                
                <button
                  onClick={handlePaymentSubmit}
                  disabled={isLoading}
                  className={`flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? (
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : null}
                  Payer {total.toLocaleString('fr-FR')} FCFA
                </button>
              </div>
            </div>
          )}
          
          <div className="mt-6 text-center text-xs text-gray-500">
            En payant vous me dirigez vers les <span className="underline">conditions générales d'utilisation de FeexPay</span>
          </div>
        </div>
      </div>

      <StatusModal 
        isOpen={statusModalOpen}
        onClose={() => setStatusModalOpen(false)}
        status={paymentStatus}
        message={statusMessage}
      />
    </div>
  );
};

export default PaymentModal;