import React from "react";
import { CardBankPayFormStyles } from "src/styled components/card bank pay styles/CardBankFormStyles";
import { USER_SVG } from "src/sdk constants/assets_link";
import { CARD_SVG } from "src/sdk constants/assets_link";

type Props = {
  onChoice: boolean;
};

export const CardBankPayForm: React.FC<Props> = ({ onChoice }) => {
  function pay() {
    console.log("Payer");
    
  }
  return (
    
    <>
       <CardBankPayFormStyles/>
       <form className="form_pay">
            
            <div className="titulaire_info_container">
                 <label className="titulaire_lab" htmlFor="titulaire">Titulaire</label>
                 <div className="titulaire_input">
                        <div className="input_container">
                             <input className="input_info" type="text" name="titulaire" id="" placeholder="John PETER"/>
                        </div>
                        <div className="img_container"><img className="img_user" src={USER_SVG} alt="" /></div>
                 </div>
                 
            </div>




            <div className="titulaire_info_container">
                 <label className="titulaire_lab" htmlFor="num_card">N° de Carte</label>
                 <div className="titulaire_input">
                        <div className="input_container">
                             <input className="input_info" type="text" name="num_card" id="" placeholder="*** *** *** ***"/>
                        </div>
                        <div className="img_container"><img className="img_user" src={CARD_SVG} alt="" /></div>
                 </div>
                 
            </div>







            <div className="other_info_container">
                 <div className="expiration_date">
                       <label className="titulaire_lab" htmlFor="date_expiration">Date d'expiration</label>
                       <div className="padding">
                            <input className="date_expiration_input" type="text" name="date_expiration" id="" placeholder="MM/AA"/>
                       </div>
                     
                 </div>


                 <div className="cryptogramme">
                      <label className="titulaire_lab" htmlFor="cryptogramme">Cryptogramme</label>
                      <div className="padding">
                            <input className="cryptogramme_input" type="text" name="cryptogramme" placeholder="***"/>
                      </div>
                      
                 </div>

            </div>






       </form> 
    </>
  );
};
