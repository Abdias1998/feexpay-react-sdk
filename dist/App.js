"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const FeexPayButton_1 = require("./components/FeexPayButton");
const FeexPayContext_1 = require("./context/FeexPayContext");
function App() {
    return ((0, jsx_runtime_1.jsx)(FeexPayContext_1.FeexPayProvider, { children: (0, jsx_runtime_1.jsx)(FeexPayButton_1.default, { amount: 100, description: "Test Payment", shop: "671a774c706593edb3dc4ab2", apiToken: "fp_HHNoQGt9Vn8KpZoLaBkG3uEeKpLUYBaHUZIZXJE3Xgv0OKG2tK3A7PtlytctikrJ", customId: '23455', callback_info: { description: "Test Payment", fullname: "John Doe", email: "john.doe@example.com", phone: "12345678" }, mode: "LIVE", callback: (response) => {
                console.log(response);
            }, buttonClass: "bg-primary-blue hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center", case: '', currency: 'XOF' }) }));
}
exports.default = App;
