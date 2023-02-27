import React from "react";
import { LINK_GLOBAL, MOOV_IMG_LINK } from "src/sdk constants/assets_link";
import { MTN_IMG_LINK } from "src/sdk constants/assets_link";
import { MobileOperatorSectionStyles } from "src/styled components/mobile operator pay styles/MobileOperatorStyles";
import { NumInput } from "./NumInput";
import { PayButton } from "../PayButton";
import { useAppContext } from "src/sdk contexts/props_contexts";
import axios from "axios";
type Props = {
  onChoiceMobile: boolean,
  changeVisibleChargementFunc : any ,
  changeVisibleChargementExitFunc : any,
};

export const MobileOperatorSection: React.FC<Props> = ({ onChoiceMobile , changeVisibleChargementFunc , changeVisibleChargementExitFunc}) => {
  const [send_pay_info, setsend_pay_info] = React.useState(false);
  const [operator_mtn, setoperator_mtn] = React.useState("");
  const [operator_moov, setoperator_moov] = React.useState("");
  const [operator, setoperator] = React.useState("");
  const [chargementPage, setchargementPage] = React.useState(false)
 const [sendRequest, setsendRequest] = React.useState(false)
  const [errorvisible, seterrorvisible] = React.useState(false)
  const [errortext, seterrortext] = React.useState("")
  const { state, dispatch } = useAppContext();
  const [num_client_exist, setnum_client_exist] = React.useState(false)

  const [operator_exist, setoperator_exist] = React.useState(false)

  function payMobile() {
    // send_pay_info(true)

    if (send_pay_info === false) {
      setsend_pay_info(true);
    }
    if (send_pay_info === true) {
      setsend_pay_info(false);
    }


    if (operator === ""){
         seterrorvisible(true)
         seterrortext("Choisissez un operateur mobile")
         dispatch({
          type: "CHANGE/OPERATOR",
          payload:{
             operator_name:""
          }
    
        });
    }else{
      seterrorvisible(false)
      seterrortext("")



      // STOP DISPATH WHEN MOBILE OPERATOR IS VALIDE
      dispatch({
        type: "CHANGE/OPERATOR",
        payload:{
           operator_name:operator
        }
  
      });
      //=========================================


    }

 
    
  }

  function changeOperatorMoovValue() {
    setoperator_moov("MOOV");
    setoperator_mtn("");
    setoperator("MOOV");
    setoperator_exist(true)
  }

  function changeOperatorMtnValue() {
    setoperator_moov("");
    setoperator_mtn("MTN");
    setoperator("MTN");
    setoperator_exist(true)
  }

  

function setnum_exist_false() {
  setnum_client_exist(false)
}
function setnum_exist_true() {
  setnum_client_exist(true)
}





  // React.useEffect(() => {
  //   function sendRequestVerify() {
  //     if () {
  //       console.log("sendReaquest");
  //     }
      
  //  }
  // }, [state.operator_name,state.num_client,send_pay_info])



  React.useEffect(() => {
    function sendRequestVerify() {
      const num_client_string = new String(state.num_client)
      const operator_string = new String(state.operator_name)


      if ((num_client_string.length > 4) && (operator_string.length > 0) && (num_client_exist === true)){
        


        const sendPayFunc = async ()=>{


       
          changeVisibleChargementFunc()

           console.log(state);
           
          await axios.post(`${LINK_GLOBAL}/transactions/requesttopay/externe`,{
          phoneNumber:`${state.num_client}`,
          amount:`${state.price}`,
          reseau:`${state.operator_name}`,
          token:`${state.token}`,
          id:`${state.id}`
          }).then((response) => {
              console.log(response);
              let i = 0
              const intervale_valid_pay = setInterval(async () => {
                   
                   const response_getStatus = await axios.get(`${LINK_GLOBAL}/transactions/getrequesttopay/externe/${response.data.reference}`)
                   const status_response = response_getStatus.data.status
                   console.log(response_getStatus.data)
                    
                   if (status_response === "SUCCESSFUL"){
                      i=i+1
                      if (i<2) {
                        clearInterval(intervale_valid_pay)
                        console.log("Votre paiement à ete avec success")
  
                        
                      
                        dispatch({
                          type: "CHANGE/REQUESTTOPAYINFO",
                          payload:{
                            externalId:response_getStatus.data.externalId,
                            amount:response_getStatus.data.amount,
                            status:response_getStatus.data.status,
                            partyId:response_getStatus.data.payer.partyId,
                          }
                    
                        });
                        dispatch({
                          type: "CHANGE/REQUESTMESSAGE",
                          payload:{
                            paiement_request_verify_msg: "Paiement effectué",
                            stopchargement:true
                          }
                    
                        });
  
  
                        setTimeout(() => {
                           
                              state.callback()
                            
                        }, 2000);
                      }
                     
                      
                      

                      
                      
                   }
                   if (status_response === "FAILED"){
                      clearInterval(intervale_valid_pay)
                      console.log("Verifier votre numero")
                      dispatch({
                        type: "CHANGE/REQUESTMESSAGE",
                        payload:{
                          paiement_request_verify_msg: "Veuillez verifier votre numero",
                          stopchargement:true
                        }
                  
                      });

                      setTimeout(() => {
                        changeVisibleChargementExitFunc()
                      }, 2000);

                      // changeVisibleChargementExitFunc()
                     
                   }
          
              }, 5000);


              setTimeout(async () => {
                const response_getStatus = await axios.get(`${LINK_GLOBAL}/transactions/getrequesttopay/externe/${response.data.reference}`)
                const status_response = response_getStatus.data.status
                if (status_response === "PENDING"){
                  console.log("Vous n'avez pas accepter la requete")
                  dispatch({
                    type: "CHANGE/REQUESTMESSAGE",
                    payload:{
                      paiement_request_verify_msg: "Vous n'avez pas accepter la requete",
                      stopchargement:true
                    }
              
                  });

                  changeVisibleChargementExitFunc()
                  
                  
                }
                clearInterval(intervale_valid_pay)
                

              }, 25000);

              console.log("Send")






            }).catch((error) => {
              console.log("No Send")
              console.log(error);
              if (error.response.data.message === "Token API invalid") {
                dispatch({
                  type: "CHANGE/REQUESTMESSAGE",
                  payload:{
                    paiement_request_verify_msg: "Veuillez contacter l'administrateur du site.",
                    stopchargement:true
                  }
            
                });
              }
            });
           
              console.log("Function Send")
        
       
          }


          sendPayFunc()



      }else{
       
        console.log("Not sendReaquest");
      }
      
   }
   sendRequestVerify()




  }, [state.operator_name,state.num_client,send_pay_info])



  return (
    <>
      <MobileOperatorSectionStyles />
      <div className="choice_operator_card">
        <div className="choice_operator_text">Opérateur mobile</div>
        <div className="choice_operator_img">
          <div className="choice_mtn">
              <input
                type="radio"
                name="operator_name"
                id=""
                onChange={() => changeOperatorMtnValue()}
              />
              <img
                className="img_mtn"
                src={MTN_IMG_LINK}
                alt="mtn"
                
              />
          </div>

          <div className="choice_moov">
              <input
                type="radio"
                name="operator_name"
                id=""
                onChange={() => changeOperatorMoovValue()}
              />
              <img className="img_moov" src={MOOV_IMG_LINK} alt="moov" />
          </div>
          
         
        </div>
       
      </div>
      <div className="error_text_operator" style={{display:errorvisible ? "block" : "none"}}>
           {errortext}
      </div>


      <NumInput send_pay_form={send_pay_info} setnum_exist_true={()=>setnum_exist_true()} setnum_exist_false={()=>setnum_exist_false()}/>
      <PayButton pay_func={() => payMobile()} />
    </>
  );
};
