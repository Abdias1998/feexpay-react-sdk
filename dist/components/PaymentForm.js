"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const PaymentForm = ({ fullName, setFullName, email, setEmail, onSubmit, }) => {
    return ((0, jsx_runtime_1.jsxs)("form", { onSubmit: onSubmit, className: "space-y-4", children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Nom et Pr\u00E9noms", className: "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange text-sm", value: fullName, onChange: (e) => setFullName(e.target.value), required: true }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("input", { type: "email", placeholder: "Email", className: "w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange", value: email, onChange: (e) => setEmail(e.target.value), required: true }) }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "w-full bg-primary-orange hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300", children: "Continuer" })] }));
};
exports.default = PaymentForm;
