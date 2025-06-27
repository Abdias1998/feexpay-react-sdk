import { Network, Country } from '../types';
export declare const getNetworkByPhonePrefix: (prefix: string, currentNetwork?: Network) => Network | null;
export declare const getNetworksForCountry: (country: Country) => Network[];
export declare const calculateFees: (amount: number, country: Country, network: Network, paymentMethod?: "MOBILE" | "CARD" | "WALLET", cardType?: "VISA" | "MASTERCARD") => number;
export declare const getNetworkApiCode: (country: Country, network: Network) => string;
export declare const generateRandomId: () => string;
