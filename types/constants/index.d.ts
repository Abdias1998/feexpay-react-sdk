export declare const BENIN_PREFIXES: {
    CORIS: string[];
    MTN: string[];
    MOOV: string[];
    CELTIIS: string[];
};
import { Country, Network } from '../types';
export declare const NETWORK_FEES: Record<Country, Partial<Record<Network, number>>>;
export declare const NETWORK_API_MAPPING: Record<Country, Partial<Record<Network, string>>>;
