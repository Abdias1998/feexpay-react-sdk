"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormattedPhoneNumber = void 0;
const getFormattedPhoneNumber = (phoneNumber, country) => {
    const cleanedNumber = phoneNumber.replace(/\D/g, '');
    const prefixes = {
        'BENIN': '229',
        'COTE_D_IVOIRE': '225',
        'BURKINA_FASO': '226',
        'CONGO_BRAZZAVILLE': '242',
        'SENEGAL': '221',
        'TOGO': '228'
    };
    const prefix = prefixes[country];
    if (cleanedNumber.startsWith(prefix)) {
        return cleanedNumber;
    }
    if (cleanedNumber.startsWith(`+${prefix}`)) {
        return cleanedNumber.substring(1);
    }
    return `${prefix}${cleanedNumber}`;
};
exports.getFormattedPhoneNumber = getFormattedPhoneNumber;
