import React from "react";
type Props = {
    amount: number;
    token: string;
    id: string;
    callback?: Function;
    callback_url?: string;
    description?: string;
    callback_info?: string;
    reference?: string;
    fieldsToHide?: [];
    buttonClass?: string;
    buttonText?: string;
    buttonStyles?: React.CSSProperties;
};
declare const FeexPay: React.FC<Props>;
export default FeexPay;
