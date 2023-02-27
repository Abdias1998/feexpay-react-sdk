import React from "react";
type Props = {
    amount: number;
    token: string;
    id: string;
    callback: Function;
};
declare const FeexPay: React.FC<Props>;
export default FeexPay;
