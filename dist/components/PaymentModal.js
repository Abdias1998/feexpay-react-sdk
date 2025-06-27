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
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const CountrySelector_1 = require("./CountrySelector");
const NetworkSelector_1 = require("./NetworkSelector");
const StatusModal_1 = require("./StatusModal");
const OTPModal_1 = require("./OTPModal");
const FeexPayContext_1 = require("../context/FeexPayContext");
const paymentUtils_1 = require("../utils/paymentUtils");
const constants_1 = require("../constants");
const feexPayApi_1 = require("../apis/feexPayApi");
const paymentHandlers_1 = require("../utils/paymentHandlers");
const HeaderBar_1 = require("./HeaderBar");
const PaymentModal = ({ isOpen, onClose }) => {
    var _a;
    const { paymentConfig } = (0, FeexPayContext_1.useFeexPay)();
    const [paymentMethod, setPaymentMethod] = (0, react_1.useState)(() => {
        if (paymentConfig.case && ['MOBILE', 'CARD', 'WALLET'].includes(paymentConfig.case)) {
            return paymentConfig.case;
        }
        return 'MOBILE';
    });
    const [country, setCountry] = (0, react_1.useState)('BENIN');
    const [network, setNetwork] = (0, react_1.useState)('MTN');
    const [phoneNumber, setPhoneNumber] = (0, react_1.useState)('');
    const [fullName, setFullName] = (0, react_1.useState)('');
    const [email, setEmail] = (0, react_1.useState)('');
    const [typeCard, setTypeCard] = (0, react_1.useState)('VISA');
    const [baseAmount, setBaseAmount] = (0, react_1.useState)(0);
    const [total, setTotal] = (0, react_1.useState)(0);
    const [fees, setFees] = (0, react_1.useState)(0);
    const [feePercentage, setFeePercentage] = (0, react_1.useState)(0);
    const [transactionReference, setTransactionReference] = (0, react_1.useState)('');
    const [statusModalOpen, setStatusModalOpen] = (0, react_1.useState)(false);
    const [paymentStatus, setPaymentStatus] = (0, react_1.useState)('PENDING');
    const [statusMessage, setStatusMessage] = (0, react_1.useState)('');
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const [otpModalOpen, setOtpModalOpen] = (0, react_1.useState)(false);
    const [pendingReference, setPendingReference] = (0, react_1.useState)('');
    const [iframeUrl, setIframeUrl] = (0, react_1.useState)(null);
    const calculateFeesLocally = (0, react_1.useCallback)((amount, country, network, paymentMethodOverride) => {
        const currentPaymentMethod = paymentMethodOverride || paymentMethod;
        const calculatedFees = (0, paymentUtils_1.calculateFees)(amount, country, network, currentPaymentMethod, typeCard);
        setFees(calculatedFees);
        setTotal(amount + calculatedFees);
        setBaseAmount(amount);
        if (paymentMethod === 'CARD' && (typeCard === 'VISA' || typeCard === 'MASTERCARD')) {
            setFeePercentage(4.5);
        }
        else {
            const countryFees = constants_1.NETWORK_FEES[country];
            if (countryFees && countryFees[network]) {
                setFeePercentage(countryFees[network] * 100);
            }
            else {
                setFeePercentage(0);
            }
        }
    }, [paymentMethod, typeCard]);
    const fetchTransactionDetails = (0, react_1.useCallback)((amount, country, network, paymentMethodOverride) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const currentPaymentMethod = paymentMethodOverride || paymentMethod;
            const details = yield (0, feexPayApi_1.getTransactionDetails)({
                network,
                country,
                amount,
                shop: paymentConfig.shop,
                apiToken: paymentConfig.apiToken,
                currency: paymentConfig.currency,
                callback_info: paymentConfig.callback_info || {},
            });
            if (details && details.iffees) {
                if (details.total !== undefined) {
                    const calculatedFees = details.total - amount;
                    setFees(calculatedFees);
                    setTotal(details.total);
                    if (currentPaymentMethod === 'CARD') {
                        setFeePercentage(4.5);
                    }
                    else {
                        const countryFees = constants_1.NETWORK_FEES[country];
                        if (countryFees && countryFees[network]) {
                            setFeePercentage(countryFees[network] * 100);
                        }
                        else {
                            setFeePercentage(0);
                        }
                    }
                }
                else {
                    calculateFeesLocally(amount, country, network, currentPaymentMethod);
                }
            }
            else {
                if (amount <= 30) {
                    const countryFees = constants_1.NETWORK_FEES[country];
                    if (countryFees && countryFees[network] && countryFees[network] > 0) {
                        setFees(1);
                        setTotal(amount + 1);
                        setFeePercentage(countryFees[network] * 100);
                    }
                    else {
                        setFees(0);
                        setTotal(amount);
                        setFeePercentage(0);
                    }
                }
                else {
                    setFees(0);
                    setTotal(amount);
                    setFeePercentage(0);
                }
            }
            setBaseAmount(amount);
        }
        catch (error) {
            console.error('Erreur lors de la récupération des détails de transaction:', error);
            calculateFeesLocally(amount, country, network, paymentMethodOverride);
        }
    }), [paymentMethod, paymentConfig.shop, paymentConfig.apiToken, calculateFeesLocally]);
    (0, react_1.useEffect)(() => {
        if (paymentConfig.amount) {
            setBaseAmount(paymentConfig.amount);
            fetchTransactionDetails(paymentConfig.amount, country, network);
        }
    }, [paymentConfig, country, network, fetchTransactionDetails]);
    (0, react_1.useEffect)(() => {
        if (paymentMethod === 'WALLET') {
            if (country === 'BENIN') {
                setNetwork('CORIS');
                if (paymentConfig.amount) {
                    fetchTransactionDetails(paymentConfig.amount, country, 'CORIS', paymentMethod);
                }
            }
            else if (country === 'COTE_D_IVOIRE') {
                setNetwork('WAVE');
                if (paymentConfig.amount) {
                    fetchTransactionDetails(paymentConfig.amount, country, 'WAVE', paymentMethod);
                }
            }
            else {
                setCountry('BENIN');
                setNetwork('CORIS');
                if (paymentConfig.amount) {
                    fetchTransactionDetails(paymentConfig.amount, 'BENIN', 'CORIS', paymentMethod);
                }
            }
        }
    }, []);
    const handleNetworkChange = (newNetwork) => {
        setNetwork(newNetwork);
        if (paymentConfig.amount) {
            fetchTransactionDetails(paymentConfig.amount, country, newNetwork);
        }
    };
    const resetAllFields = () => {
        setFullName('');
        setEmail('');
        setPhoneNumber('');
        setTypeCard('VISA');
    };
    const handlePaymentMethodChange = (method) => {
        resetAllFields();
        setFees(0);
        setTotal(paymentConfig.amount || 0);
        setFeePercentage(0);
        setPaymentMethod(method);
        if (method === 'WALLET') {
            if (country === 'BENIN') {
                setNetwork('CORIS');
                if (paymentConfig.amount) {
                    fetchTransactionDetails(paymentConfig.amount, country, 'CORIS', method);
                }
            }
            else if (country === 'COTE_D_IVOIRE') {
                setNetwork('WAVE');
                if (paymentConfig.amount) {
                    fetchTransactionDetails(paymentConfig.amount, country, 'WAVE', method);
                }
            }
            else {
                setCountry('BENIN');
                setNetwork('CORIS');
                if (paymentConfig.amount) {
                    fetchTransactionDetails(paymentConfig.amount, 'BENIN', 'CORIS', method);
                }
            }
        }
        else if (method === 'MOBILE') {
            const availableNetworks = (0, paymentUtils_1.getNetworksForCountry)(country);
            if (availableNetworks.length > 0) {
                if (!availableNetworks.includes(network)) {
                    setNetwork(availableNetworks[0]);
                }
                if (paymentConfig.amount) {
                    fetchTransactionDetails(paymentConfig.amount, country, network, method);
                }
            }
        }
        else if (method === 'CARD') {
            if (paymentConfig.amount) {
                fetchTransactionDetails(paymentConfig.amount, country, network, method);
            }
        }
    };
    const handleCountryChange = (newCountry) => {
        setCountry(newCountry);
        if (paymentMethod === 'WALLET') {
            if (newCountry === 'BENIN') {
                setNetwork('CORIS');
                if (paymentConfig.amount) {
                    fetchTransactionDetails(paymentConfig.amount, newCountry, 'CORIS');
                }
            }
            else if (newCountry === 'COTE_D_IVOIRE') {
                setNetwork('WAVE');
                if (paymentConfig.amount) {
                    fetchTransactionDetails(paymentConfig.amount, newCountry, 'WAVE');
                }
            }
        }
        else {
            const availableNetworks = (0, paymentUtils_1.getNetworksForCountry)(newCountry);
            setNetwork(availableNetworks[0]);
            if (paymentConfig.amount) {
                fetchTransactionDetails(paymentConfig.amount, newCountry, availableNetworks[0]);
            }
        }
    };
    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        if (country === 'BENIN' && paymentMethod !== 'WALLET') {
            if (value.length >= 4) {
                const prefix = value.substring(0, 4);
                const detectedNetwork = (0, paymentUtils_1.getNetworkByPhonePrefix)(prefix);
                if (detectedNetwork) {
                    setNetwork(detectedNetwork);
                }
            }
        }
        setPhoneNumber(value);
    };
    const getFormattedPhoneNumber = () => {
        if (!phoneNumber)
            return phoneNumber;
        let cleaned = phoneNumber.replace(/[^0-9]/g, '');
        let prefix = '';
        switch (country) {
            case 'BENIN':
                prefix = '229';
                break;
            case 'COTE_D_IVOIRE':
                prefix = '225';
                break;
            case 'BURKINA_FASO':
                prefix = '226';
                break;
            case 'CONGO_BRAZZAVILLE':
                prefix = '242';
                break;
            case 'SENEGAL':
                prefix = '221';
                break;
            case 'TOGO':
                prefix = '228';
                break;
            default:
                return cleaned;
        }
        if (cleaned.startsWith(prefix + prefix)) {
            cleaned = cleaned.slice(prefix.length);
        }
        if (cleaned.startsWith(prefix)) {
            return cleaned;
        }
        return prefix + cleaned;
    };
    const getPrefixFromCountry = (country) => {
        switch (country) {
            case 'BENIN':
                return '+229';
            case 'COTE_D_IVOIRE':
                return '+225';
            case 'BURKINA_FASO':
                return '+226';
            case 'CONGO_BRAZZAVILLE':
                return '+242';
            case 'SENEGAL':
                return '+221';
            case 'TOGO':
                return '+228';
            default:
                return '';
        }
    };
    const handlePaymentSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsLoading(true);
        const iframeNetworks = ['MOOV CI', 'ORANGE CI', 'MOOV BF', 'ORANGE BF', 'FREE SN', 'WAVE CI'];
        const networkApiCode = (0, paymentUtils_1.getNetworkApiCode)(country, network);
        if (iframeNetworks.includes(networkApiCode)) {
            try {
                const response = yield (0, feexPayApi_1.requestToPay)({
                    phoneNumber: getFormattedPhoneNumber(),
                    amount: baseAmount,
                    network,
                    country,
                    description: paymentConfig.description || 'Payment',
                    customId: paymentConfig.customId || '',
                    shop: paymentConfig.shop,
                    apiToken: paymentConfig.apiToken,
                    currency: paymentConfig.currency,
                    callback_info: paymentConfig.callback_info || {},
                    first_name: fullName || '',
                    email: email || '',
                });
                if (response.payment_url) {
                    setIframeUrl(response.payment_url);
                }
                if (response.reference) {
                    setTransactionReference(response.reference);
                    handleStatusCheck(response.reference);
                }
                else if (!response.payment_url) {
                    throw new Error('La réponse de paiement est invalide.');
                }
            }
            catch (error) {
                console.error('Payment error:', error);
                setPaymentStatus('FAILED');
                setStatusMessage('Le paiement a échoué. Veuillez réessayer.');
                setStatusModalOpen(true);
            }
            finally {
                setIsLoading(false);
            }
            return;
        }
        try {
            if (paymentMethod === 'CARD') {
                const nameParts = fullName.split(' ');
                const firstName = nameParts[0] || '';
                const lastName = nameParts.slice(1).join(' ') || '';
                const response = yield (0, feexPayApi_1.requestCardPayment)({
                    phone: phoneNumber,
                    amount: baseAmount,
                    shop: paymentConfig.shop,
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    type_card: typeCard,
                    apiToken: paymentConfig.apiToken,
                    currency: paymentConfig.currency,
                });
                if (response && response.reference) {
                    setTransactionReference(response.reference);
                    handleStatusCheck(response.reference);
                }
                else {
                    setPaymentStatus('FAILED');
                    setStatusMessage('La demande de paiement par carte a échoué. Veuillez réessayer.');
                    setStatusModalOpen(true);
                    setIsLoading(false);
                }
            }
            else if (paymentMethod === 'MOBILE') {
                const handlerProps = {
                    phoneNumber,
                    baseAmount,
                    network,
                    country,
                    paymentConfig,
                    transactionReference,
                    generateRandomId, setStateCallbacks: {
                        setTransactionReference,
                        setPaymentStatus,
                        setStatusMessage,
                        setStatusModalOpen,
                        setIsLoading
                    }
                };
                const response = yield (0, paymentHandlers_1.handlePaymentSubmit)(e, handlerProps, validateForm, getFormattedPhoneNumber);
                if (response && response.reference) {
                    handleStatusCheck(response.reference);
                }
            }
            else if (paymentMethod === 'WALLET') {
                if (country === 'BENIN' && network === 'CORIS') {
                    try {
                        const nameParts = fullName.split(' ');
                        const firstName = nameParts[0] || '';
                        const formattedPhone = phoneNumber.startsWith('+229') ? phoneNumber : `+229${phoneNumber}`;
                        const response = yield (0, feexPayApi_1.requestWalletCorisPayment)({
                            phoneNumber: formattedPhone,
                            amount: baseAmount,
                            shop: paymentConfig.shop,
                            email: email,
                            first_name: firstName,
                            description: 'Paiement via FeexPay',
                            apiToken: paymentConfig.apiToken,
                            currency: paymentConfig.currency,
                            callback_info: paymentConfig.callback_info || {},
                        });
                        if (response.statusCode === '201') {
                            setPendingReference(response.reference);
                            setOtpModalOpen(true);
                            setIsLoading(false);
                        }
                        else {
                            setPaymentStatus('FAILED');
                            setStatusMessage('La demande de paiement a échoué. Veuillez réessayer.');
                            setStatusModalOpen(true);
                            setIsLoading(false);
                        }
                    }
                    catch (error) {
                        console.error('Error in Coris Wallet payment:', error);
                        setPaymentStatus('FAILED');
                        setStatusMessage('Une erreur est survenue lors du traitement du paiement. Veuillez réessayer.');
                        setStatusModalOpen(true);
                        setIsLoading(false);
                    }
                }
                else {
                    const handlerProps = {
                        phoneNumber,
                        baseAmount,
                        network,
                        country,
                        paymentConfig,
                        transactionReference,
                        generateRandomId,
                        fullName,
                        email,
                        setStateCallbacks: {
                            setTransactionReference,
                            setPaymentStatus,
                            setStatusMessage,
                            setStatusModalOpen,
                            setIsLoading
                        }
                    };
                    const response = yield (0, paymentHandlers_1.handlePaymentSubmit)(e, handlerProps, validateForm, getFormattedPhoneNumber);
                    if (response && response.reference) {
                        handleStatusCheck(response.reference);
                    }
                }
            }
        }
        catch (error) {
            console.error('Error in payment submission:', error);
            setPaymentStatus('FAILED');
            setStatusMessage('Une erreur est survenue lors du traitement du paiement. Veuillez réessayer.');
            setStatusModalOpen(true);
            setIsLoading(false);
        }
    });
    const validateForm = () => {
        const fieldsToHide = paymentConfig.fields_to_hide || [];
        if (paymentMethod === 'MOBILE' || paymentMethod === 'WALLET') {
            if (!fieldsToHide.includes('name') && !fullName.trim()) {
                setStatusMessage('Veuillez entrer votre nom complet');
                setStatusModalOpen(true);
                return false;
            }
            if (!fieldsToHide.includes('email') && (!email.trim() || !email.includes('@'))) {
                setStatusMessage('Veuillez entrer une adresse email valide');
                setStatusModalOpen(true);
                return false;
            }
            if (!phoneNumber.trim() || phoneNumber.length < 8) {
                setStatusMessage('Veuillez entrer un numéro de téléphone valide');
                setStatusModalOpen(true);
                return false;
            }
            if (paymentMethod === 'WALLET' && country !== 'BENIN' && country !== 'COTE_D_IVOIRE') {
                setStatusMessage('Seuls le Bénin (Coris) et la Côte d\'Ivoire (Wave) sont supportés pour les paiements Wallet');
                setStatusModalOpen(true);
                return false;
            }
        }
        else if (paymentMethod === 'CARD') {
            if (!fullName || fullName.trim().split(' ').length < 2) {
                setStatusMessage('Veuillez entrer votre nom et prénom complets');
                setPaymentStatus('FAILED');
                setStatusModalOpen(true);
                return false;
            }
            if (!email || !email.includes('@')) {
                setStatusMessage('Veuillez entrer une adresse email valide');
                setPaymentStatus('FAILED');
                setStatusModalOpen(true);
                return false;
            }
            if (!phoneNumber) {
                setStatusMessage('Veuillez entrer un numéro de téléphone valide');
                setPaymentStatus('FAILED');
                setStatusModalOpen(true);
                return false;
            }
        }
        return true;
    };
    const generateRandomId = () => {
        return `TRX-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    };
    const handleOTPSubmit = (otp) => __awaiter(void 0, void 0, void 0, function* () {
        setIsLoading(true);
        try {
            const nameParts = fullName.split(' ');
            const firstName = nameParts[0] || '';
            const formattedPhone = phoneNumber.startsWith('+229') ? phoneNumber : `+229${phoneNumber}`;
            const response = yield (0, feexPayApi_1.requestWalletCorisPayment)({
                phoneNumber: formattedPhone,
                amount: baseAmount,
                shop: paymentConfig.shop,
                email: email,
                first_name: firstName,
                description: 'Paiement via FeexPay',
                reference: pendingReference,
                otp: otp,
                apiToken: paymentConfig.apiToken,
                currency: paymentConfig.currency,
                callback_info: paymentConfig.callback_info || {},
            });
            setOtpModalOpen(false);
            if (response.reference) {
                if (response.status === 'SUCCESSFUL' || response.status === 'SUCCESS') {
                    setPaymentStatus('SUCCESSFUL');
                    setStatusMessage('Paiement effectué avec succès!');
                    setStatusModalOpen(true);
                    setIsLoading(false);
                    if (paymentConfig.callbackUrl) {
                        setTimeout(() => {
                            window.location.href = `${paymentConfig.callbackUrl}?ref=${response.reference}`;
                        }, 2000);
                    }
                }
                else if (response.status === 'PENDING') {
                    setTransactionReference(response.reference);
                    handleStatusCheck(response.reference);
                }
                else {
                    setPaymentStatus('FAILED');
                    setStatusMessage(response.message || 'La transaction a échoué. Veuillez réessayer.');
                    setStatusModalOpen(true);
                    setIsLoading(false);
                    if (paymentConfig.error_callback_url) {
                        setTimeout(() => {
                            window.location.href = `${paymentConfig.error_callback_url}?ref=${response.reference}`;
                        }, 2000);
                    }
                }
            }
            else {
                setPaymentStatus('FAILED');
                setStatusMessage(response.message || 'La confirmation du paiement a échoué. Veuillez réessayer.');
                setStatusModalOpen(true);
                setIsLoading(false);
            }
        }
        catch (error) {
            console.error('Error in OTP submission:', error);
            setPaymentStatus('FAILED');
            setStatusMessage('Une erreur est survenue lors de la confirmation du paiement. Veuillez réessayer.');
            setStatusModalOpen(true);
            setIsLoading(false);
            setOtpModalOpen(false);
        }
    });
    const handleStatusCheck = (ref) => {
        (0, paymentHandlers_1.startStatusCheck)(ref, {
            phoneNumber,
            baseAmount,
            network,
            country,
            paymentConfig,
            transactionReference,
            generateRandomId,
            fullName,
            email,
            setStateCallbacks: {
                setTransactionReference,
                setPaymentStatus,
                setStatusMessage,
                setStatusModalOpen,
                setIsLoading
            }
        }, network, getFormattedPhoneNumber);
    };
    if (!isOpen)
        return null;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-hidden", children: [(0, jsx_runtime_1.jsxs)("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-md relative max-h-[90vh] flex flex-col", children: [iframeUrl && ((0, jsx_runtime_1.jsxs)("div", { className: "absolute inset-0 bg-white z-10 rounded-lg overflow-hidden", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => setIframeUrl(null), className: "absolute top-2 right-2 z-20 bg-gray-200 text-gray-800 rounded-full p-1 hover:bg-gray-300 focus:outline-none", "aria-label": "Fermer la passerelle de paiement", children: (0, jsx_runtime_1.jsx)("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }) }) }), (0, jsx_runtime_1.jsx)("iframe", { src: iframeUrl, className: "w-full h-full border-0", title: "Payment Gateway", allow: "payment" })] })), (0, jsx_runtime_1.jsx)(HeaderBar_1.default, { shop: paymentConfig.shop, onClose: onClose }), (0, jsx_runtime_1.jsxs)("div", { className: "p-6 overflow-y-auto flex-grow", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-600 text-center mb-4", children: "Remplissez les champs suivants pour effectuer votre paiement" }), !paymentConfig.case && ((0, jsx_runtime_1.jsx)("div", { className: "flex justify-center mb-6 border-b pb-4 w-fit gap-2", children: [
                                    { label: 'Mobile Money', value: 'MOBILE', icon: ((0, jsx_runtime_1.jsxs)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "#D45D00", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [(0, jsx_runtime_1.jsx)("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2", ry: "2" }), (0, jsx_runtime_1.jsx)("line", { x1: "12", y1: "18", x2: "12", y2: "18" })] })) },
                                    { label: 'Carte Bancaire', value: 'CARD', icon: ((0, jsx_runtime_1.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: [(0, jsx_runtime_1.jsx)("path", { d: "M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" }), (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z", clipRule: "evenodd" })] })) },
                                    { label: 'Wallet', value: 'WALLET', icon: ((0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z", clipRule: "evenodd" }) })) }
                                ].map(({ label, value, icon }) => {
                                    const isSelected = paymentMethod === value;
                                    return ((0, jsx_runtime_1.jsxs)("div", { className: `flex flex-col items-center px-4 py-2 cursor-pointer rounded border ${isSelected
                                            ? 'bg-[#fff7ed] border-[#D45D00]'
                                            : 'bg-white border-[#D45D00]'}`, onClick: () => handlePaymentMethodChange(value), children: [(0, jsx_runtime_1.jsx)("div", { className: "w-8 h-8 rounded-full flex items-center justify-center mb-1", children: icon }), (0, jsx_runtime_1.jsx)("span", { className: "text-xs font-medium", children: label })] }, value));
                                }) })), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-6", children: [!((paymentConfig.fields_to_hide || []).includes('email') && (paymentConfig.fields_to_hide || []).includes('name')) && paymentMethod !== 'CARD' ? ((0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsxs)("h2", { className: "font-bold text-gray-800 mb-2 flex items-center", children: [(0, jsx_runtime_1.jsx)("span", { className: "bg-gray-800 text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs mr-2", children: "1" }), "Informations Personnelles"] }), !(paymentConfig.fields_to_hide || []).includes('name') && ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Nom et Pr\u00E9noms", className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs", value: fullName, onChange: (e) => setFullName(e.target.value) }) })), !(paymentConfig.fields_to_hide || []).includes('email') && ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { type: "email", placeholder: "Email", className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs", value: email, onChange: (e) => setEmail(e.target.value) }) }))] })) : null, (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsxs)("h2", { className: "font-bold text-gray-800 mb-2 flex items-center", children: [(0, jsx_runtime_1.jsx)("span", { className: "bg-gray-800 text-white rounded-full w-5 h-5 inline-flex items-center justify-center text-xs mr-2", children: paymentMethod === 'CARD' || ((paymentConfig.fields_to_hide || []).includes('email') && (paymentConfig.fields_to_hide || []).includes('name')) ? '1' : '2' }), paymentMethod === 'CARD' ? 'Paiement par Carte Bancaire' : 'Méthodes de paiement'] }), paymentMethod === 'MOBILE' && paymentConfig.currency !== 'CAD' && paymentConfig.currency !== 'USD' && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(CountrySelector_1.default, { selectedCountry: country, onChange: handleCountryChange }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(NetworkSelector_1.default, { selectedNetwork: network, onChange: handleNetworkChange, country: country }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex", children: [(0, jsx_runtime_1.jsx)("div", { className: "bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md flex items-center justify-center", children: (0, jsx_runtime_1.jsx)("span", { className: "text-gray-600 text-xs", children: getPrefixFromCountry(country) }) }), (0, jsx_runtime_1.jsx)("input", { type: "tel", placeholder: "Num\u00E9ro de t\u00E9l\u00E9phone sans indicatif", className: "flex-1 px-2 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs", value: phoneNumber, onChange: handlePhoneNumberChange })] })] })), (paymentMethod === 'CARD' && (paymentConfig.currency === 'CAD' || paymentConfig.currency === 'USD')) && ((0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-red-500 text-md", children: "Les paiements par cartes sont momentan\u00E9ment indisponibles." }), (0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Pr\u00E9nom" }), (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Pr\u00E9nom", className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs", value: fullName.split(' ')[0] || '', onChange: (e) => {
                                                                            const lastName = fullName.split(' ').slice(1).join(' ');
                                                                            setFullName(`${e.target.value} ${lastName}`.trim());
                                                                        } })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Nom" }), (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Nom", className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs", value: fullName.split(' ').slice(1).join(' ') || '', onChange: (e) => {
                                                                            const firstName = fullName.split(' ')[0] || '';
                                                                            setFullName(`${firstName} ${e.target.value}`.trim());
                                                                        } })] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Email" }), (0, jsx_runtime_1.jsx)("input", { type: "email", placeholder: "exemple@email.com", className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs", value: email, onChange: (e) => setEmail(e.target.value) })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "T\u00E9l\u00E9phone" }), (0, jsx_runtime_1.jsx)("input", { type: "tel", placeholder: "Num\u00E9ro de t\u00E9l\u00E9phone avec indicatif", className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs", value: phoneNumber, onChange: (e) => setPhoneNumber(e.target.value) })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Type de carte" }), (0, jsx_runtime_1.jsxs)("select", { className: "w-full px-2 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs", value: typeCard, onChange: (e) => setTypeCard(e.target.value), children: [(0, jsx_runtime_1.jsx)("option", { value: "VISA", children: "VISA" }), (0, jsx_runtime_1.jsx)("option", { value: "MASTERCARD", children: "MASTERCARD" })] })] })] })), paymentMethod === 'WALLET' && paymentConfig.currency !== 'CAD' && paymentConfig.currency !== 'USD' && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-2 gap-4", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Pays" }), (0, jsx_runtime_1.jsxs)("select", { value: country, onChange: (e) => handleCountryChange(e.target.value), className: "block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs", children: [(0, jsx_runtime_1.jsx)("option", { value: "BENIN", children: "B\u00E9nin" }), (0, jsx_runtime_1.jsx)("option", { value: "COTE_D_IVOIRE", children: "C\u00F4te d'Ivoire" })] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "R\u00E9seau" }), (0, jsx_runtime_1.jsxs)("select", { value: network, onChange: (e) => handleNetworkChange(e.target.value), className: "block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs", disabled: true, children: [country === 'BENIN' && ((0, jsx_runtime_1.jsx)("option", { value: "CORIS", children: "Coris" })), country === 'COTE_D_IVOIRE' && ((0, jsx_runtime_1.jsx)("option", { value: "WAVE", children: "Wave" }))] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex", children: [(0, jsx_runtime_1.jsx)("div", { className: "bg-gray-100 px-3 py-2 border border-r-0 rounded-l-md flex items-center justify-center", children: (0, jsx_runtime_1.jsx)("span", { className: "text-gray-600 text-sm", children: country === 'BENIN' ? '+229' : country === 'COTE_D_IVOIRE' ? '+225' : '' }) }), (0, jsx_runtime_1.jsx)("input", { type: "tel", placeholder: "Num\u00E9ro de t\u00E9l\u00E9phone sans indicatif", className: "flex-1 px-2 py-2 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs", value: phoneNumber, onChange: handlePhoneNumberChange })] })] })), (0, jsx_runtime_1.jsxs)("div", { className: "bg-gray-50 p-4 rounded-md", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between mb-1", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-sm text-gray-600", children: "Montant :" }), (0, jsx_runtime_1.jsxs)("span", { className: "text-sm font-medium", children: [(_a = paymentConfig.amount) === null || _a === void 0 ? void 0 : _a.toLocaleString('fr-FR'), " ", paymentConfig.currency] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between mb-1", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-sm text-gray-600", children: "Frais* :" }), (0, jsx_runtime_1.jsx)("span", { className: "text-sm font-medium", children: fees > 0 ? `${fees.toLocaleString('fr-FR')} ${paymentConfig.currency}` : `0 ${paymentConfig.currency}` })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between font-bold", children: [(0, jsx_runtime_1.jsx)("span", { children: "Montant Total \u00E0 payer :" }), (0, jsx_runtime_1.jsxs)("span", { children: [total.toLocaleString('fr-FR'), " ", paymentConfig.currency] })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-xs text-gray-500 mt-2", children: fees > 0 ? `*Les frais de transaction sont de ${feePercentage.toFixed(1).replace('.', ',')}% du montant.` : "*Aucun frais de transaction applicable pour cette transaction." })] }), (0, jsx_runtime_1.jsx)("div", { className: "pt-2", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex space-x-2", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => onClose(), className: "w-1/3 bg-gray-200 hover:bg-gray-300 text-primary-blue font-bold py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center", children: "Retour" }), (0, jsx_runtime_1.jsxs)("button", { onClick: handlePaymentSubmit, disabled: isLoading, className: `w-2/3 bg-primary-orange hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`, children: [isLoading ? ((0, jsx_runtime_1.jsxs)("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [(0, jsx_runtime_1.jsx)("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), (0, jsx_runtime_1.jsx)("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] })) : null, "Payer ", total.toLocaleString('fr-FR'), " ", paymentConfig.currency] })] }) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-6 text-center text-xs text-gray-500 flex-shrink-0 bg-gray-50 w-full p-2", children: [(0, jsx_runtime_1.jsx)("p", { className: "mt-2", children: "Paiements s\u00E9curis\u00E9s par FeexPay" }), (0, jsx_runtime_1.jsxs)("p", { className: "mt-2", children: ["En payant par ce plugin, vous acceptez les ", (0, jsx_runtime_1.jsx)("a", { className: "text-blue-900", style: { textDecoration: 'underline' }, target: "_blank", href: "https://feexpay.me/fr/terms-and-conditions", children: "conditions g\u00E9n\u00E9rales d'utilisation de FeexPay" })] })] })] })] }), (0, jsx_runtime_1.jsx)(StatusModal_1.default, { isOpen: statusModalOpen, onClose: () => setStatusModalOpen(false), status: paymentStatus, message: statusMessage }), (0, jsx_runtime_1.jsx)(OTPModal_1.default, { isOpen: otpModalOpen, onClose: () => {
                    setOtpModalOpen(false);
                    setIsLoading(false);
                }, onSubmit: handleOTPSubmit, reference: pendingReference })] }));
};
exports.default = PaymentModal;
