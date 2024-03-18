import React from "react";
import { PayButton } from "../PayButton";
import { VISACARD_IMG_LINK, LINK_GLOBAL } from "src/sdk constants/assets_link";
import { MASTERCARD_IMG_LINK } from "src/sdk constants/assets_link";
import { MobileOperatorSectionStyles } from "src/styled components/mobile operator pay styles/MobileOperatorStyles";
import { CardBankPayForm } from "./CardBanPayForm";
import { useAppContext } from "src/sdk contexts/props_contexts";
import axios from "axios";
import {PayButtonStyles} from "../../styled components/PayButtonStyles";
type Props = {
  onChoice: boolean;
  changeVisibleChargementFunc: any;
  changeVisibleChargementExitFunc: any;
};

export const CardBankPay: React.FC<Props> = ({
  onChoice,
  change_send_signal,
  changeVisibleChargementFunc,
  changeVisibleChargementExitFunc,
 renderComponent
}) => {
  const [send_signal, setsend_signal] = React.useState(false);
  const [reseau_card, setreseau_card] = React.useState("");
  const [reseau_card_error, setreseau_card_error] = React.useState("");
  const [cardBankSectionInput, setcardBankSectionInput] = React.useState(true);
  const [iFrame, setiFrame] = React.useState(false);
  const [urlPay, seturlPay] = React.useState("");
  const [buttonClicked, setButtonClicked] = React.useState(false);
  const districtArray = [
    "Agla",
    "Aibatin",
    "Ahogohoue",
    "Gbedegbe",
    "Missite",
    "Houenoussou",
    "Cadjehoun",
    "Vodje",
    "Fidjrosse",
    "Fiyegnon",
    "Cototier",
    "Ahouanleko",
    "Alobatin",
    "Finagnon",
    "Houeyiho",
    "Saint Jean",
    "Gbegamey",
    "Gbediga",
    "Yenawa",
    "Missogbe",
    "Kouhounou",
    "Midedji",
    "Vedoko",
    "Gbenonkpo",
    "Fifadji",
    "Zogbo",
    "Zogbohohoue",
    "Minonkpo",
    "Mededjro",
    "Tonato",
    "Gbedagba",
    "Houehoun",
    "Sedami",
    "Sedjro",
    "Todote",
    "Yevedo",
    "Dagbegji",
    "Enagnon",
    "Fignon",
    "Sehogan",
    "Ladji",
    "Djidje",
    "Vossa",
    "Dantokpa",
    "Jericho",
    "GBedromede",
    "Ahouansori",
    "Tokpa",
    "Missebo",
    "Gbedokpo",
    "Zongo",
    "Joncquet",
    "Wlacodji",
    "Midombo",
    "Fifatin",
    "Adogleta",
    "Hlakonme",
    "Agbato",
    "DOnatin",
    "Senade",
    "Irede",
  ];
  const randomDistrictIndex = Math.floor(Math.random() * districtArray.length);
  const randomDistrict = districtArray[randomDistrictIndex];
  const inputVisaRef = React.useRef(null);
  const inputMastercardRef = React.useRef(null);

  const { state, dispatch } = useAppContext();

  function pay() {
    if (send_signal === false) {
      setsend_signal(true);
    }
    if (send_signal === true) {
      setsend_signal(false);
    }

    // console.log(reseau_card);

    if (reseau_card === "" || state.reseau == "") {
      setreseau_card_error("Choisissez votre operateur");
      // console.log("Reseau Empty");

      dispatch({
        type: "CHANGE/NAME_CARD",
        payload: {
          reseau_card: "",
        },
      });
    }
    else {
      setButtonClicked(true);
      // console.log(reseau_card);
      if (buttonClicked) {
        return; // Do nothing if the button has already been clicked
      }
      setButtonClicked(true);
      setreseau_card_error("");
      //console.log("Reseau Change");

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
    if (inputVisaRef.current) {
      inputVisaRef.current.checked = true;
    }
  }

  function changereseauMASTERCARDValue() {
    setreseau_card("MASTERCARD");
    if (inputMastercardRef.current) {
      inputMastercardRef.current.checked = true;
    }
  }


  React.useEffect(() => {
    // console.log(state.callback_url)
    async function sendCardRequest() {
      const reference = randomString();
      // console.log(state)

      if (state.reseau_card !== "") {
        if (
            (state.reseau_card !== "") &&
          state.numero_card !== "" &&
          state.name_card !== "" &&
          state.email_card !== "" &&
          // state.title_card !== "" &&
          // state.address_card !== "" &&
          // state.locality_card !== "" &&
          state.last_name_card !== ""
          // state.country_card !== ""
        ) {

          // changeVisibleChargementFunc();

          await axios
            .post(
              `${LINK_GLOBAL}/transactions/card/inittransact/integration`,
              {
                amount: `${state.price}`,
                reseau: `${reseau_card}`,
                token: `${state.token}`,
                shop: `${state.id}`,
                first_name: `${state.name_card}`,
                last_name: `${state.last_name_card}`,
                // title: `${state.title_card}`,
                // address1: `${state.address_card}`,
                address1: `${randomDistrict}`,
                // locality: `${state.locality_card}`,
                district: `Cotonou`,
                // country: `${state.country_card}`,
                country: `Benin`,
                phone: `${state.numero_card}`,
                email: `${state.email_card}`,
                reference: `${reference}`,
                callback_info: `${state.callback_info}`,
                description: `${state.description}`,
              }
            )
            .then((response) => {
              // console.log(response);
              dispatch({
                type: "CHANGE/REQUESTMESSAGE",
                payload: {
                  paiement_request_verify_msg: "En attente de paiement",
                  stopchargement: true,
                },
              });
              const urlPay_const = response.data.url;

              // const feexpayContainer = document.querySelector('.feexpay_container');
              // const container = document.getElementById('padding_add');
              // console.log(container)

              // if (document.querySelector('.feexpay_modal_container .padding_add')) {
              //   document.querySelector('.feexpay_modal_container .padding_add').style.paddingLeft = '0';
              //   document.querySelector('.feexpay_modal_container .padding_add').style.paddingRight = '0';
              // }

              // console.log(response);

              seturlPay(urlPay_const);
              setcardBankSectionInput(false);
              setiFrame(true);
              // changeVisibleChargementExitFunc();
              let i = 0;
              const intervale_valid_pay = setInterval(async () => {
                let response_getStatus = await axios.get(
                  `${LINK_GLOBAL}/transactions/getrequesttopay/integration/${reference}`
                  // `${LINK_GLOBAL}/transactions/getrequesttopay/integration/${response.data.transref}`
                );
                let status_response = response_getStatus.data.status;
                // console.log(status_response)
                // console.log(response_getStatus.data)

                if (status_response == "SUCCESSFUL" || status_response == "FAILED") {
                  i = i + 1;
                  // console.log(status_response)
                  // console.log(i)
                  // if (i < 2) {
                    clearInterval(intervale_valid_pay);

                    dispatch({
                      type: "CHANGE/REQUESTTOPAYINFO",
                      payload: {
                        transref: response_getStatus.data.transref,
                        status: response_getStatus.data.status,
                      },
                    });
                    dispatch({
                      type: "CHANGE/REQUESTMESSAGE",
                      payload: {
                        paiement_request_verify_msg: "Paiement effectué",
                        stopchargement: true,
                      },
                    });

                    setTimeout(() => {
                      if (state.callback && typeof state.callback === "function") {
                        state.callback();
                      } else if (state.callback_url !== undefined) {
                        const url = new URL(state.callback_url);
                        if (url.searchParams && url.searchParams.toString()) {
                          state.callback_url = `${state.callback_url}&id_transaction=${reference}`;
                        } else {
                          state.callback_url = `${state.callback_url}?id_transaction=${reference}`;
                        }
                        window.location.href = state.callback_url
                      }
                    }, 3000);
                  // }
                }
                else {
                  i++;
                  // console.log(i)
                  if (i === 30) {
                      clearInterval(intervale_valid_pay);
                      // setTimeout(() => {
                      //   changeVisibleChargementExitFunc();
                      // }, 5000);
                      clearInterval(intervale_valid_pay);
                  }
                }
              }, 30000);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }
      else if (state.reseau_card == ""){
        // console.log("j,fndkghtsjfkvhnd")
        setreseau_card_error("Choisissez votre operateur");
      }
      else {
        console.log("error")
      }

    }
    sendCardRequest();
  }, [
    state.numero_card,
    state.reseau_card,
    state.name_card,
    state.email_card,
    // state.title_card,
    // state.address_card,
    // state.locality_card,
    state.last_name_card,
    // state.country_card,
    renderComponent,
    send_signal,
  ]);

  function randomString() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    for (let counter = 0; counter < 14; counter++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }

  return (
    <>
      {cardBankSectionInput && (
        <div>
          <MobileOperatorSectionStyles />

          <div className="choice_operator_card">
            <div className="choice_operator_text">Cartes Bancaires</div>
            <div className="choice_operator_img">
              <input
                ref={inputVisaRef}
                type="radio"
                name="operator_choice"
                id="input_visa"
                onChange={() => changereseauVISAValue()}
              />
              <img
                className="img_mtn"
                src={VISACARD_IMG_LINK}
                alt="mtn"
                style={{ marginRight: "1rem" }}
                id="mastercard_picture"
                onClick={() => changereseauVISAValue()}
              />
              <input
                ref={inputMastercardRef}
                type="radio"
                name="operator_choice"
                id="input_mastercard"
                onChange={() => changereseauMASTERCARDValue()}
              />
              <img
                  className="img_moov"
                   src={MASTERCARD_IMG_LINK}
                  alt="moov"
                  id="visa_picture"
                  onClick={() => changereseauMASTERCARDValue()}
              />
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

          {buttonClicked ? (
              <>
                <PayButtonStyles />
                <div className="button_container">
                  <button className="button_pay">
                    <span className="button_text">En cours ...</span>
                  </button>
                </div>
              </>

          ) : (
              <PayButton pay_func={() => pay()} />
          )}

        </div>
      )}

      {iFrame && (
        <iframe
          src={urlPay}
          height="600"
          width="100%"
          style={{ border: "none" }}
          name="demo"
        ></iframe>
      )}
    </>
  );
};
