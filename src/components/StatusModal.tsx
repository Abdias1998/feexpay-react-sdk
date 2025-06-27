import  { useEffect } from 'react';
import { PaymentStatus } from '../types/index';

interface StatusModalProps {
  isOpen: boolean;
  onClose: () => void;
  status: PaymentStatus;
  message: string;
}

const StatusModal: React.FC<StatusModalProps> = ({
  isOpen,
  onClose,
  status,
  message,
}) => {
  useEffect(() => {
    if (status === 'SUCCESSFUL' || status === 'SUCCESS') {
      // Auto close after 5 seconds for successful payments
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [status, onClose]);

  if (!isOpen) return null;

  const getStatusIcon = () => {
    switch (status) {
      case 'SUCCESSFUL':
      case 'SUCCESS':
        return (
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        );
      case 'FAILED':
        return (
          <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        );
      case 'PENDING':
        return (
          <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
            <svg className="animate-spin h-10 w-10 text-yellow-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        );
      case 'TIMEOUT':
        return (
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const getButtonText = () => {
    switch (status) {
      case 'SUCCESSFUL':
      case 'SUCCESS':
        return 'Continuer';
      case 'FAILED':
      case 'TIMEOUT':
        return 'Réessayer';
      default:
        return 'Fermer';
    }
  };

  const getButtonColor = () => {
    switch (status) {
      case 'SUCCESSFUL':
      case 'SUCCESS':
        return 'bg-green-500 hover:bg-green-600';
      case 'FAILED':
        return 'bg-red-500 hover:bg-red-600';
      case 'TIMEOUT':
        return 'bg-gray-500 hover:bg-gray-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm p-6 text-center">
        {getStatusIcon()}
        
        <h3 className="text-xl font-bold mb-2">
          {status === 'SUCCESSFUL' ? 'Paiement Réussi' : 
           status === 'FAILED' ? 'Paiement Échoué' :
           status === 'SUCCESS' ? 'Paiement Réussi' :
           status === 'PENDING' ? 'Traitement en cours' : 
           'Vérification expirée'}
        </h3>
        
        <p className="text-gray-600 mb-6">{message}</p>
        
        <button
          onClick={onClose}
          className={`w-full ${getButtonColor()} text-white font-bold py-3 px-4 rounded-md transition-colors duration-300`}
        >
          {getButtonText()}
        </button>
      </div>
    </div>
  );
};

export default StatusModal;