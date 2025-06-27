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
const getShop = (shop) => __awaiter(void 0, void 0, void 0, function* () {
    const apiUrl = `https://api.feexpay.me/api/shop/${shop}/get_shop`;
    const response = yield fetch(apiUrl);
    if (!response.ok)
        throw new Error('Shop retrieval failed');
    return yield response.json();
});
const HeaderBar = ({ shop, onClose }) => {
    const [shopData, setShopData] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const fetchShop = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const data = yield getShop(shop);
                setShopData(data);
            }
            catch (err) {
                console.error('Erreur de récupération du shop :', err);
            }
        });
        fetchShop();
    }, [shop]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between px-4 py-2 border-b border-gray-200", children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("img", { src: "../public/logo.png", width: "100", alt: "Logo" }) }), (0, jsx_runtime_1.jsx)("div", { className: "text-right text-xs text-gray-700 ", children: shopData && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: "font-semibold", children: ["MARCHAND: ", shopData.name] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-xs text-gray-500", children: ["ID : ", shopData.reference] })] })) }), (0, jsx_runtime_1.jsx)("button", { onClick: onClose, className: "text-gray-500 hover:text-gray-700", children: (0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })] }));
};
exports.default = HeaderBar;
