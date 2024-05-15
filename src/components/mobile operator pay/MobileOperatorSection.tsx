import React from "react";
import { LINK_GLOBAL, MOOV_IMG_LINK } from "src/sdk constants/assets_link";
import { MTN_IMG_LINK } from "src/sdk constants/assets_link";
import { MobileOperatorSectionStyles } from "src/styled components/mobile operator pay styles/MobileOperatorStyles";
import { NumInput } from "./NumInput";
import { PayButton } from "../PayButtonMobile";
import { PayButtonStyles } from "src/styled components/PayButtonStyles";
import { useAppContext } from "src/sdk contexts/props_contexts";
import axios from "axios";
import { FeexPayCancel } from "../type pay/FeexPayCancel";
import { FeexPayChoiceCardBank } from "../type pay/FeexPayChoiceCardBank";
import { FeexPayChoiceLocalPay } from "../type pay/FeexPayChoiceLocalPay";
import { CardBankPay } from "../card bank pay/CardBankPay";
type Props = {
  onChoiceMobile: boolean;
  changeVisibleChargementFunc: any;
  changeVisibleChargementExitFunc: any;
  cancel_modal_func: any;
};

export const MobileOperatorSection: React.FC<Props> = ({
  onChoiceMobile,
  changeVisibleChargementFunc,
  changeVisibleChargementExitFunc,
  cancel_modal_func,
}) => {
  const [send_pay_info, setsend_pay_info] = React.useState(false);
  const [operator_mtn, setoperator_mtn] = React.useState("");
  const [operator_moov, setoperator_moov] = React.useState("");
  const [operator, setoperator] = React.useState("");
  const [operator_error, setoperator_error] = React.useState("");
  const [chargementPage, setchargementPage] = React.useState(false);
  const [sendRequest, setsendRequest] = React.useState(false);
  const [errorvisible, seterrorvisible] = React.useState(false);
  const [errortext, seterrortext] = React.useState("");
  const { state, dispatch } = useAppContext();
  const [num_client_exist, setnum_client_exist] = React.useState(false);
  const [choice_section, setchoice_section] = React.useState(true);
  const [cardBank_section, setcardBank_section] = React.useState(false);
  const [mobileMoney_section, setmobileMoney_section] = React.useState(false);
  const [modal_open, setmodal_open] = React.useState(false);
  const [modal_cancel, setmodal_cancel] = React.useState(true);
  const [operator_exist, setoperator_exist] = React.useState(false);
  const [currentContent, setCurrentContent] = React.useState("choice_section");
  const [isVisibleChargement, setisVisibleChargement] = React.useState(false);
  const [iFrame, setiFrame] = React.useState(false);
  const [urlPay, seturlPay] = React.useState("");
  const [userInitiatedSubmission, setUserInitiatedSubmission] = React.useState(false);
  const [init_mobile_money_container, setinit_mobile_money_container] = React.useState(true);


  function open_modal() {
    setCurrentContent("modal_section");
    setmodal_open(true);
    setmodal_cancel(false);
  }

  function back_button() {
      // console.log("zfregtyutyrgtdf");
      setCurrentContent("choice_section");
      setmodal_open(true);
    setmodal_cancel(false);
      setcardBank_section(false);
      setchoice_section(true);
      setmobileMoney_section(false);
  }

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

  function payMobile() {
    // send_pay_info(true)
    // console.log("state")

    if (send_pay_info === false) {
      setsend_pay_info(true);
    }
    if (send_pay_info === true) {
      setsend_pay_info(false);
    }

    if (state.operator_name === "") {
      seterrorvisible(true);
      setoperator_error("Choisissez un operateur mobile");
      // dispatch({
      //   type: "CHANGE/OPERATOR",
      //   payload: {
      //     operator_name: state.operator_name,
      //   },
      // });
    } else {
      seterrorvisible(false);
      setoperator_error("");
      setUserInitiatedSubmission(true);

      // STOP DISPATH WHEN MOBILE OPERATOR IS VALIDE
      // dispatch({
      //   type: "CHANGE/OPERATOR",
      //   payload: {
      //     operator_name: operator,
      //   },
      // });
      //=========================================
    }
  }

  function changeOperatorMoovValue() {
    setoperator_moov("MOOV");
    setoperator_mtn("");
    setoperator("MOOV");
    setoperator_exist(true);
  }

  function changeOperatorMtnValue() {
    setoperator_moov("");
    setoperator_mtn("MTN");
    setoperator("MTN");
    setoperator_exist(true);
  }

  function setnum_exist_false() {
    // setnum_client_exist(false);
  }
  function setnum_exist_true() {
    // setnum_client_exist(true);
  }

  const sendPayFunc = async () => {
      changeVisibleChargementFunc();
    await axios
        .post(`${LINK_GLOBAL}/transactions/requesttopay/integration`, {
          phoneNumber: `${state.num_client}`,
          phoneNumberRight: `${state.num_client_without_code}`,
          amount: `${state.price}`,
          reseau: `${state.operator_name}`,
          token: `${state.token}`,
          shop: `${state.id}`,
          first_name: `${state.full_name}`,
          email: `${state.email}`,
          reference: `${state.custom_id}`,
          otp: `${state.code_otp}`,
          callback_info: `${state.callback_info}`,
          description: `${state.description}`,
        })
        .then((response) => {
          let i = 0;
          let reference = (state.operator_name == "MOOV CI" || state.operator_name == "FREE SN" || state.operator_name == 'ORANGE CI' || state.operator_name == 'WAVE CI' || state.operator_name == 'ORANGE BF' || state.operator_name == 'MOOV BF') ? response.data.order_id : response.data.reference;

          if (state.operator_name == "MOOV CI" || state.operator_name == "FREE SN" || state.operator_name == 'ORANGE CI' || state.operator_name == 'WAVE CI' || state.operator_name == 'ORANGE BF' || state.operator_name == 'MOOV BF') {
            // console.log('je suis dans ce if')
            changeVisibleChargementExitFunc();
            const urlPay = response.data.payment_url;
            let counter = 0;

            seturlPay(urlPay);
            setmobileMoney_section(false);
            setinit_mobile_money_container(false);
            setiFrame(true);
            // feexpay_container.innerHTML = `<iframe src="${urlPay}" height="600" width="100%" style="border:none;" name="demo"></iframe>`;
          }

          const intervale_valid_pay = setInterval(async () => {
            const response_getStatus = await axios.get(
                `${LINK_GLOBAL}/transactions/getrequesttopay/integration/${reference}`
            );
            const status_response = response_getStatus.data.status;

            if (status_response === "SUCCESSFUL" || status_response === "SUCCESS" || status_response === "Successful") {
              i = i + 1;
              if (i < 2) {
                clearInterval(intervale_valid_pay);

                // dispatch({
                //   type: "CHANGE/REQUESTTOPAYINFO",
                //   payload: {
                //     externalId: response_getStatus.data.externalId,
                //     amount: response_getStatus.data.amount,
                //     status: response_getStatus.data.status,
                //     partyId: response_getStatus.data.payer.partyId,
                //   },
                // });
                dispatch({
                  type: "CHANGE/REQUESTMESSAGE",
                  payload: {
                    paiement_request_verify_msg: "Paiement effectué",
                    stopchargement: true,
                  },
                });

                setTimeout(() => {
                  if (state.callback && typeof state.callback === "function") {
                    let data = {
                      reference: response.data.reference,
                      status: "SUCCESSFUL",
                      phoneNumber: state.num_client,
                      full_name: state.full_name,
                      reseau: state.operator_name,
                      callback_info: state.callback_info,
                      description: state.description,
                      transaction_id: response_getStatus.data.transaction_id,
                    }
                    state.callback(data);
                  } else if (state.callback_url !== undefined) {
                    const url = new URL(state.callback_url);
                    if (url.searchParams && url.searchParams.toString()) {
                      state.callback_url = `${state.callback_url}&id_transaction=${response.data.reference}&status=SUCCESSFUL`;
                    } else {
                      state.callback_url = `${state.callback_url}?id_transaction=${response.data.reference}&status=SUCCESSFUL`;
                    }
                    window.location.href = state.callback_url
                  }
                }, 2000);
              }
            }
            if (status_response === "FAILED") {
              clearInterval(intervale_valid_pay);

              dispatch({
                type: "CHANGE/REQUESTMESSAGE",
                payload: {
                  paiement_request_verify_msg: "Veuillez verifier votre numero ou votre solde.",
                  stopchargement: true,
                },
              });

              setTimeout(() => {
                // setTimeout(() => {
                  if (state.callback && typeof state.callback === "function") {
                    let data = {
                      reference: reference,
                      status: "FAILED",
                      phoneNumber: state.num_client,
                      full_name: state.full_name,
                      reseau: state.operator_name,
                      callback_info: state.callback_info,
                      description: state.description,
                      transaction_id: response_getStatus.data.transaction_id,
                    }
                    state.callback(data);
                  } else if (state.callback_url !== undefined) {
                    changeVisibleChargementExitFunc();
                    const url = new URL(state.callback_url);
                    if (url.searchParams && url.searchParams.toString()) {
                      state.callback_url = `${state.callback_url}&id_transaction=${reference}&status=FAILED`;
                    } else {
                      state.callback_url = `${state.callback_url}?id_transaction=${reference}&status=FAILED`;
                    }
                    window.location.href = state.callback_url
                  }
                // }, 2000);
              }, 5000);

              // changeVisibleChargementExitFunc()
            }
          }, 5000);

          setTimeout(async () => {
            const response_getStatus = await axios.get(
                `${LINK_GLOBAL}/transactions/getrequesttopay/integration/${reference}`
            );
            const status_response = response_getStatus.data.status;
            if (
                status_response === "FAILED" ||
                status_response === "INPROGRESS" ||
                status_response === "ACCEPTED" ||
                status_response === "INITIATED" ||
                status_response === "PRE_INITIATED" ||
                status_response === "PENDING" ||
                status_response === "IN PENDING STATE"
            ) {
              dispatch({
                type: "CHANGE/REQUESTMESSAGE",
                payload: {
                  paiement_request_verify_msg: "Vous n'avez pas accepter la transaction",
                  stopchargement: true,
                },
              });

              setTimeout(() => {
                // setTimeout(() => {
                if (state.callback && typeof state.callback === "function") {
                  let data = {
                    reference: reference,
                    status: "FAILED",
                    phoneNumber: state.num_client,
                    full_name: state.full_name,
                    reseau: state.operator_name,
                    callback_info: state.callback_info,
                    description: state.description,
                    transaction_id: response_getStatus.data.transaction_id,
                  }
                  state.callback(data);
                }
                else if (state.callback_url !== undefined) {
                  changeVisibleChargementExitFunc();
                  const url = new URL(state.callback_url);
                  if (url.searchParams && url.searchParams.toString()) {
                    state.callback_url = `${state.callback_url}&id_transaction=${reference}&status=FAILED`;
                  } else {
                    state.callback_url = `${state.callback_url}?id_transaction=${reference}&status=FAILED`;
                  }
                  window.location.href = state.callback_url
                }
                // }, 2000);
              }, 5000);
            }
            clearInterval(intervale_valid_pay);
          }, 180000);
        })
        .catch((error) => {
          if (error.response.data.message === "Token API invalid") {
            dispatch({
              type: "CHANGE/REQUESTMESSAGE",
              payload: {
                paiement_request_verify_msg:
                    "Veuillez contacter l'administrateur du site.",
                stopchargement: true,
              },
            });
          }
        });
  };

  React.useEffect(() => {
    function sendRequestVerify() {
      // console.log("state.operator_name")
      // console.log(state.operator_name)

      console.log( state.num_client.length > 8 &&
          state.operator_name.length > 0 &&
          // num_client_exist === true &&
          state.full_name.length > 0 &&
          state.email.length > 0 &&
          state.country_code > 0 &&
          userInitiatedSubmission)

      if (
          state.num_client.length > 4 &&
          state.operator_name.length > 0 &&
        // num_client_exist === true &&
        state.full_name.length > 0 &&
        state.email.length > 0 &&
          state.country_code > 0 &&
          userInitiatedSubmission
      ) {

          sendPayFunc();
      }
      else {
        // console.log("je suis dans le else")
      }
    }
    sendRequestVerify();
  }, [state.num_client, state.operator_name, state.full_name, state.email, state.country_code, userInitiatedSubmission]);

  return (
    <>
{currentContent === "modal_section" && (
      // <div className="choice_operator_card">
      //   {/* ...le reste du contenu de la section 'choice_section'... */}
      //   <button onClick={open_modal}>Ouvrir le modal</button>
      // </div>
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


{currentContent === "choice_section" && (
    init_mobile_money_container && (
        <>
          <MobileOperatorSectionStyles />
          {/*<div className="choice_operator_card">*/}
          {/*<div className="choice_operator_text">Opérateurs mobiles</div>*/}
          {/*<div className="choice_operator_img">*/}
          {/*  <div className="choice_mtn">*/}
          {/*    <input*/}
          {/*      type="radio"*/}
          {/*      name="operator_name"*/}
          {/*      id=""*/}
          {/*      onChange={() => changeOperatorMtnValue()}*/}
          {/*    />*/}
          {/*    <img onClick={() => changeOperatorMtnValue()} className="img_mtn" src={MTN_IMG_LINK} alt="mtn" />*/}
          {/*  </div>*/}

          {/*  <div className="choice_moov">*/}
          {/*    <input*/}
          {/*      type="radio"*/}
          {/*      name="operator_name"*/}
          {/*      id=""*/}
          {/*      onChange={() => changeOperatorMoovValue()}*/}
          {/*    />*/}
          {/*    <img onClick={() => changeOperatorMoovValue()} className="img_moov" src={MOOV_IMG_LINK} alt="moov" />*/}
          {/*  </div>*/}
          {/*</div>*/}
          {/*</div>*/}
          <div
              className="error_text_operator"
              style={{ display: errorvisible ? "block" : "none" }}
          >
            {errortext}
          </div>

          <NumInput
              send_pay_form={send_pay_info}
              setnum_exist_true={() => setnum_exist_true()}
              setnum_exist_false={() => setnum_exist_false()}
          />
          <PayButton
              pay_func={() => payMobile()}
              // back_func={() => open_modal()}
          />
        </>
    )

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
