import React from "react";
import { FeexPayButton } from "./components/FeexPayButton";
import { SDKcontexts, useAppContext } from "./sdk contexts/props_contexts";
import { FeexPayModal } from "./components/modal/FeexPayModal";
import { SectioncontainerStyleWrapper } from "./styled components/SectioncontainerStyleWraper";
import axios from "axios";
import { LINK_GLOBAL } from "./sdk constants/assets_link";

type Props = {
  amount:number;
  token:string;
  id:string;
  callback:Function;
  callback_url: string;
};

const FeexPay: React.FC<Props> = ({ amount , token , id , callback, callback_url }) => {
  const [modal_open, setmodal_open] = React.useState(false);
  const [modal_cancel, setmodal_cancel] = React.useState(true);
  const [visibleFeexBtn, setvisibleFeexBtn] = React.useState(false);
  const [name_marchand, setname_marchand] = React.useState("");
  const [reference_marchand, setreference_marchand] = React.useState("");

  const montant_context = amount;

  
  function open_modal() {
  
    setmodal_open(true);
    setmodal_cancel(false);
  }
  function cancel_modal_func() {
   
    setmodal_open(false);
    setmodal_cancel(true);
  }

  React.useEffect(() => {
     async function verifyId() {
        await axios.get(`${LINK_GLOBAL}/shop/${id}/get_shop`).then((response)=>{
          const data = response.data;
          if (data) {
            setname_marchand(data.name);
            setreference_marchand(data.reference);
            setvisibleFeexBtn(true);
          }
         }).catch((error)=>{
           
            if (error.response.data.message === "Le format de l'id est") {
              setname_marchand("")
              setreference_marchand("")
              setvisibleFeexBtn(false)
            }
         })
        
         
     }
     verifyId()
  }, [])
  return (
    <>
      <SDKcontexts amount={montant_context} token={token} id={id} callback={callback} callback_url={callback_url}>
    
          <FeexPayModal
            isOpen={modal_open}
            cancel_modal={modal_cancel}
            cancel_modal_func={() =>cancel_modal_func()}
            name_marchand={name_marchand}
            reference_marchand={reference_marchand}
          />
   
        <FeexPayButton open_modal={() =>open_modal()} feexVisisbleBtn={visibleFeexBtn}/>
      </SDKcontexts>
    </>
  );
};


export default FeexPay;
