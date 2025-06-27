"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeexPayProvider = exports.useFeexPay = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const defaultPaymentConfig = {
    amount: 0,
    description: '',
    shop: '',
    apiToken: '',
    mode: 'SANDBOX',
};
const FeexPayContext = (0, react_1.createContext)({
    paymentConfig: defaultPaymentConfig,
    setPaymentConfig: () => { },
});
const useFeexPay = () => (0, react_1.useContext)(FeexPayContext);
exports.useFeexPay = useFeexPay;
const FeexPayProvider = ({ children }) => {
    const [paymentConfig, setPaymentConfig] = (0, react_1.useState)(defaultPaymentConfig);
    return ((0, jsx_runtime_1.jsx)(FeexPayContext.Provider, { value: { paymentConfig, setPaymentConfig }, children: children }));
};
exports.FeexPayProvider = FeexPayProvider;
