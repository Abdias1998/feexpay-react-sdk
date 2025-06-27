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
exports.startStatusCheck = exports.handlePaymentSubmit = void 0;
const feexPayApi_1 = require("../apis/feexPayApi");
const handlePaymentSubmit = (e, props, validateForm, getFormattedPhoneNumber) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    if (!validateForm()) {
        return;
    }
    const { baseAmount, network, country, paymentConfig, generateRandomId, fullName, email, setStateCallbacks } = props;
    const { setTransactionReference, setPaymentStatus, setStatusMessage, setStatusModalOpen, setIsLoading } = setStateCallbacks;
    setIsLoading(true);
    try {
        const formattedPhoneNumber = getFormattedPhoneNumber();
        const response = yield (0, feexPayApi_1.requestToPay)({
            phoneNumber: formattedPhoneNumber,
            amount: baseAmount,
            network,
            country,
            description: paymentConfig.description,
            customId: paymentConfig.customId || generateRandomId(),
            shop: paymentConfig.shop,
            apiToken: paymentConfig.apiToken,
            currency: paymentConfig.currency,
            callback_info: paymentConfig.callback_info || {},
            first_name: fullName,
            email: email,
        });
        if (response.statusCode === "10") {
            setPaymentStatus('INSUFFICIENT_FUNDS');
            setStatusMessage('Fonds insuffisants. Veuillez vérifier votre solde et réessayer.');
            setStatusModalOpen(true);
            setIsLoading(false);
            if (paymentConfig.callback) {
                paymentConfig.callback({
                    reference: response.reference,
                    status: 'FAILED',
                    phoneNumber: formattedPhoneNumber,
                    reseau: network,
                    callback_info: paymentConfig.callback_info || {},
                    description: paymentConfig.description,
                    transaction_id: response.reference,
                    message: "Le paiement a échoué. Veuillez vérifier votre solde et réessayer.",
                    amount: paymentConfig.amount,
                    currency: paymentConfig.currency,
                    first_name: fullName,
                    email: email,
                });
            }
            if (paymentConfig.error_callback_url) {
                window.location.href = `${paymentConfig.error_callback_url}?ref=${response.reference}`;
            }
            return;
        }
        else if (response.statusCode === "92") {
            setPaymentStatus('FAILED');
            setStatusMessage('La transaction a été annulée. Veuillez réessayer.');
            setStatusModalOpen(true);
            setIsLoading(false);
            if (paymentConfig.callback) {
                paymentConfig.callback({
                    reference: response.reference,
                    status: 'FAILED',
                    phoneNumber: formattedPhoneNumber,
                    reseau: network,
                    callback_info: paymentConfig.callback_info || {},
                    description: paymentConfig.description,
                    transaction_id: response.reference,
                    message: "La transaction a été annulée. Veuillez réessayer.",
                    amount: paymentConfig.amount,
                    first_name: fullName,
                    email: email,
                    currency: paymentConfig.currency,
                });
            }
            if (paymentConfig.error_callback_url) {
                window.location.href = `${paymentConfig.error_callback_url}?ref=${response.reference}`;
            }
            return;
        }
        setTransactionReference(response.reference);
        (0, exports.startStatusCheck)(response.reference, props, network, getFormattedPhoneNumber);
        return { reference: response.reference };
    }
    catch (error) {
        console.error('Payment error:', error);
        setPaymentStatus('FAILED');
        setStatusMessage('Le paiement a échoué. Veuillez réessayer.');
        setStatusModalOpen(true);
        setIsLoading(false);
    }
});
exports.handlePaymentSubmit = handlePaymentSubmit;
const startStatusCheck = (ref, props, network, getFormattedPhoneNumber) => {
    let checkCount = 0;
    const maxChecks = 12;
    const { paymentConfig, setStateCallbacks, fullName, email, } = props;
    const { setPaymentStatus, setStatusMessage, setStatusModalOpen, setIsLoading } = setStateCallbacks;
    const intervalId = setInterval(() => __awaiter(void 0, void 0, void 0, function* () {
        checkCount++;
        try {
            const status = yield (0, feexPayApi_1.checkTransactionStatus)(ref);
            if (status.reason === "LOW_BALANCE_OR_PAYEE_LIMIT_REACHED_OR_NOT_ALLOWED") {
                clearInterval(intervalId);
                setPaymentStatus('INSUFFICIENT_FUNDS');
                setStatusMessage('Fonds insuffisants. Veuillez vérifier votre solde et réessayer.');
                setStatusModalOpen(true);
                setIsLoading(false);
                if (paymentConfig.callback) {
                    paymentConfig.callback({
                        reference: status.reference,
                        status: 'FAILED',
                        phoneNumber: getFormattedPhoneNumber(),
                        reseau: network,
                        callback_info: paymentConfig.callback_info,
                        description: paymentConfig.description,
                        transaction_id: status.reference,
                        message: "Le paiement a échoué. Veuillez vérifier votre solde et réessayer.",
                        amount: paymentConfig.amount,
                        first_name: fullName,
                        email: email,
                        currency: paymentConfig.currency,
                    });
                }
                if (paymentConfig.error_callback_url) {
                    window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
                }
                return;
            }
            else if (status.reason === "PAYER NOT FOUND") {
                clearInterval(intervalId);
                setPaymentStatus('FAILED');
                setStatusMessage('Numéro de téléphone non trouvé. Veuillez vérifier le numéro et réessayer.');
                setStatusModalOpen(true);
                setIsLoading(false);
                if (paymentConfig.callback) {
                    paymentConfig.callback({
                        reference: status.reference,
                        status: 'FAILED',
                        phoneNumber: getFormattedPhoneNumber(),
                        reseau: network,
                        callback_info: paymentConfig.callback_info,
                        description: paymentConfig.description,
                        transaction_id: status.reference,
                        message: "Le paiement a echoué. Veuillez vérifier le numéro et réessayer.",
                        amount: paymentConfig.amount,
                        first_name: fullName,
                        email: email,
                        currency: paymentConfig.currency,
                    });
                }
                if (paymentConfig.error_callback_url) {
                    window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
                }
                return;
            }
            const paymentStatus = status.status.toUpperCase();
            switch (paymentStatus) {
                case 'SUCCESSFUL':
                case 'SUCCESS':
                    clearInterval(intervalId);
                    setPaymentStatus('SUCCESSFUL');
                    setStatusMessage('Paiement réussi !');
                    setStatusModalOpen(true);
                    setIsLoading(false);
                    if (paymentConfig.callback) {
                        paymentConfig.callback({
                            reference: status.reference,
                            status: paymentStatus,
                            phoneNumber: getFormattedPhoneNumber(),
                            reseau: network,
                            callback_info: paymentConfig.callback_info || {},
                            description: paymentConfig.description,
                            transaction_id: status.reference,
                            message: "La transaction a été effectuée avec succès.",
                            amount: paymentConfig.amount,
                            currency: paymentConfig.currency,
                            first_name: fullName,
                            email: email,
                        });
                    }
                    if (paymentConfig.callbackUrl) {
                        window.location.href = `${paymentConfig.callbackUrl}?ref=${ref}`;
                    }
                    break;
                case 'FAILED':
                    clearInterval(intervalId);
                    setPaymentStatus('FAILED');
                    setStatusMessage('Le paiement a échoué. Veuillez réessayer ou utiliser une autre méthode de paiement.');
                    setStatusModalOpen(true);
                    setIsLoading(false);
                    if (paymentConfig.callback) {
                        paymentConfig.callback({
                            reference: status.reference,
                            status: paymentStatus,
                            phoneNumber: getFormattedPhoneNumber(),
                            reseau: network,
                            callback_info: paymentConfig.callback_info || {},
                            description: paymentConfig.description,
                            transaction_id: status.reference,
                            message: "Le paiement a échoué. Veuillez réessayer ou utiliser une autre méthode de paiement.",
                            amount: paymentConfig.amount,
                            currency: paymentConfig.currency,
                            first_name: fullName,
                            email: email,
                        });
                    }
                    if (paymentConfig.error_callback_url) {
                        window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
                    }
                    break;
                case 'INSUFFICIENT_FUNDS':
                    clearInterval(intervalId);
                    setPaymentStatus('INSUFFICIENT_FUNDS');
                    setStatusMessage('Fonds insuffisants. Veuillez vérifier votre solde et réessayer.');
                    setStatusModalOpen(true);
                    setIsLoading(false);
                    if (paymentConfig.callback) {
                        paymentConfig.callback({
                            reference: status.reference,
                            status: paymentStatus,
                            phoneNumber: getFormattedPhoneNumber(),
                            reseau: network,
                            callback_info: paymentConfig.callback_info || {},
                            description: paymentConfig.description,
                            transaction_id: status.reference,
                            message: "Le paiement a échoué. Veuillez vérifier votre solde et réessayer.",
                            amount: paymentConfig.amount,
                            currency: paymentConfig.currency,
                            first_name: fullName,
                            email: email,
                        });
                    }
                    if (paymentConfig.error_callback_url) {
                        window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
                    }
                    break;
                case 'TIMEOUT':
                    clearInterval(intervalId);
                    setPaymentStatus('TIMEOUT');
                    setStatusMessage('La vérification du paiement a expiré. Veuillez vérifier votre compte pour confirmer le statut.');
                    setStatusModalOpen(true);
                    setIsLoading(false);
                    if (paymentConfig.callback) {
                        paymentConfig.callback({
                            reference: status.reference,
                            status: paymentStatus,
                            phoneNumber: getFormattedPhoneNumber(),
                            reseau: network,
                            callback_info: paymentConfig.callback_info || {},
                            description: paymentConfig.description,
                            transaction_id: status.reference,
                            message: "La vérification du paiement a expiré. Veuillez vérifier votre compte pour confirmer le statut.",
                            amount: paymentConfig.amount,
                            currency: paymentConfig.currency,
                            first_name: fullName,
                            email: email,
                        });
                    }
                    if (paymentConfig.error_callback_url) {
                        window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
                    }
                    break;
                case 'PENDING':
                    if (checkCount >= maxChecks) {
                        clearInterval(intervalId);
                        setPaymentStatus('TIMEOUT');
                        setStatusMessage('La vérification du paiement a expiré. Veuillez vérifier votre compte pour confirmer le statut.');
                        setStatusModalOpen(true);
                        setIsLoading(false);
                        if (paymentConfig.callback) {
                            paymentConfig.callback({
                                reference: status.reference,
                                status: 'TIMEOUT',
                                phoneNumber: getFormattedPhoneNumber(),
                                reseau: network,
                                callback_info: paymentConfig.callback_info || {},
                                description: paymentConfig.description,
                                transaction_id: status.reference,
                                message: "La vérification du paiement a expiré. Veuillez vérifier votre compte pour confirmer le statut.",
                                amount: paymentConfig.amount,
                                currency: paymentConfig.currency,
                                first_name: fullName,
                                email: email,
                            });
                        }
                        if (paymentConfig.error_callback_url) {
                            window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
                        }
                    }
                    break;
                default:
                    if (checkCount >= maxChecks) {
                        clearInterval(intervalId);
                        setPaymentStatus('TIMEOUT');
                        setStatusMessage('Le statut de la transaction est inconnu après plusieurs tentatives.');
                        setStatusModalOpen(true);
                        setIsLoading(false);
                        if (paymentConfig.callback) {
                            paymentConfig.callback({
                                reference: ref,
                                status: 'TIMEOUT',
                                phoneNumber: getFormattedPhoneNumber(),
                                reseau: network,
                                callback_info: paymentConfig.callback_info,
                                description: paymentConfig.description,
                                transaction_id: ref,
                                message: 'Le statut de la transaction est inconnu après plusieurs tentatives.',
                                amount: paymentConfig.amount,
                                currency: paymentConfig.currency,
                                first_name: fullName,
                                email: email,
                            });
                        }
                        if (paymentConfig.error_callback_url) {
                            window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
                        }
                    }
                    break;
            }
        }
        catch (error) {
            console.error(`Status check failed for ref ${ref}:`, error);
            if (checkCount >= maxChecks) {
                clearInterval(intervalId);
                setPaymentStatus('TIMEOUT');
                setStatusMessage('La vérification du paiement a échoué après plusieurs tentatives.');
                setStatusModalOpen(true);
                setIsLoading(false);
                if (paymentConfig.callback) {
                    paymentConfig.callback({
                        reference: ref,
                        status: 'TIMEOUT',
                        phoneNumber: getFormattedPhoneNumber(),
                        reseau: network,
                        callback_info: paymentConfig.callback_info,
                        description: paymentConfig.description,
                        transaction_id: ref,
                        message: 'La vérification du paiement a échoué après plusieurs tentatives.',
                        amount: paymentConfig.amount,
                        currency: paymentConfig.currency,
                        first_name: fullName,
                        email: email,
                    });
                }
                if (paymentConfig.error_callback_url) {
                    window.location.href = `${paymentConfig.error_callback_url}?ref=${ref}`;
                }
            }
        }
    }), 20000);
    return () => {
        clearInterval(intervalId);
    };
};
exports.startStatusCheck = startStatusCheck;
