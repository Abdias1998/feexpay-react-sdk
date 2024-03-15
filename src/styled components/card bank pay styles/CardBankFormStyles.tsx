import { createGlobalStyle } from "styled-components";

export const CardBankPayFormStyles = createGlobalStyle`
    

.feexpaycardBankForm .form_pay{
   width:100%;
 
}


.feexpaycardBankForm .titulaire_info_container{
     display:flex;
     flex-direction:column;
     margin-top:0.3rem;

}

.feexpaycardBankForm .titulaire_input{
   display:flex;
   flex-direction:row;
   width:100%;
   /*background-color:#cfcfcf;*/
   border-radius:0px;
   justify-content: inherit;
}
.feexpaycardBankForm .titulaire_lab{
   margin-bottom:5px;
   margin-top:0px;
   font-size: 0.8rem;
}

.feexPayMobilePay .choice_operator_card{
   width:100%;
   border-bottom:solid 1.5px #00000071;
   display:flex;
   flex-direction:row;
   align-items:center;
   justify-content:center;
}

.color_card_type {
    border: 1px solid #112C56 !important;
    border-radius: 2px !important;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}

.feexPayMobilePay .choice_operator_text{
    width:60%;
    display:flex;
    align-items:center;
    font-weight:700;
    font-size:0.8rem;
}

.feexPayMobilePay .choice_operator_img{
   display:flex;
   width:40%;
   justify-content:flex-end;
   align-items:center;
   flex-direction:row;

}
.feexPayMobilePay .choice_operator_img input{
   margin-right:0.3rem;
}
.feexPayMobilePay .choice_operator_img img{
   width:45px;
   padding-top:8px;
   padding-bottom:8px;
   
}



.feexpaycardBankForm .input_container{
    width:90%;
}
.feexpaycardBankForm .input_info{
   background-color:#fffcfc;
    border:none;
    outline:none;
    padding:10px;
    width:100%;
    border: 1px solid #5a5a5a69;
    border-radius: 2px;

}
.feexpaycardBankForm .input_info::placeholder{
   font-size: 0.7rem;
}

.feexpaycardBankForm .input_customer{
   width: 85%;
}
.feexpaycardBankForm .input_customer_prenom{
   float: right;
}
.feexpaycardBankForm .input_info:focus{
  background-color:whitesmoke;
}
.feexpaycardBankForm .img_container{
   display:flex;
 
}
.feexpaycardBankForm .img_user{
     width:25px;
     margin-right:1rem;
}


.feexpaycardBankForm .other_info_container{
   display:flex;
   justify-content:center;
   align-items:center;
   flex-direction:row;
   width:100%;
   margin-top:0.3rem;
 
}

.feexpaycardBankForm .expiration_date,.cryptogramme{
     width:50%;
     display:flex;
     flex-direction:column;

}

.feexpaycardBankForm .cryptogramme{
 display:flex;
 justify-content:flex-end;
 
 
}
.feexpaycardBankForm .cryptogramme_custom{
   width:70% !important;
   align-items:flex-end !important;
 }
.feexpaycardBankForm .expiration_date_custom{
   width:30% !important;
}
.cryptogramme .titulaire_lab_prenom{
   padding-left:12%;
}

.feexpaycardBankForm .date_expiration_input,.feexpaycardBankForm .cryptogramme_input{
     width:83%;
     padding:15px;
     background-color:#cfcfcf;
     border:none;
     outline:none;
     border-radius:0.5rem;
}
.feexpaycardBankForm .cryptogramme_custom .input_w{
     width:87% !important;
 }


.feexpaycardBankForm .cryptogramme_input:focus{
 background-color:whitesmoke;
}
.feexpaycardBankForm .date_expiration_input:focus{
 background-color:whitesmoke;
}
.feexpay_modal_container .padding_add{
    padding-left: 2rem;
    padding-right: 2rem;
    height: 95%;
    overflow-y: scroll !important;
    
}
.feexpay_container_form{
   height: 100%;
   display: grid;
   flex-direction: column;
   justify-content: flex-end;
   align-items: center;
}

@media screen and (max-width:924px) {
     .feexpaycardBankForm .expiration_date,.feexpaycardBankForm .cryptogramme{
         width:100%;
         padding:0px;

      }
      .feexpaycardBankForm .titulaire_lab{
         
           margin-top:10px;
       
      }
   
      .cryptogramme .titulaire_lab_prenom{
         padding: 0%;
      }
      .feexpaycardBankForm .input_customer{
       width: auto;
     }
      .feexpaycardBankForm .cryptogramme_custom .input_w{
       width:100% !important;
   }
 
      .feexpaycardBankForm .other_info_container{
         flex-direction:column;

         
      }
      .feexpaycardBankForm .expiration_date_custom{
       width: 100% !important;
   }
      .feexpaycardBankForm .date_expiration_input,.feexpaycardBankForm .cryptogramme_input{
         width:91%;
      }

      .feexpaycardBankForm .cryptogramme_custom{
           width:100% !important;
           align-items: flex-start !important;
           
       }
       .feexpay_modal_container .padding_add{
         overflow-y: scroll !important;
           height:fit-content;
           
      }
   


 }

   
    
`;
