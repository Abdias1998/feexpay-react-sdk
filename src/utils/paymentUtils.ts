import { Network, Country } from '../types';
import { BENIN_PREFIXES, NETWORK_FEES, NETWORK_API_MAPPING } from '../constants';

export const getNetworkByPhonePrefix = (prefix: string): Network | null => {
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
      return ['MTN', 'MOOV', 'CELTIIS', 'CORIS'];
    case 'COTE_D_IVOIRE':
      return ['MTN', 'MOOV', 'ORANGE', 'WAVE'];
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

export const calculateFees = (amount: number, country: Country, network: Network): number => {
  // Récupérer le pourcentage de frais à partir des constantes
  const countryFees = NETWORK_FEES[country];
  let feePercentage = 0;
  
  if (countryFees && countryFees[network]) {
    feePercentage = countryFees[network];
  }
  
  return Math.round(amount * feePercentage);
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