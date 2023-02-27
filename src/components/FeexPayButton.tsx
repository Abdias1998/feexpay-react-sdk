import React from "react";
import { FeexButtonPayStyles } from "src/styled components/FeexPayButtonStyles";
import { LOGO_IMG_LINK } from "src/sdk constants/assets_link";
import { useAppContext } from "src/sdk contexts/props_contexts";

type Props = {
  open_modal: any;
  feexVisisbleBtn:boolean;
};
export const FeexPayButton: React.FC<Props> = ({ open_modal , feexVisisbleBtn }) => {
  const {state,dispatch} = useAppContext();
  return (
    <>
      <FeexButtonPayStyles />
      <button onClick={() => open_modal()} className="button" style={{display:feexVisisbleBtn ? "flex" : "none"}}>
        <span className="button_text">PAYER</span><span> {state.price} XOF</span>
        <img src={LOGO_IMG_LINK} alt="" />
      </button>
    </>
  );
};
