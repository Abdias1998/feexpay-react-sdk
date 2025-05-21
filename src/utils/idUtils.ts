/**
 * Génère un identifiant aléatoire pour les transactions
 * @returns Chaîne de caractères aléatoire
 */
export const generateRandomId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};
