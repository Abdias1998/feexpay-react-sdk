import React from "react";
import { FeexPayChoiceLocalPayStyles } from "src/styled components/FeexPayChoiceLocalPayStyles";
import { MTN_IMG_LINK } from "src/sdk constants/assets_link";
import { MOOV_IMG_LINK } from "src/sdk constants/assets_link";

type Props = {
  onclicked: boolean,
  choice_local_func:any
  
};

export const FeexPayChoiceLocalPay: React.FC<Props> = ({
  onclicked,
  choice_local_func
}) => {
  return (
    <FeexPayChoiceLocalPayStyles>
       
       <div className={"text_container"}>
        <input onClick={()=>choice_local_func()} className="input_choice" type="radio" name="isClicked" id="" />
        <div className="choice_text">Mobile Money</div>
      </div>
      <div className="image_choice">
        <img className="img_mtn" src={MTN_IMG_LINK} alt="" />
        <img className="img_moov" src={MOOV_IMG_LINK} alt="" />
      </div>
    </FeexPayChoiceLocalPayStyles>
  );
};
