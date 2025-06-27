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
const PaymentModal_1 = require("./PaymentModal");
const FeexPayContext_1 = require("../context/FeexPayContext");
const feexPayApi_1 = require("../apis/feexPayApi");
const Feexpay = ({ amount, description, shop, apiToken, callbackUrl, mode = 'LIVE', customId, fields_to_hide, callback, currency = 'XOF', case: caseType, callback_info, error_callback_url, custom_button = false, buttonText = `Payer ${amount} ${currency}`, buttonClass, }) => {
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)(false);
    const { setPaymentConfig } = (0, FeexPayContext_1.useFeexPay)();
    const containerRef = (0, react_1.useRef)(null);
    const [shopLoaded, setShopLoaded] = (0, react_1.useState)(false);
    const [shopError, setShopError] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const loadShop = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                yield (0, feexPayApi_1.getShop)(shop);
                setShopLoaded(true);
            }
            catch (_a) {
                setShopError("Veuillez vérifier vos identifiants de boutique (ID et token) et rester en mode LIVE.");
            }
        });
        loadShop();
    }, [shop]);
    const handlePaymentClick = (0, react_1.useCallback)(() => {
        setPaymentConfig({
            amount,
            description,
            shop,
            apiToken,
            callbackUrl,
            mode,
            customId: customId,
            fields_to_hide,
            callback,
            currency,
            case: caseType,
            callback_info,
            error_callback_url,
        });
        setIsModalOpen(true);
    }, [
        amount,
        description,
        shop,
        apiToken,
        callbackUrl,
        mode,
        customId,
        fields_to_hide,
        callback,
        currency,
        caseType,
        callback_info,
        error_callback_url,
        setPaymentConfig
    ]);
    (0, react_1.useEffect)(() => {
        const container = containerRef.current;
        if (!container)
            return;
        const handleTrigger = () => {
            handlePaymentClick();
        };
        container.addEventListener('feexpay:trigger', handleTrigger);
        return () => {
            container.removeEventListener('feexpay:trigger', handleTrigger);
        };
    }, [handlePaymentClick]);
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { ref: containerRef, children: [shopError ? ((0, jsx_runtime_1.jsx)("p", { className: "text-red-600 text-sm mb-2", children: shopError })) : shopLoaded && !custom_button && ((0, jsx_runtime_1.jsx)("button", { onClick: handlePaymentClick, className: buttonClass || "w-full bg-primary-orange hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center", children: buttonText })), isModalOpen && ((0, jsx_runtime_1.jsx)(PaymentModal_1.default, { isOpen: isModalOpen, onClose: handleCloseModal }))] }));
};
exports.default = Feexpay;
