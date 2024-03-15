import React from "react";
import { FeexPayChoiceLocalPayStyles } from "src/styled components/FeexPayChoiceLocalPayStyles";
import { VISACARD_IMG_LINK } from "src/sdk constants/assets_link";
import { MASTERCARD_IMG_LINK } from "src/sdk constants/assets_link";


type Props = {
  onclicked: boolean,
  choice_cardBank_func:any
  
};

export const FeexPayChoiceCardBank : React.FC<Props> = ({
  onclicked,
  choice_cardBank_func
}) => {
  return (
    <FeexPayChoiceLocalPayStyles>
       <div className={"text_container"} onClick={()=>choice_cardBank_func()}>
        <input onClick={()=>choice_cardBank_func()} className="input_choice" type="radio" name="isClicked" id="" />
        <div onClick={()=>choice_cardBank_func()} className="choice_text">Cartes bancaires</div>
      </div>
      <div className="image_choice" onClick={()=>choice_cardBank_func()}>
        <img className={"img_mtn"} src={VISACARD_IMG_LINK} alt="" />
        <img className={"img_moov"} src={MASTERCARD_IMG_LINK} alt="" />
      </div>
    </FeexPayChoiceLocalPayStyles>
  );
};
