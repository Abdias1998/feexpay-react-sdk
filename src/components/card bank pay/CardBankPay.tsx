import React from "react";
import { PayButton } from "../PayButton";
import { VISACARD_IMG_LINK } from "src/sdk constants/assets_link";
import { MASTERCARD_IMG_LINK } from "src/sdk constants/assets_link";
import { MobileOperatorSectionStyles } from "src/styled components/mobile operator pay styles/MobileOperatorStyles";
import { CardBankPayForm } from "./CardBanPayForm";
import { useAppContext } from "src/sdk contexts/props_contexts";
import axios from "axios";
type Props = {
  onChoice: boolean;
};

export const CardBankPay: React.FC<Props> = ({
  onChoice,
  change_send_signal,
}) => {
  const [send_signal, setsend_signal] = React.useState(false);
  const [reseau_card, setreseau_card] = React.useState("");
  const [reseau_card_error, setreseau_card_error] = React.useState("");
  const [cardBankSectionInput, setcardBankSectionInput] = React.useState(true);
  const [iFrame, setiFrame] = React.useState(false);
  const [urlPay, seturlPay] = React.useState("");

  const { state, dispatch } = useAppContext();
  function pay() {
    if (send_signal === false) {
      setsend_signal(true);
    }
    if (send_signal === true) {
      setsend_signal(false);
    }

    console.log(reseau_card);

    if (reseau_card === "") {
      setreseau_card_error("Choisissez votre operateur");
      console.log("Reseau Empty");

      dispatch({
        type: "CHANGE/NAME_CARD",
        payload: {
          reseau_card: "",
        },
      });
    } else {
      setreseau_card_error("");
      console.log("Reseau Change");

      // STOP DISPATH WHEN MOBILE OPERATOR IS VALIDE
      dispatch({
        type: "CHANGE/NAME_CARD",
        payload: {
          reseau_card: reseau_card,
        },
      });
      //=========================================
    }
  }

  function changereseauVISAValue() {
    setreseau_card("VISA");
  }

  function changereseauMASTERCARDValue() {
    setreseau_card("MASTERCARD");
  }

  React.useEffect(() => {
    async function sendCardRequest() {
      if (
        state.numero_card !== "" &&
        state.name_card !== "" &&
        state.email_card !== "" &&
        state.title_card !== "" &&
        state.address_card !== "" &&
        state.locality_card !== "" &&
        state.last_name_card !== "" &&
        state.country_card !== ""
      ) {
        await axios
          .post(
            `http://192.168.0.122:4005/api/transactions/card/inittransact`,
            {
              amount: `${state.price}`,
              reseau: `${reseau_card}`,
              token: `${"fp_expK2auYVTcKGLkg6yq3FfozEg7TdOkczJSMMZtJoOBR55gwwrDv7kGrssa0tZEj"}`,
              shop: `${"63e3c477589840e611232472"}`,
              first_name: `${state.name_card}`,
              last_name: `${state.last_name_card}`,
              title: `${state.title_card}`,
              address1: `${state.address_card}`,
              locality: `${state.locality_card}`,
              country: `${state.country_card}`,
              phone: `${state.numero_card}`,
              email: `${state.email_card}`,
            }
          )
          .then((response) => {
            console.log(response);
            const urlPay_const = response.data.url;

            console.log(response);

            seturlPay(urlPay_const);
            setcardBankSectionInput(false);
            setiFrame(true);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    sendCardRequest();
  }, [
    state.numero_card,
    state.name_card,
    state.email_card,
    state.title_card,
    state.address_card,
    state.locality_card,
    state.last_name_card,
    state.country_card,
    send_signal,
  ]);
  return (
    <>
      {cardBankSectionInput && (
        <div>
          <MobileOperatorSectionStyles />
          <div className="choice_operator_card">
            <div className="choice_operator_text">Carte Bancaire</div>
            <div className="choice_operator_img">
              <input
                type="radio"
                name="operator_choice"
                id=""
                onChange={() => changereseauVISAValue()}
              />
              <img
                className="img_mtn"
                src={VISACARD_IMG_LINK}
                alt="mtn"
                style={{ marginRight: "1rem" }}
              />
              <input
                type="radio"
                name="operator_choice"
                id=""
                onChange={() => changereseauMASTERCARDValue()}
              />
              <img className="img_moov" src={MASTERCARD_IMG_LINK} alt="moov" />
            </div>
          </div>
          <div
            className="feexpay_title_error error_text_operator_input"
            style={{
              fontSize: "0.6rem",
              color: "crimson",
              marginTop: "0.1rem",
            }}
          >
            {reseau_card_error}
          </div>

          <CardBankPayForm send_signal={send_signal} />
          <PayButton pay_func={() => pay()} />
        </div>
      )}

      {iFrame && (
        <iframe
          src={urlPay}
          height="500"
          width="100%"
          style={{ border: "none" }}
          name="demo"
        ></iframe>
      )}
    </>
  );
};
