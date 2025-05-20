// Préfixes téléphoniques par pays et opérateur
export const BENIN_PREFIXES = {
  MTN: ['0142', '0146', '0150', '0151', '0152', '0153', '0154', '0156', '0157', '0159', '0161', '0162', '0166', '0167', '0169', '0190', '0191', '0192', '0193', '0196', '0197'],
  MOOV: ['0145', '0155', '0158', '0160', '0163', '0164', '0165', '0168', '0194', '0195', '0198', '0199'],
  CELTIIS: ['0140', '0141', '0143', '0144', '0147']
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
    CELTIIS: 'CELTIIS_BJ',
    CORIS: 'CORIS'
  },
  COTE_D_IVOIRE: {
    MTN: 'MTN_CI',
    MOOV: 'MOOV_CI',
    ORANGE: 'ORANGE_CI',
    WAVE: 'WAVE_CI'
  },
  BURKINA_FASO: {
    MOOV: 'MOOV_BF',
    ORANGE: 'ORANGE_BF'
  },
  CONGO_BRAZZAVILLE: {
    MTN: 'MTN_CG'
  },
  SENEGAL: {
    ORANGE: 'ORANGE_SN',
    FREE: 'FREE_SN'
  },
  TOGO: {
    TOGOCOM: 'TOGOCOM_TG',
    MOOV: 'MOOV_TG'
  }
};