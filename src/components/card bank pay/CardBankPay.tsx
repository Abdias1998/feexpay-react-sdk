import React from "react";
import { PayButton } from "../PayButton";
import { VISACARD_IMG_LINK } from "src/sdk constants/assets_link";
import { MASTERCARD_IMG_LINK } from "src/sdk constants/assets_link";
import { MobileOperatorSectionStyles } from "src/styled components/mobile operator pay styles/MobileOperatorStyles";
import { CardBankPayForm } from "./CardBanPayForm";
type Props = {
  onChoice: boolean;
};

export const CardBankPay: React.FC<Props> = ({ onChoice }) => {
  function pay() {
    console.log("Payer");
    
  }
  return (
    
    <>
       <MobileOperatorSectionStyles/>
      <div className="choice_operator_card">
        <div className="choice_operator_text">Carte Bancaire</div>
        <div className="choice_operator_img">
          <input type="radio" name="operator_choice" id="" />
          <img
            className="img_mtn"
            src={VISACARD_IMG_LINK}
            alt="mtn"
            style={{ marginRight: "1rem" }}
          />
          <input type="radio" name="operator_choice" id="" />
          <img className="img_moov" src={MASTERCARD_IMG_LINK} alt="moov" />
        </div>
      </div>
      
      <CardBankPayForm/>
      <PayButton pay_func={()=>pay()}/>
      
    </>
  );
};
