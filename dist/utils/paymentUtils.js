"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomId = exports.getNetworkApiCode = exports.calculateFees = exports.getNetworksForCountry = exports.getNetworkByPhonePrefix = void 0;
const constants_1 = require("../constants");
const getNetworkByPhonePrefix = (prefix, currentNetwork) => {
    if (currentNetwork === 'CORIS') {
        return 'CORIS';
    }
    if (constants_1.BENIN_PREFIXES.MTN.includes(prefix)) {
        return 'MTN';
    }
    else if (constants_1.BENIN_PREFIXES.MOOV.includes(prefix)) {
        return 'MOOV';
    }
    else if (constants_1.BENIN_PREFIXES.CELTIIS.includes(prefix)) {
        return 'CELTIIS';
    }
    else if (constants_1.BENIN_PREFIXES.CORIS.includes(prefix)) {
        return 'CORIS';
    }
    return null;
};
exports.getNetworkByPhonePrefix = getNetworkByPhonePrefix;
const getNetworksForCountry = (country) => {
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
exports.getNetworksForCountry = getNetworksForCountry;
const calculateFees = (amount, country, network, paymentMethod, cardType) => {
    if (paymentMethod === 'CARD' && (cardType === 'VISA' || cardType === 'MASTERCARD')) {
        const cardFeePercentage = 0.045;
        return Math.ceil(amount * cardFeePercentage);
    }
    const countryFees = constants_1.NETWORK_FEES[country];
    let feePercentage = 0;
    if (countryFees && countryFees[network]) {
        feePercentage = countryFees[network];
    }
    const calculatedFees = amount * feePercentage;
    return Math.ceil(calculatedFees);
};
exports.calculateFees = calculateFees;
const getNetworkApiCode = (country, network) => {
    const mapping = constants_1.NETWORK_API_MAPPING[country];
    if (mapping && mapping[network]) {
        return mapping[network];
    }
    return network.toLowerCase();
};
exports.getNetworkApiCode = getNetworkApiCode;
const generateRandomId = () => {
    return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
};
exports.generateRandomId = generateRandomId;
