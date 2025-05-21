import { Country } from '../types';

/**
 * Formate un numéro de téléphone en ajoutant le préfixe international selon le pays
 * @param phoneNumber Numéro de téléphone sans préfixe
 * @param country Pays sélectionné
 * @returns Numéro de téléphone formaté avec préfixe international
 */
export const getFormattedPhoneNumber = (phoneNumber: string, country: Country): string => {
  // Supprimer les espaces et autres caractères non numériques
  const cleanedNumber = phoneNumber.replace(/\D/g, '');
  
  // Préfixes par pays
  const prefixes: Record<Country, string> = {
    'BENIN': '229',
    'COTE_D_IVOIRE': '225',
    'BURKINA_FASO': '226',
    'CONGO_BRAZZAVILLE': '242',
    'SENEGAL': '221',
    'TOGO': '228'
  };
  
  // Obtenir le préfixe pour le pays
  const prefix = prefixes[country];
  
  // Si le numéro commence déjà par le préfixe (avec ou sans +), le retourner tel quel
  if (cleanedNumber.startsWith(prefix)) {
    return cleanedNumber;
  }
  if (cleanedNumber.startsWith(`+${prefix}`)) {
    return cleanedNumber.substring(1); // Enlever le +
  }
  
  // Sinon, ajouter le préfixe
  return `${prefix}${cleanedNumber}`;
};
