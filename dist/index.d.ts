import React from "react";
type Props = {
    montant: number;
    token: string;
    id: string;
    callback: Function;
};
declare const FeexPay: React.FC<Props>;
export default FeexPay;
