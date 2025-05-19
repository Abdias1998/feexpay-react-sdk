import { Network, Country } from '../types';
import { BENIN_PREFIXES } from '../constants';

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
    default:
      return ['MTN', 'MOOV'];
  }
};

export const calculateFees = (amount: number, country: Country, network: Network): number => {
  let feePercentage = 0;
  
  if (country === 'BENIN') {
    // MTN BENIN, MOOV BENIN, CELTIIS BENIN, CORIS MONEY: 1.7%
    feePercentage = 0.017;
  } else if (country === 'COTE_D_IVOIRE') {
    if (network === 'WAVE') {
      // WAVE: 3.2%
      feePercentage = 0.032;
    } else {
      // MOOV MONEY, MTN MONEY, ORANGE: 2.9%
      feePercentage = 0.029;
    }
  }
  
  return Math.round(amount * feePercentage);
};

export const generateRandomId = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};