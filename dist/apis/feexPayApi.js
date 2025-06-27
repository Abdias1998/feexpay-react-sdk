"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShop = exports.requestWalletCorisPayment = exports.requestCardPayment = exports.getTransactionDetails = exports.checkTransactionStatus = exports.requestToPay = void 0;
const paymentUtils_1 = require("../utils/paymentUtils");
const getClientIP = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch('https://api.ipify.org?format=json');
        const data = yield res.json();
        return data.ip;
    }
    catch (_a) {
        return 'unknown';
    }
});
const requestToPay = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const networkApiCode = (0, paymentUtils_1.getNetworkApiCode)(params.country, params.network);
    const apiUrl = `https://api.feexpay.me/api/transactions/requesttopay/integration`;
    let cleanedPhone = params.phoneNumber.replace(/\+/g, '');
    if (cleanedPhone.length >= 8) {
        const prefix = cleanedPhone.slice(0, 3);
        if (cleanedPhone.startsWith(prefix + prefix)) {
            cleanedPhone = cleanedPhone.slice(prefix.length);
        }
    }
    try {
        const merchantDomain = window.location.origin;
        const merchantIp = yield getClientIP();
        const apiParams = {
            phoneNumber: cleanedPhone,
            amount: params.amount,
            reseau: networkApiCode,
            description: params.description,
            customId: params.customId,
            shop: params.shop,
            token: params.apiToken,
            merchant_domain: merchantDomain,
            merchant_ip: merchantIp,
            payment_interface: "REACT",
            callback_info: params.callback_info || {},
            currency: params.currency || "XOF"
        };
        const response = yield fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${params.apiToken}`,
            },
            body: JSON.stringify(apiParams),
        });
        if (!response.ok) {
            throw new Error('Payment request failed');
        }
        return yield response.json();
    }
    catch (error) {
        console.error('Payment request error:', error);
        throw error;
    }
});
exports.requestToPay = requestToPay;
const checkTransactionStatus = (reference) => __awaiter(void 0, void 0, void 0, function* () {
    const apiUrl = `https://api.feexpay.me/api/transactions/getrequesttopay/integration/${reference}`;
    try {
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Status check failed');
        }
        return yield response.json();
    }
    catch (error) {
        console.error('Status check error:', error);
        throw error;
    }
});
exports.checkTransactionStatus = checkTransactionStatus;
const getTransactionDetails = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const apiUrl = 'https://api.feexpay.me/api/transactions/details';
    try {
        const networkApiCode = (0, paymentUtils_1.getNetworkApiCode)(params.country, params.network);
        const requestParams = {
            network: networkApiCode,
            amount: params.amount,
            shop: params.shop
        };
        const response = yield fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${params.apiToken}`,
            },
            body: JSON.stringify(requestParams),
        });
        if (!response.ok) {
            throw new Error('Failed to get transaction details');
        }
        return yield response.json();
    }
    catch (error) {
        console.error('Transaction details error:', error);
        throw error;
    }
});
exports.getTransactionDetails = getTransactionDetails;
const requestCardPayment = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const apiUrl = 'https://api.feexpay.me/api/transactions/public/initcard';
    try {
        const requestParams = {
            phone: params.phone,
            amount: params.amount,
            shop: params.shop,
            first_name: params.first_name,
            last_name: params.last_name,
            email: params.email,
            type_card: params.type_card,
            currency: 'XOF'
        };
        const response = yield fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${params.apiToken}`,
            },
            body: JSON.stringify(requestParams),
        });
        if (!response.ok) {
            throw new Error('Card payment request failed');
        }
        return yield response.json();
    }
    catch (error) {
        console.error('Card payment request error:', error);
        throw error;
    }
});
exports.requestCardPayment = requestCardPayment;
const requestWalletCorisPayment = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const apiUrl = 'https://api.feexpay.me/api/transactions/requesttopay/integration';
    try {
        const countryCode = '229';
        const phoneNumberRight = params.phoneNumber.startsWith('+229')
            ? params.phoneNumber.substring(4)
            : params.phoneNumber.startsWith('229')
                ? params.phoneNumber.substring(3)
                : params.phoneNumber;
        const requestParams = {
            phoneNumber: `229${phoneNumberRight}`,
            country: countryCode,
            phoneNumberRight: phoneNumberRight,
            amount: params.amount.toString(),
            currency: 'XOF',
            description: params.description || 'Paiement via FeexPay',
            email: params.email,
            first_name: params.first_name,
            otp: params.otp || '',
            reference: params.reference || '',
            reseau: 'CORIS',
            shop: params.shop,
            token: params.apiToken,
            callback_info: params.callback_info || {},
        };
        const response = yield fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestParams),
        });
        const responseData = yield response.json();
        return Object.assign(Object.assign({}, responseData), { statusCode: response.status.toString() });
    }
    catch (error) {
        console.error('Wallet Coris payment request error:', error);
        throw error;
    }
});
exports.requestWalletCorisPayment = requestWalletCorisPayment;
const getShop = (apiToken) => __awaiter(void 0, void 0, void 0, function* () {
    const apiUrl = `https://api.feexpay.me/api/shop/${apiToken}/get_shop`;
    try {
        const response = yield fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Shop retrieval failed');
        }
        return yield response.json();
    }
    catch (error) {
        console.error('Shop retrieval error:', error);
        throw error;
    }
});
exports.getShop = getShop;
