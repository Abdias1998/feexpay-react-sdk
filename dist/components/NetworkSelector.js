"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const paymentUtils_1 = require("../utils/paymentUtils");
const NetworkSelector = ({ selectedNetwork, onChange, country }) => {
    const availableNetworks = (0, paymentUtils_1.getNetworksForCountry)(country);
    (0, react_1.useEffect)(() => {
        if (availableNetworks.length > 0 && !availableNetworks.includes(selectedNetwork)) {
            onChange(availableNetworks[0]);
        }
    }, [country, selectedNetwork, availableNetworks, onChange]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("select", { value: selectedNetwork, onChange: (e) => onChange(e.target.value), className: "block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs", children: availableNetworks.map((network) => ((0, jsx_runtime_1.jsx)("option", { value: network, children: network.replace('_', ' ') }, network))) }), (0, jsx_runtime_1.jsx)("div", { className: "absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none", children: (0, jsx_runtime_1.jsx)("svg", { className: "w-4 h-4 text-gray-400", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: (0, jsx_runtime_1.jsx)("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 9l-7 7-7-7" }) }) })] }));
};
exports.default = NetworkSelector;
