import { createGlobalStyle } from "styled-components";

export const CardBankPayFormStyles = createGlobalStyle`
    
   .form_pay{
      width:100%;
    
   }


   .titulaire_info_container{
        display:flex;
        flex-direction:column;
        margin-top:1rem;

   }

   .titulaire_input{
       display:flex;
       flex-direction:row;
       width:100%;
       background-color:#cfcfcf;
       border-radius:0.5rem;
   }
   .titulaire_lab{
      margin-bottom:5px;
      margin-top:0px;
   }


   .input_container{
       width:90%;
   }
   .input_info{
      background-color:transparent;
      border:none;
      outline:none;
      padding:15px;
      width:100%;

   }
   .input_info:focus{
     background-color:whitesmoke;
   }
   .img_container{
      display:flex;
    
   }
   .img_user{
        width:25px;
        margin-right:1rem;
   }
  

   .other_info_container{
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:row;
      width:100%;
      margin-top:1rem;
      margin-bottom:1rem;
   }

   .expiration_date,.cryptogramme{
        width:50%;
        display:flex;
        flex-direction:column;

   }
   .expiration_date{
     padding-right:10px;
   }
   .cryptogramme{
    display:flex;
    justify-content:flex-end;
    padding-left:10px;
    
  }

   .date_expiration_input,.cryptogramme_input{
        width:83%;
        padding:15px;
        background-color:#cfcfcf;
        border:none;
        outline:none;
        border-radius:0.5rem;
   }
   .cryptogramme_input:focus{
    background-color:whitesmoke;
   }
   .date_expiration_input:focus{
    background-color:whitesmoke;
   }

   @media screen and (max-width:924px) {
        .expiration_date,.cryptogramme{
            width:100%;
            padding:0px;

         }
         .other_info_container{
            flex-direction:column;

            
         }
         .date_expiration_input,.cryptogramme_input{
            width:91%;
         }

   
    }
   
    
`;
