import React from "react";
import { FeexPayCancelStyles } from "src/styled components/FeexPayCancelStyles";

type Props = {
  onclicked: boolean;
  onClickCancel: any
  
};

export const FeexPayCancel: React.FC<Props> = ({
  onclicked,
  onClickCancel
}) => {
  return (
    <FeexPayCancelStyles>
      <input onClick={()=>onClickCancel()} className="input_choice" type="radio" name="isClicked" id="" />
      <div onClick={()=>onClickCancel()} className="choice_text">Annuler le paiement</div>
    </FeexPayCancelStyles>
  );
};
