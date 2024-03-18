import React from "react";
import { FeexButtonPayStyles } from "src/styled components/FeexPayButtonStyles";
import { LOGO_IMG_LINK } from "src/sdk constants/assets_link";
import { useAppContext } from "src/sdk contexts/props_contexts";

type Props = {
  open_modal: any;
  feexVisisbleBtn:boolean;
    buttonClass?: string;
    buttonText?: string; // Propriété pour le texte du bouton
    buttonStyles?: React.CSSProperties; // Propriété pour les styles du bouton
};
export const FeexPayButton: React.FC<Props> = ({
                                                   open_modal,
                                                   feexVisisbleBtn, buttonText,
                                                   buttonStyles,
                                                   buttonClass,
                                               }) => {
  const {state,dispatch} = useAppContext();
  return (
    <>
        <FeexButtonPayStyles />
        <button
            onClick={() => open_modal()}
            className={`button ${buttonClass || ""}`}
            style={{
                display: feexVisisbleBtn ? "flex" : "none",
                ...buttonStyles, // Fusionner les styles personnalisés avec les styles par défaut
            }}
        >
            <span className="button_text" style={{ marginRight: "5px" }}>{buttonText}</span>
            <span>  {state.price} XOF</span>
        </button>
    </>
  );
};
