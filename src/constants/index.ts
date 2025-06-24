// Préfixes téléphoniques par pays et opérateur
export const BENIN_PREFIXES = {
  CORIS: ['0142', '0146', '0150', '0151', '0152', '0153', '0154', '0156', '0157', '0159', '0161', '0162', '0166', '0145', '0155', '0158', '0160', '0163', '0164', '0165', '0168', '0194', '0195', '0198', '0199','0140', '0141', '0143', '0144', '0147'],
  MTN: ['0142', '0146', '0150', '0151', '0152', '0153', '0154', '0156', '0157', '0159', '0161', '0162', '0166', '0167', '0169', '0190', '0191', '0192', '0193', '0196', '0197'],
  MOOV: ['0145', '0155', '0158', '0160', '0163', '0164', '0165', '0168', '0194', '0195', '0198', '0199'],
  CELTIIS: ['0140', '0141', '0143', '0144', '0147'],
 
};

// Pourcentages de frais par pays et réseau
export const NETWORK_FEES = {
  BENIN: {
    MTN: 0.017,
    MOOV: 0.017,
    CELTIIS: 0.017,
    CORIS: 0.017
  },
  COTE_D_IVOIRE: {
    MTN: 0.029,
    MOOV: 0.029,
    ORANGE: 0.029,
    WAVE: 0.032
  },
  BURKINA_FASO: {
    MOOV: 0.032,
    ORANGE: 0.039
  },
  CONGO_BRAZZAVILLE: {
    MTN: 0.030
  },
  SENEGAL: {
    ORANGE: 0.019,
    FREE: 0.019
  },
  TOGO: {
    TOGOCOM: 0.030,
    MOOV: 0.030
  }
};

// Mapping des réseaux pour l'API
export const NETWORK_API_MAPPING = {
  BENIN: {
    MTN: 'MTN',
    MOOV: 'MOOV',
    CELTIIS: 'CELTIIS BJ',
    CORIS: 'CORIS'
  },
  COTE_D_IVOIRE: {
    MTN: 'MTN CI',
    MOOV: 'MOOV CI',
    ORANGE: 'ORANGE CI',
    WAVE: 'WAVE CI'
  },
  BURKINA_FASO: {
    MOOV: 'MOOV BF',
    ORANGE: 'ORANGE BF'
  },
  CONGO_BRAZZAVILLE: {
    MTN: 'MTN CG'
  },
  SENEGAL: {
    ORANGE: 'ORANGE SN',
    FREE: 'FREE SN'
  },
  TOGO: {
    TOGOCOM: 'TOGOCOM TG',
    MOOV: 'MOOV TG'
  }
};