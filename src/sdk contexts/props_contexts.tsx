import React from "react";
import { reducer } from "src/sdk reducer/sdk_reducer_func";

type Props = {
  children: any;
  montant: any;
  apiURL: string;
  token: string;
  id: string;
  name_marchand:string;
  reference_marchand:string;
  callback:Function;
  callback_url:string;
};

let props_init = {};

export const SDKcontexts: React.FC<Props> = ({
  children,
  amount,
  apiURL,
  token,
  id,
  callback,
  callback_url,
}) => {
  props_init = {
    price: amount,
    apiURL: apiURL,
    token: token,
    id: id,
    operator_name: "",
    num_client: "",
    num_client_without_code: "",
    paiement_request_verify_msg: "En attente de paiement.",
    stopchargement: false,
    requesttopayinfo:{},
    name_marchand:"",
    reference_marchand: "",
    email:"",
    full_name:"",
    callback:callback,
    callback_url:callback_url,
    numero_card:"",
    name_card:"",
    email_card:"",
    title_card:"",
    address_card:"",
    locality_card:"",
    last_name_card:"",
    
    
  };

  // const { state, dispatch } = useAppContext();
  const [state, dispatch] = React.useReducer(reducer, props_init);
  
  const contextValue = React.useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  return (
    <Propscontext.Provider value={contextValue}>
      {children}
    </Propscontext.Provider>
  );
};

const Propscontext = React.createContext({
  state: props_init,
  dispatch: () => {},
});
//console.log(props_init);

export const useAppContext = () => React.useContext(Propscontext);
