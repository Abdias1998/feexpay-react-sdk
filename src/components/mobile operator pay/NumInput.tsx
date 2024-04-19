import React from "react";
import { FLAG_CI_IMG_LINK } from "src/sdk constants/assets_link";
import { FLAG_BENIN_IMG_LINK } from "src/sdk constants/assets_link";
import { FLAG_RWANDA_IMG_LINK } from "src/sdk constants/assets_link";
import { FLAG_TOGO_IMG_LINK } from "src/sdk constants/assets_link";
import { useAppContext } from "src/sdk contexts/props_contexts";
import { NumInputStyles } from "src/styled components/mobile operator pay styles/NumInputStyles";

type Props = {
  onChoiceInputNum: boolean;
  send_pay_form: boolean;
  setnum_exist_false: any;
  setnum_exist_true: any;
};

export const NumInput: React.FC<Props> = ({
  onChoiceInputNum,
  send_pay_form,
  setnum_exist_false,
  setnum_exist_true,
}) => {
  const { state, dispatch } = useAppContext();
  const [displyedFlagInfo, setdisplyedFlagInfo] = React.useState(false);
  const [flagChange, setflagChange] = React.useState(1);
  const [numInput, setnumInput] = React.useState(null);
  const [errorvisible, seterrorvisible] = React.useState(false);
  const [errortext, seterrortext] = React.useState("");

  const [operator_type, setoperator_type] = React.useState("");
  const [numero_tel, setnumero_tel] = React.useState("");
  const [code_otp, setcode_otp] = React.useState("");

  const [email_input, setemail_input] = React.useState("");
  const [full_name_input, setfull_name_input] = React.useState("");
  const [operator_error, setoperator_error] = React.useState("");

  const [email_input_error, setemail_input_error] = React.useState("");
  const [full_name_input_error, setfull_name_input_error] = React.useState("");
  const [network_select, setnetwork_select] = React.useState('');
  const [country_select, setcountry_select] = React.useState('229');
  const [network_select_error, setnetwork_select_error] = React.useState('');
  const [showOTPField, setShowOTPField] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState('');
  // const [selectedCountry, setSelectedCountry] = React.useState(state.defaultValueField?.code || '');
  const [selectedNetwork, setSelectedNetwork] = React.useState('');
  // const [selectedCountry, setSelectedCountry] =


  function displayFlagInfoContainer() {
    if (displyedFlagInfo === false) {
      setdisplyedFlagInfo(true);
    } else {
      setdisplyedFlagInfo(false);
    }
  }

  let countries = [
    { code: '229', name: 'Bénin', country_code: "BJ" },
    { code: '226', name: 'Burkina-Faso', country_code: "BF" },
    { code: '225', name: 'Côte d\'Ivoire', country_code: "CI" },
    { code: '221', name: 'Sénégal', country_code: "SN" },
    { code: '228', name: 'Togo', country_code: "TG" },
  ];

  const networksByCountry = {
    '229': [
      { value: 'MOOV', label: 'MOOV' },
      { value: 'MTN', label: 'MTN' }
    ],
    '226': [
      { value: 'MOOV BF', label: 'MOOV' },
      { value: 'ORANGE BF', label: 'ORANGE' }
    ],
    '225': [
      { value: 'MOOV CI', label: 'MOOV' },
      { value: 'MTN CI', label: 'MTN' },
      { value: 'WAVE CI', label: 'WAVE' },
      { value: 'ORANGE CI', label: 'ORANGE' }
    ],
    '228': [
      { value: 'MOOV TG', label: 'MOOV' },
      { value: 'TOGOCOM TG', label: 'TOGOCOM' }
    ],
    '221': [
      { value: 'ORANGE SN', label: 'ORANGE' },
      { value: 'FREE SN', label: 'FREE' }
    ],
  };

  const isFieldHidden = (fieldName) => {
    // Récupérer le tableau des champs à cacher depuis le state
    const hiddenFields = state.fieldsToHide || [];
    // Vérifie si le champ passé en paramètre est dans le tableau des champs à cacher
    return hiddenFields.includes(fieldName);
  };

  const handleCountryChange = (event) => {
    const selectedCountryCode = event.target.value;
    setSelectedCountry(selectedCountryCode);
    setSelectedNetwork('');

    // let country;

    dispatch({
      type: "CHANGE/COUNTRY_CODE",
      payload: {
        country_code: event.target.value,
      },
    });
    // console.log(state)
  };

  const handleNetworkChange = (event) => {
    setSelectedNetwork(event.target.value);
    dispatch({
      type: "CHANGE/OPERATOR_NAME",
      payload: {
        operator_name: event.target.value,
      },
    });
    // Vérifie si l'utilisateur a choisi Orange Sénégal
    if (event.target.value === "ORANGE SN") {
      // Affiche le champ OTP
      setShowOTPField(true);
    } else {
      // Cache le champ OTP pour les autres choix
      setShowOTPField(false);
    }
  };


  const handleSelectChange = (event) => {
    let country;

    if (event.target.value === 'MOOV' || event.target.value === 'MTN') {
      country = "229";
    }
    else if (event.target.value === "MOOV BF" || event.target.value === "ORANGE BF") {
      country = "226";
    }
    else if (event.target.value === "FREE SN" || event.target.value === "ORANGE SN") {
      country = "221";
    }
    else if (event.target.value === "MOOV TG" || event.target.value === "TOGOCOM TG") {
      country = "228";
    }
    else if (event.target.value === 'MOOV CI' || event.target.value === "ORANGE CI" || event.target.value === "WAVE CI" || event.target.value === "MTN CI") {
      country = "225";
    }
    else {
      country = "229";
    }

    // Vérifie si l'utilisateur a choisi Orange Sénégal
    if (event.target.value === "ORANGE SN") {
      // Affiche le champ OTP
      setShowOTPField(true);
    } else {
      // Cache le champ OTP pour les autres choix
      setShowOTPField(false);
    }

    setnetwork_select(event.target.value);
    setcountry_select(country);
    state.operator_name= event.target.value ;
    state.country_code = country;

    dispatch({
      type: "CHANGE/OPERATOR_NAME",
      payload: {
        operator_name: event.target.value,
      },
    });

    dispatch({
      type: "CHANGE/COUNTRY_CODE",
      payload: {
        country_code: country,
      },
    });
  };

  React.useEffect(() => {
    // Vérifier si state.defaultValueField est défini et contient la propriété code
    if (state.defaultValueField && state.defaultValueField.country_iban) {
      let countryDefault = state.defaultValueField.country_iban;
      let country;
      if (countryDefault === 'BJ') {
        country = 229;
      }
      else if (countryDefault === 'BF') {
        country = 226;
      }
      else if (countryDefault === 'CI') {
        country = 225;
      }
      else if (countryDefault === 'SN') {
        country = 221;
      }
      else if (countryDefault === 'TG') {
        country = 228;
      }
      else {
        country = 229;
      }

      dispatch({
        type: "CHANGE/COUNTRY_CODE",
        payload: {
          country_code: country,
        },
      });

      setSelectedCountry(country);
    }
  }, [state.defaultValueField]);

  React.useEffect(() => {
    function send_pay_form_info() {
      if (selectedNetwork.length === 0) {
        setnetwork_select_error("Sélectionnez le réseau");
      } else {
        setnetwork_select_error("");
        // dispatch({
        //   type: "CHANGE/EMAIL",
        //   payload: {
        //     email: email_input,
        //   },
        // });
      }

      if (isFieldHidden("email")) {
        setemail_input("johndoe@gmail.com")
      }
      if (isFieldHidden("full_name")) {
        setfull_name_input("John")
      }

      if (email_input.length === 0) {
        setemail_input_error("Entrez votre email");
      } else {
        setemail_input_error("");
        dispatch({
          type: "CHANGE/EMAIL",
          payload: {
            email: email_input,
          },
        });
      }
      if (full_name_input.length === 0) {
        setfull_name_input_error("Entrez votre nom et prenom");
      } else {
        setfull_name_input_error("");
        // console.log("full_name_input")
        // console.log(full_name_input)
        dispatch({
          type: "CHANGE/FULLNAME",
          payload: {
            full_name: full_name_input,
          },
        });
      }

      if (Number.isNaN(parseInt(numero_tel))) {
        seterrorvisible(true);
        seterrortext("Entrez votre numéro");
        setnum_exist_false();
      } else {
        seterrorvisible(false);
        seterrortext("");

        setnum_exist_true();
        // dispatch({
        //   type: "CHANGE/NUMERO",
        //   payload: {
        //     num_client: numero_tel,
        //     country: flagChange,
        //   },
        // });
      }
    }
    send_pay_form_info();
  }, [send_pay_form]);

  function changeFlagFunc() {
    switch (flagChange) {
      case 1:
        return {
          flagLink: FLAG_BENIN_IMG_LINK,
          placeholder: "95020304",
        };
        break;
      case 2:
        return {
          flagLink: FLAG_TOGO_IMG_LINK,
          placeholder: "05340312",
        };
        break;
      case 3:
        return { flagLink: FLAG_CI_IMG_LINK, placeholder: "01204502" };
        break;
      case 4:
        return {
          flagLink: FLAG_RWANDA_IMG_LINK,
          placeholder: "04022304",
        };
        break;

      default:
        return null;
        break;
    }
  }
  return (
    <>
      <NumInputStyles />

      <div>
        <label htmlFor="countrySelect" style={{ marginBottom: "1rem" }}>Sélectionnez un pays :</label>
        {state.defaultValueField?.country_iban ? (
            <div className="custom-select" style={{ marginTop: "1rem", width: "-webkit-fill-available", height: "auto", display: "flex", alignItems: "center", border: "1px solid #ccc", padding: "0.5rem", borderRadius: "4px" }}>
              <span style={{ marginLeft: "0.5rem" }}>
                {countries.find(country => country.country_code === state.defaultValueField.country_iban)?.name}
              </span>
            </div>

        ) : (
            <select
                className="custom-select"
                id="countrySelect"
                value={selectedCountry}
                style={{ marginTop: "1rem" }}
                onChange={handleCountryChange}
            >
              <option value="">Choisissez un pays</option>
              {countries.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name}
                  </option>
              ))}
            </select>
        )}
      </div>


      {selectedCountry && networksByCountry[selectedCountry] && (
          <div className="margin" >
            <label htmlFor="networkSelect"  style={{ marginTop: "1rem", marginBottom: "1.2rem" }}>Choisissez un réseau :</label>
            <select
                className="custom-select"
                id="networkSelect"
                value={selectedNetwork}
                style={{ marginTop: "1rem"}}
                onChange={handleNetworkChange}
            >
              <option value="">Sélectionnez le réseau mobile</option>
              {networksByCountry[selectedCountry].map(network => (
                  <option key={network.value} value={network.value}>
                    {network.label}
                  </option>
              ))}
            </select>
          </div>
      )}

      <div
          className="feepay_fullname_error error_text_operator_input"
          style={{ display: "block", marginBottom: "1.5rem" }}
      >
        {network_select_error}
      </div>

      <div className="margin" >
        {!isFieldHidden("full_name") && (
            <div>
              <div>
                <label >Nom et prénoms</label>
                <input
                    autoComplete="off"
                    className="feexpay_fullname_input feexpay_input_simple feexpay_input_fullname input_simple"
                    type="text"
                    style={{ marginBottom: "0px", marginTop: "0.25rem" }}
                    onChange={(e) => {
                      setfull_name_input(e.target.value);
                      function setWithDispath(e: any) {
                        if (e.target.value.length !== 0) {
                          dispatch({
                            type: "CHANGE/FULLNAME",
                            payload: {
                              full_name: e.target.value,
                            },
                          });
                        }
                      }
                      setWithDispath(e);
                    }}
                    placeholder="John Don"
                />
              </div>

              <div
                  className="feepay_fullname_error error_text_operator_input"
                  style={{ display: "block", marginBottom: "1.5rem" }}
              >
                {full_name_input_error}
              </div>
            </div>
        )}

        {!isFieldHidden("email") && (
            <div>
              <div>
                <label>Adresse mail</label>
                <input
                    autoComplete="off"
                    className="feexpay_email_input feexpay_input_simple feexpay_input_email input_simple"
                    type="email"
                    style={{ marginBottom: "0px", marginTop: "0.25rem" }}
                    placeholder="example@gmail.com"
                    onChange={(e) => {
                      setemail_input(e.target.value);
                      function setWithDispath(e: any) {
                        if (e.target.value.length !== 0) {
                          dispatch({
                            type: "CHANGE/EMAIL",
                            payload: {
                              email: e.target.value,
                            },
                          });
                        }
                      }
                      setWithDispath(e);
                    }}
                />
              </div>
              <div
                  className="feepay_email_error error_text_operator_input"
                  style={{ display: "block", marginBottom: "1.5rem" }}
              >
                {email_input_error}
              </div>
            </div>
        )}

        <label htmlFor="input_num">
          Numéro de téléphone
        </label>

        <div className="num_operator_card">
          <div className="num_input_container">
            {/*<div onClick={() => displayFlagInfoContainer()} className="flag">*/}
            {/*  <img*/}
            {/*    className="img_flag"*/}
            {/*    src={changeFlagFunc().flagLink}*/}
            {/*    alt="benin_flag"*/}
            {/*  />*/}
            {/*</div>*/}
            <input
                autoComplete="off"
              className="input_num"
                style={{ marginTop: "0.25rem"}}
              type="number"
              name="input_num"
                onChange={(e) => {
                setnumero_tel(e.target.value);
                function setWithDispath(e: any) {
                  if (!Number.isNaN(parseInt(e.target.value))) {
                    // dispatch({
                    //   type: "CHANGE/NUMERO",
                    //   payload: {
                    //     num_client: numero_tel,
                    //     country: flagChange,
                    //   },
                    // });

                    dispatch({
                      type: "CHANGE/NUMERO_CLIENT",
                      payload: {
                        num_client: e.target.value,
                        // country: flagChange,
                      },
                    });
                  }
                }
                setWithDispath(e);
              }}
              placeholder={changeFlagFunc().placeholder}
            />
          </div>

          <div
            className="num_flag_container"
            style={{ display: displyedFlagInfo ? "flex" : "none" }}
          >
            <div
              onClick={() => {
                setflagChange(1);
                setdisplyedFlagInfo(false);
              }}
              className="flag_info_container"
            >
              <div className="flag_container">
                <img src={FLAG_BENIN_IMG_LINK} alt="" />
              </div>
              <div className="flag_name">Bénin</div>
            </div>
            <div
              onClick={() => {
                setflagChange(2);
                setdisplyedFlagInfo(false);
              }}
              className="flag_info_container"
            >
              <div className="flag_container">
                <img src={FLAG_TOGO_IMG_LINK} alt="" />
              </div>
              <div className="flag_name">Togo</div>
            </div>
            <div
              onClick={() => {
                setflagChange(3);
                setdisplyedFlagInfo(false);
              }}
              className="flag_info_container"
            >
              <div className="flag_container">
                <img src={FLAG_CI_IMG_LINK} alt="" />
              </div>
              <div className="flag_name">Côte d'Ivoire</div>
            </div>
            <div
              onClick={() => {
                setflagChange(4);
                setdisplyedFlagInfo(false);
              }}
              className="flag_info_container"
            >
              <div className="flag_container">
                <img src={FLAG_RWANDA_IMG_LINK} alt="" />
              </div>
              <div className="flag_name">Rwanda</div>
            </div>
          </div>
        </div>

        <div
          className="error_text_operator_input"
          style={{ display: errorvisible ? "block" : "none" }}
        >
          {errortext}
        </div>

        {showOTPField && (
            <div className="num_operator_card">
              <label style={{ marginTop: "1.2rem", marginBottom: "1rem" }} htmlFor="input_num">
                Code OTP* (Obtenez ce code en tapant *144*391#) :
              </label>
              {/*<label htmlFor="otp_input"></label>*/}
              <div className="num_input_container">
                <input
                    type="number"
                    id="otp_input"
                    name="input_num"
                    className="input_num"
                    onChange={(e) => {
                      setcode_otp(e.target.value);
                      function setWithDispath(e: any) {
                        if (!Number.isNaN(parseInt(e.target.value))) {
                          dispatch({
                            type: "CHANGE/CODE_OTP",
                            payload: {
                              code_otp: e.target.value,
                            },
                          });
                        }
                      }
                      setWithDispath(e);
                    }}
                />
              </div>

            </div>
        )}
      </div>
    </>
  );
};
