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
  const [country, setcountry] = React.useState("");

  function displayFlagInfoContainer() {
    if (displyedFlagInfo === false) {
      setdisplyedFlagInfo(true);
    } else {
      setdisplyedFlagInfo(false);
    }
  }

  React.useEffect(() => {
    function send_pay_form_info() {
      if (Number.isNaN(parseInt(numero_tel))) {
        seterrorvisible(true);
        seterrortext("Entrez votre numéro");
        setnum_exist_false();
      } else {
        seterrorvisible(false);
        seterrortext("");

        setnum_exist_true();
        dispatch({
          type: "CHANGE/NUMERO",
          payload: {
            num_client: numero_tel,
            country: flagChange,
          },
        });
      }
    }
    send_pay_form_info();
  }, [send_pay_form]);

  function changeFlagFunc() {
    switch (flagChange) {
      case 1:
        return {
          flagLink: FLAG_BENIN_IMG_LINK,
          placeholder: "+229 95 02 03 04",
        };
        break;
      case 2:
        return {
          flagLink: FLAG_TOGO_IMG_LINK,
          placeholder: "+228 05 34 03 12",
        };
        break;
      case 3:
        return { flagLink: FLAG_CI_IMG_LINK, placeholder: "+225 01 20 45 02" };
        break;
      case 4:
        return {
          flagLink: FLAG_RWANDA_IMG_LINK,
          placeholder: "+250 04 02 23 04",
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
      <div className="margin">
        <label style={{ marginBottom: "1.2rem" }} htmlFor="input_num">
          Numéro de téléphone
        </label>

        <div className="num_operator_card">
          <div className="num_input_container">
            <div onClick={() => displayFlagInfoContainer()} className="flag">
              <img
                className="img_flag"
                src={changeFlagFunc().flagLink}
                alt="benin_flag"
              />
            </div>
            <input
              className="input_num"
              type="number"
              name="input_num"
              onChange={(e) => {
                setnumero_tel(e.target.value);
                function setWithDispath(e: any) {
               
                  if (Number.isNaN(parseInt(e.target.value))) {
                 
                    dispatch({
                      type: "CHANGE/NUMERO",
                      payload: {
                        num_client: numero_tel,
                        country: flagChange,
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
      </div>
    </>
  );
};
