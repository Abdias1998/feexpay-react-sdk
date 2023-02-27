import React from "react";
type Props = {
    children: any;
    montant: any;
    apiURL: string;
    token: string;
    id: string;
    name_marchand: string;
    callback: Function;
};
export declare const SDKcontexts: React.FC<Props>;
export declare const useAppContext: () => any;
export {};
