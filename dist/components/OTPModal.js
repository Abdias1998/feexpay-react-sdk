"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const OTPModal = ({ isOpen, onClose, onSubmit, reference }) => {
    const [otp, setOtp] = (0, react_1.useState)('');
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        onSubmit(otp);
    };
    if (!isOpen)
        return null;
    return ((0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-hidden", children: (0, jsx_runtime_1.jsxs)("div", { className: "bg-white rounded-lg shadow-xl w-full max-w-md relative", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-center border-b p-4", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-lg font-medium", children: "Confirmation de paiement" }), (0, jsx_runtime_1.jsx)("button", { onClick: onClose, className: "text-gray-500 hover:text-gray-700", children: (0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "p-6", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-600 mb-4", children: "Un code de confirmation a \u00E9t\u00E9 envoy\u00E9 \u00E0 votre t\u00E9l\u00E9phone. Veuillez le saisir ci-dessous pour finaliser votre paiement." }), (0, jsx_runtime_1.jsxs)("div", { className: "mb-4", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-sm text-gray-500 mb-1", children: "R\u00E9f\u00E9rence de transaction:" }), (0, jsx_runtime_1.jsx)("p", { className: "font-medium", children: reference })] }), (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, children: [(0, jsx_runtime_1.jsxs)("div", { className: "mb-4", children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Code OTP" }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: otp, onChange: (e) => setOtp(e.target.value), placeholder: "Entrez le code re\u00E7u par SMS", className: "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange", required: true })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", disabled: isLoading, className: "w-full bg-primary-orange text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-orange disabled:opacity-50", children: isLoading ? 'Traitement en cours...' : 'Confirmer le paiement' })] })] })] }) }));
};
exports.default = OTPModal;
