import React from "react";
import { PayButtonStyles } from "src/styled components/PayButtonStyles";
import { ICON_LOCK } from "src/sdk constants/assets_link";
import { useAppContext } from "src/sdk contexts/props_contexts";

type Props = {
  pay_func: any;
  back_func: any;
};
export const PayButton: React.FC<Props> = ({ pay_func, back_func }) => {
  const { state, dispatch } = useAppContext();

  return (
    <>
      <PayButtonStyles />
      <div className="button_container">
          {/* <button onClick={()=> back_func()} className="button_pay button_back">
          <span className="button_text">Retour</span>
        </button>*/}
        <button onClick={() => pay_func()} className="button_pay">
          <span className="button_text">Payer {state.price} XOF</span>
        </button>
      </div>
    </>
  );
};
