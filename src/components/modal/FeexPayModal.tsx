import React from "react";
import { FeexPayModalStylesGlobal } from "src/styled components/modal styles/modal_styled";
import { FeexPayChoiceLocalPay } from "../type pay/FeexPayChoiceLocalPay";
import { FeexPayChoiceCardBank } from "../type pay/FeexPayChoiceCardBank";
import { MobileOperatorSection } from "../mobile operator pay/MobileOperatorSection";
import { FeexPayCancel } from "../type pay/FeexPayCancel";
import { ICON_LOCK, LOGO_IMG_LINK } from "src/sdk constants/assets_link";
import { CardBankPay } from "../card bank pay/CardBankPay";
import { ChargementPage } from "../chargement page/ChargementPage";
import { useAppContext } from "src/sdk contexts/props_contexts";

type Props = {
  isOpen: boolean;
  cancel_modal: boolean;
  cancel_modal_func: any;
  name_marchand:string;
};

export const FeexPayModal: React.FC<Props> = ({
  isOpen,
  cancel_modal,
  cancel_modal_func,
  name_marchand,
}) => {
  const [choice_section, setchoice_section] = React.useState(true);
  const [cardBank_section, setcardBank_section] = React.useState(false);
  const [mobileMoney_section, setmobileMoney_section] = React.useState(false);
  const [isVisibleChargement, setisVisibleChargement] = React.useState(false);
  const {state,dispatch} = useAppContext()
  function choice_local_func() {
    setcardBank_section(false);
    setchoice_section(false);
    setmobileMoney_section(true);
  }
  function choice_cardBank_func() {
    setcardBank_section(true);
    setchoice_section(false);
    setmobileMoney_section(false);
  }

  return (
    <>
      <FeexPayModalStylesGlobal />
      <ChargementPage isVisible={isVisibleChargement} />
      <div
        className="modal_container"
        style={{
          position: "fixed !important",
          zIndex: "10000000000 !important",
          transition: "all 2s",
          transform:
            isOpen && cancel_modal === false ? "scale(1)" : "scale(0.6)",
          display: isOpen && cancel_modal === false ? "flex" : "none",
        }}
      >
        <div className="modal">
          <div
            className="padding_add"
            style={{ padding: "2rem", height: "94%" }}
          >
            <div className="modal_header">
              <div className="logo_container">
                <img className="logo" src={LOGO_IMG_LINK} alt="feexpay" />
              </div>
              <div className="header_text">
                 <div className="marchant_name">MARCHAND : {name_marchand}</div>  <div className="id_info"> ID : {state.id}</div>
              </div>
            </div>

            {choice_section && (
              <>
                <div className="pay_with">PAYER AVEC :</div>
                <FeexPayChoiceLocalPay
                  choice_local_func={() => choice_local_func()}
                />
                <FeexPayChoiceCardBank
                  choice_cardBank_func={() => choice_cardBank_func()}
                />
                <FeexPayCancel onClickCancel={() => cancel_modal_func()} />
              </>
            )}
            {cardBank_section && <CardBankPay />}
            {mobileMoney_section && (
              <MobileOperatorSection
                changeVisibleChargementFunc={() => {
                  setisVisibleChargement(true);
                
                }}
                changeVisibleChargementExitFunc={() =>
                  setisVisibleChargement(false)
                }
              />
            )}
          </div>


          <div className="secure_by_feexpay">
          <div className="lock_line"></div>
          <div className="img_lock_container">
            <img
              className="img_lock"
              src={ICON_LOCK}
              alt="icon lock"
            />
          </div>
          <div className="lock_text">Sécurisé par FeexPay</div>
        </div>


          <div className="footer_modal_container">
            <div className="footer_modal"></div>
          </div>


        </div>
      </div>
    </>
  );
};
