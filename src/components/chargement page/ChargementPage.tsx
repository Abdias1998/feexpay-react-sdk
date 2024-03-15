import React from "react";
import { ChargementPageStyles } from "src/styled components/ChargementPageStyles";
import { useAppContext } from "src/sdk contexts/props_contexts";
import { LOADER_GIF } from "src/sdk constants/assets_link";
type Props = {
  isVisible: boolean;
};
export const ChargementPage: React.FC<Props> = ({ isVisible }) => {
  const { state, dispatch } = useAppContext();
  const [visible, setvisible] = React.useState(false);

  React.useEffect(() => {
    function changeVisible() {
      if (isVisible === true) {
        setvisible(true);

        dispatch({
          type: "CHANGE/REQUESTMESSAGE",
          payload: {
            paiement_request_verify_msg: "En attente du paiement.",
            stopchargement: false,
          },
        });
      }
      if (isVisible === false) {
        setvisible(false);
      }
    }
    changeVisible();
  }, [isVisible]);
  return (
    <>
      <ChargementPageStyles />
      <div
        className="chargement_container"
        style={{ display: visible ? "flex" : "none" }}
      >
        <div
          className="message_container"
          style={{
            backgroundColor:
              state.paiement_request_verify_msg === "Paiement effectué"
                ? "green"
                : "#D45D00",
          }}
        >
          {/* <img src={LOADER_GIF} width="10" alt="" style={{display:state.stopchargement ? "none" : "block"}} />
           */}
          <div
            className="loader"
            style={{ display: state.stopchargement ? "none" : "block" }}
          ></div>
          <div className="request_msg">{state.paiement_request_verify_msg}</div>
        </div>
      </div>
    </>
  );
};
