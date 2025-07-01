import { Network, Country } from '../types';
import { BENIN_PREFIXES, NETWORK_FEES, NETWORK_API_MAPPING } from '../constants';

export const getNetworkByPhonePrefix = (
  prefix: string,
  currentNetwork?: Network
): Network | null => {
  // Si l'utilisateur a déjà sélectionné CORIS, on ne change rien
  if (currentNetwork === 'CORIS') {
    return 'CORIS';
  }

  if (BENIN_PREFIXES.MTN.includes(prefix)) {
    return 'MTN';
  } else if (BENIN_PREFIXES.MOOV.includes(prefix)) {
    return 'MOOV';
  } else if (BENIN_PREFIXES.CELTIIS.includes(prefix)) {
    return 'CELTIIS';
  }

  return null;
};


export const getNetworksForCountry = (country: Country): Network[] => {
  switch (country) {
    case 'BENIN':
      return ['MTN', 'MOOV', 'CELTIIS'];
    case 'COTE_D_IVOIRE':
      return ['MTN', 'MOOV', 'ORANGE'];
    case 'BURKINA_FASO':
      return ['MOOV', 'ORANGE'];
    case 'CONGO_BRAZZAVILLE':
      return ['MTN'];
    case 'SENEGAL':
      return ['ORANGE', 'FREE'];
    case 'TOGO':
      return ['TOGOCOM', 'MOOV'];
    default:
      return ['MTN', 'MOOV'];
  }
};



export const calculateFees = (amount: number, country: Country, network: Network, paymentMethod?: 'MOBILE' | 'CARD' | 'WALLET', cardType?: 'VISA' | 'MASTERCARD'): number => {
  // Pour les paiements par carte VISA ou MASTERCARD, appliquer un taux fixe de 4,5%
  if (paymentMethod === 'CARD' && (cardType === 'VISA' || cardType === 'MASTERCARD')) {
    const cardFeePercentage = 0.045; // 4,5%
    return Math.ceil(amount * cardFeePercentage);
  }
  
  // Récupérer le pourcentage de frais à partir des constantes pour les autres méthodes de paiement
  const countryFees = NETWORK_FEES[country];
  let feePercentage = 0;
  
  if (countryFees && countryFees[network]) {
    feePercentage = countryFees[network];
  }
  
  // Calculer les frais basés sur le pourcentage
  const calculatedFees = amount * feePercentage;
  
  // // Pour les petits montants (inférieurs à 30 FCFA)callback, appliquer un minimum de frais
  // if (amount <= 30 && calculatedFees < 1 && feePercentage > 0) {
  //   // Appliquer un minimum de 1 FCFA de frais pour les petits montants
  //   return 1;
  // }
  
  return Math.ceil(calculatedFees);
};

// Fonction pour obtenir le code réseau à envoyer à l'API
export const getNetworkApiCode = (country: Country, network: Network): string => {
  const mapping = NETWORK_API_MAPPING[country];
  if (mapping && mapping[network]) {
    return mapping[network];
  }
  return network.toLowerCase(); // Fallback au nom du réseau en minuscules
};

export const generateRandomId = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};