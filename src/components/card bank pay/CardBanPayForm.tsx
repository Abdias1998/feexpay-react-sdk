import React from "react";
import { CardBankPayFormStyles } from "src/styled components/card bank pay styles/CardBankFormStyles";
import { USER_SVG } from "src/sdk constants/assets_link";
import { CARD_SVG } from "src/sdk constants/assets_link";
import { useAppContext } from "src/sdk contexts/props_contexts";

type Props = {
  onChoice: boolean;
};

export const CardBankPayForm: React.FC<Props> = ({ onChoice, send_signal }) => {
  const [name_card, setname_card] = React.useState("");
  const [last_name_card, setlast_name_card] = React.useState("");
  const [numero_card, setnumero_card] = React.useState("");
  const [country_card, setcountry_card] = React.useState("Benin");
  const [email_card, setemail_card] = React.useState("");
  const [title_card, settitle_card] = React.useState("");
  const [address_card, setaddress_card] = React.useState("");
  const [locality_card, setlocality_card] = React.useState("");

  const [name_error, setname_error] = React.useState("");
  const [email_error, setemail_error] = React.useState("");
  const [numero_error, setnumero_error] = React.useState("");
  const [title_card_error, settitle_card_error] = React.useState("");
  const [localAdress_error, setlocalAdress_error] = React.useState("");

  const { state, dispatch } = useAppContext();

  React.useEffect(() => {
    function send_pay_form_info() {
      if (email_card.trim().length === 0) {
        setemail_error("Entrez votre email");
        // console.log("Empty email");
      } else {
        setemail_error("");
        // console.log("Name change");

        dispatch({
          type: "CHANGE/NAME_CARD",
          payload: {
            email_card: email_card,
          },
        });
      }

      if (title_card.trim().length === 0) {
        settitle_card_error("Entrez votre title");
        // console.log("Empty title");
      } else {
        settitle_card_error("");
        // console.log("title change");

        dispatch({
          type: "CHANGE/NAME_CARD",
          payload: {
            title_card: title_card,
          },
        });
      }

      if (
        numero_card.trim().length === 0 ||
        Number.isNaN(parseInt(numero_card))
      ) {
        setnumero_error("Entrez votre numéro");
        // console.log("Empty Num");
      } else {
        setnumero_error("");
        // console.log("num change");

        dispatch({
          type: "CHANGE/NAME_CARD",
          payload: {
            numero_card: numero_card,
          },
        });
      }

      if (name_card.trim().length === 0 || last_name_card.trim().length === 0) {
        setname_error("Entrez votre nom et prénoms");
        //  console.log("Empty");
      } else {
        setname_error("");
        // console.log("Name change");

        dispatch({
          type: "CHANGE/NAME_CARD",
          payload: {
            name_card: name_card,
            last_name_card: last_name_card,
          },
        });
      }

      if (
        address_card.trim().length === 0 ||
        locality_card.trim().length === 0
      ) {
        setlocalAdress_error("Entrez votre adreese et votre localité");
        // console.log("Empty");
      } else {
        setlocalAdress_error("");
        //  console.log("Name change");

        dispatch({
          type: "CHANGE/NAME_CARD",
          payload: {
            address_card: address_card,
            locality_card: locality_card,
          },
        });
      }
    }
    send_pay_form_info();
  }, [send_signal]);

  return (
    <>
      <CardBankPayFormStyles />

      <div className="feexpaycardBankForm">
        <form className="form_pay">
          <div className="other_info_container">
            <div className="expiration_date">
              <label className="titulaire_lab" htmlFor="last_name">
                Nom
              </label>

              <input
                className="input_info input_customer feexpay_input_name"
                type="text"
                name="last_name"
                id="last_name"
                placeholder="Doe"
                onChange={(e) => {
                  setname_card(e.target.value);
                  function setWithDispath(e: any) {
                    if (e.target.value.length === 0) {
                      dispatch({
                        type: "CHANGE/NAME_CARD",
                        payload: {
                          name_card: "",
                        },
                      });
                    }
                  }
                  setWithDispath(e);
                }}
              />
            </div>

            <div className="cryptogramme">
              <label
                className="titulaire_lab titulaire_lab_prenom"
                htmlFor="first_name"
              >
                Prénoms
              </label>

              <input
                className="input_info input_customer input_customer_prenom feexpay_lastName_input"
                type="text"
                name="first_name"
                id="first_name"
                placeholder="John"
                onChange={(e) => {
                  setlast_name_card(e.target.value);
                  function setWithDispath(e: any) {
                    if (e.target.value.length === 0) {
                      dispatch({
                        type: "CHANGE/NAME_CARD",
                        payload: {
                          last_name_card: "",
                        },
                      });
                    }
                  }
                  setWithDispath(e);
                }}
              />
            </div>
          </div>

          <div
            className="feepay_nameLastname_error error_text_operator_input"
            style={{
              fontSize: "0.6rem",
              color: "crimson",
              marginTop: "0.1rem",
            }}
          >
            {name_error}
          </div>

          <div className="titulaire_info_container">
            <label className="titulaire_lab" htmlFor="email">
              Email
            </label>
            <div
              className="titulaire_input"
              style={{ backgroundColor: "white !important" }}
            >
              <input
                className="input_info feexpay_email_input"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e) => {
                  setemail_card(e.target.value);
                  function setWithDispath(e: any) {
                    if (e.target.value.length === 0) {
                      dispatch({
                        type: "CHANGE/NAME_CARD",
                        payload: {
                          email_card: "",
                        },
                      });
                    }
                  }
                  setWithDispath(e);
                }}
              />
            </div>
            <div
              className="feexpay_email_error error_text_operator_input"
              style={{
                fontSize: "0.6rem",
                color: "crimson",
                marginTop: "0.1rem",
              }}
            >
              {email_error}
            </div>
          </div>

          <div className="other_info_container">
            <div className="expiration_date_custom expiration_date">
              <label className="titulaire_lab" htmlFor="country">
                Pays
              </label>
              <div>
                <select
                  id="country"
                  name="country"
                  className="input_info feexpay_input_countryName"
                  style={{ width: "100%" }}
                  onChange={(e) => {
                    function setWithDispath(e: any) {
                      setcountry_card(e.target.value);
                      dispatch({
                        type: "CHANGE/NAME_CARD",
                        payload: {
                          country_card: e.target.value,
                        },
                      });
                    }
                    setWithDispath(e);
                  }}
                >
                  <option value="Benin">Benin</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Togo">Togo</option>
                </select>
              </div>
            </div>

            <div className="cryptogramme_custom cryptogramme">
              <label className="titulaire_lab" htmlFor="phone_number">
                Numéro de téléphone
              </label>
              <div
                className="titulaire_input"
                style={{ width: "100%", backgroundColor: "white !important" }}
              >
                <input
                  className="input_w input_info input_customer input_customer_prenom feexpay_numTel_input"
                  type="number"
                  name="phone"
                  id="phone_number"
                  placeholder="Numéro"
                  onChange={(e) => {
                    setnumero_card(e.target.value);
                    function setWithDispath(e: any) {
                      if (e.target.value.length === 0) {
                        dispatch({
                          type: "CHANGE/NAME_CARD",
                          payload: {
                            numero_card: "",
                          },
                        });
                      }
                    }
                    setWithDispath(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="feexpay_countryNumber_error error_text_operator_input"
            style={{
              fontSize: "0.6rem",
              color: "crimson",
              marginTop: "0.1rem",
            }}
          >
            {numero_error}
          </div>

          <div className="titulaire_info_container">
            <label className="titulaire_lab" htmlFor="title">
              Titre
            </label>
            <div
              className="titulaire_input"
              style={{ backgroundColor: "white !important" }}
            >
              <input
                className="input_info feexpay_title_input"
                type="text"
                name="title"
                id="title"
                placeholder="Titre"
                onChange={(e) => {
                  settitle_card(e.target.value);
                  function setWithDispath(e: any) {
                    if (e.target.value.length === 0) {
                      dispatch({
                        type: "CHANGE/NAME_CARD",
                        payload: {
                          title_card: "",
                        },
                      });
                    }
                  }
                  setWithDispath(e);
                }}
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
            {title_card_error}
          </div>

          <div className="other_info_container">
            <div className="expiration_date">
              <label className="titulaire_lab" htmlFor="last_name">
                Adresse
              </label>

              <input
                className="input_info input_customer feexpay_adresse_input"
                id="last_name"
                type="text"
                name="address1"
                placeholder="Adresse"
                onChange={(e) => {
                  setaddress_card(e.target.value);
                  function setWithDispath(e: any) {
                    if (e.target.value.length === 0) {
                      dispatch({
                        type: "CHANGE/NAME_CARD",
                        payload: {
                          address_card: "",
                        },
                      });
                    }
                  }
                  setWithDispath(e);
                }}
              />
            </div>

            <div className="cryptogramme">
              <label
                className="titulaire_lab titulaire_lab_prenom"
                htmlFor="first_name"
              >
                Localité
              </label>
              <div
                className="titulaire_input"
                style={{ backgroundColor: "white !important" }}
              >
                <input
                  className="input_info input_customer_prenom feexpay_locality_input"
                  type="text"
                  name="locality"
                  id="locality"
                  placeholder="Localité"
                  onChange={(e) => {
                    setlocality_card(e.target.value);
                    function setWithDispath(e: any) {
                      if (e.target.value.length === 0) {
                        dispatch({
                          type: "CHANGE/NAME_CARD",
                          payload: {
                            locality_card: "",
                          },
                        });
                      }
                    }
                    setWithDispath(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="feepay_localiteAdresse_error error_text_operator_input"
            style={{
              fontSize: "0.6rem",
              color: "crimson",
              marginTop: "0.1rem",
            }}
          >
            {localAdress_error}
          </div>
        </form>
      </div>

      {/* <div className="feexPay_payButtonStyles">
                            
                            <div className="button_container">
                                <button className="button_pay" onClick="window.feexpay_send_payement_card(window.feexpay_operator_name_card)">
                                <span className="button_text" style="font-size: 12.25px !important;">Payer 200 XOF</span>
                                </button>

                               
                            </div>
                 </div> */}
    </>
  );
};
