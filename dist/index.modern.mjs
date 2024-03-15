import{jsx as e,jsxs as t,Fragment as a}from"react/jsx-runtime";import i from"react";import n,{createGlobalStyle as r}from"styled-components";import o from"axios";let c;const l=r(c||(c=(e=>e)`
      .button {
        background-color:#112C56;
        color:white;
        text-align:center;
        padding:10px;
        border:none;
        width:100%;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        border-radius:0.5rem;
        cursor:pointer;

      }
      .button_text{
         font-size:1rem;
         font-weight:800;
      }
      img{
        width:100px;
      }
      .choice_text {
        font-size:0.8rem;
      }
`));function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},s.apply(this,arguments)}function d(e,t){switch(t.type){case"CHANGE/OPERATOR":return s({},e,t.payload);case"CHANGE/NUMERO":let a="";switch(t.payload.country){case 1:return Number.isNaN(parseInt(t.payload.num_client))?s({},e,t.payload):(a=`229${t.payload.num_client}`,s({},e,{num_client_without_code:t.payload.num_client,num_client:a}));case 2:return a=`228${t.payload.num_client}`,s({},e,{num_client:a});case 3:return a=`225${t.payload.num_client}`,s({},e,{num_client:a});case 4:return a=`250${t.payload.num_client}`,s({},e,{num_client:a});default:return s({},e,t.payload)}case"CHANGE/NUMWITHOUTCODE":return s({},e,{num_client_without_code:t.payload.num_client_without_code});case"CHANGE/REQUESTMESSAGE":return s({},e,{paiement_request_verify_msg:t.payload.paiement_request_verify_msg,stopchargement:t.payload.stopchargement});case"CHANGE/REQUESTTOPAYINFO":return s({},e,{requesttopayinfo:s({},t.payload)});case"CHANGE/EMAIL":case"CHANGE/FULLNAME":case"CHANGE/NAME_CARD":return s({},e,t.payload);default:throw new Error("Message")}}let m={};const p=({children:t,amount:a,apiURL:n,token:r,id:o,callback:c,callback_url:l})=>{m={price:a,apiURL:n,token:r,id:o,operator_name:"",num_client:"",num_client_without_code:"",paiement_request_verify_msg:"En attente de paiement.",stopchargement:!1,requesttopayinfo:{},name_marchand:"",reference_marchand:"",email:"",full_name:"",callback:c,callback_url:l,numero_card:"",name_card:"",email_card:"",title_card:"",address_card:"",locality_card:"",last_name_card:""};const[s,p]=i.useReducer(d,m),_=i.useMemo(()=>({state:s,dispatch:p}),[s,p]);return e(u.Provider,{value:_,children:t})},u=i.createContext({state:m,dispatch:()=>{}}),_=()=>i.useContext(u),h=({open_modal:i,feexVisisbleBtn:n})=>{const{state:r}=_();return t(a,{children:[e(l,{}),t("button",{onClick:()=>i(),className:"button",style:{display:n?"flex":"none"},children:[e("span",{className:"button_text",children:"PAYER "}),"  ",t("span",{children:[r.price," XOF"]})]})]})};let g;const f=r(g||(g=(e=>e)`
.feexpay_close_btn{
    background-color: crimson;
    border-radius: 5rem;
    transform: translateX(100%) translateY(-100%);
    cursor: pointer;
    height:30px;
    width: 30px;
    background-image: url("https://api.feexpay.me/api/static/cross-23.png");
    background-size: cover;
    background-position: center;
    float: right;
   
  
  }

  .width-100 {
    width: 100% !important;
}
    .modal_container{
        position:fixed;
        display:flex;
        justify-content:center;
        align-items:center;
        background-color:rgba(0, 0, 0, 0.7);
        height:100vh;
        width:100vw;  
        z-index:100000000 !important;
        margin:0px;
        padding:0px;
        flex-direction:column;
        top:0px;
        left:0px;
        
    }

    .modal{
       display:grid;
       flex-direction:column;
       width:40%;
       height:92%;
       background-color: #f8f9fa !important;
       color:black;

      
    }

    .modal .modal_header{
        display:flex;
        flex-direction:row;
        width:100%;
        margin-bottom:2rem;
        box-shadow: 2px 3px 9px -4px rgba(0, 0, 0, 0.397);
        border-bottom-left-radius:1rem;
        border-bottom-right-radius:1rem;
        height: fit-content;
    }

    .modal .header_text{
        font-size:0.7rem;
        color:black;
        width:60%;
        text-align:right;
        padding-right: 1rem;
        padding-top: 0.5rem;
        height:fit-content;

        
        
        
    }
    .modal .logo_container{
        width:40%;
        padding-top: 0.5rem;
        padding-left:1rem;
        height:fit-content;
    }
    .modal .logo_container .logo {
        width:100px;

    }
    .pay_with{
        font-size:1rem;
        font-weight:800;
        color:darkblue;
    }

    .footer_modal_container{
        width:100%;
        height:6%;
        background-color:white;
        align-self:flex-end;
        display:flex;
        align-items:flex-end;
        justify-self:flex-end;
      
    }

    .footer_modal{
        width: 100%;
        height: 30px;
        background-color: #112C56;
        background-image: url("https://api.feexpay.me/api/static/motif_footer.svg");
        background-size: cover;
        background-position: center;
        

    }

    .secure_by_feexpay{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
      }
      .img_lock{
        width:15px;
        margin-right:0.2rem;

      }
    
      .lock_line{
        background-color:#112C56;
        width:6px;
        height:1px;
      }
      .lock_text{
        font-size:0.7rem;
      }

      @media (min-width: 320px) {
        body {
            color: #626262;
        }
    }


    
    
    @media (min-width: 992px) {
        
    }

    @media (min-width: 1200px) {
        
    }

    @media (min-width: 650px) and (max-width: 850px) {
        
        .modal{
            width:75%;
            height:100%;
         }

         .feexpaycardBankForm .titulaire_input {
            width: auto !important;
        }
    }

    @media (max-width: 768px) {
        
    }

    @media (min-width: 950px) and (max-width:1025px) {
        .modal{
            width:65%;
            height:100%;
        }
    }

    @media (min-width: 651px) and (max-width:900px) {
        .modal{
            width:80%;
            height:100%;
        }
        .footer_modal_container{
            width:100%;
        }
    }

    @media (max-width:700px) {
        .modal_container{
            /*height:100vh;*/
            /*width:200vw;*/ 
        }

        .modal{
            width:100%;
            height:100%;
        }

        .choice_operator_img{
            flex-direction:column;
        }
        
    }

    
`));let y;const x=n.div(y||(y=(e=>e)`
     transition:all 1s;
     border:solid 1.5px gray;
     display:flex;
     flex-direction:row;
     align-items:center;
     width:100%;
     margin-top:1rem;
     transform-origin: center;
     cursor:pointer;
     
     :hover{
       transition:all 1s;
       border:solid 1.5px orangered;
     }

     
     .image_choice{
        display:flex;
        flex-direction:row;
        justify-content:end;
        align-items:center;
        position:relatif;
        right:1rem;
        justify-self:flex-end;
        padding-top:8px;
        padding-bottom:8px;
        width:50%;
       
     }
     .image_choice img{
      width:40px;
     }
     .input_choice,.choice_text{
        margin-left:0.5rem;
     }
     .img_moov{
        margin-right:2rem;
     }
     .img_mtn{
       margin-right:1rem
     }
     .text_container{
        width:70%;
        display:flex;
        align-items:center;
        flex-direction:row;

     }

 
   

`)),b="https://api.feexpay.me/api/static/logo_mastercard.svg",N="https://api.feexpay.me/api/static/logo_visa.svg",v="https://api.feexpay.me/api/static/logo_mtn.svg",k="https://api.feexpay.me/api/static/logo_moov.svg",w="https://api.feexpay.me/api/static/Flag_of_Togo.svg.png",E="https://api.feexpay.me/api/static/Flag_of_Benin.svg.png",C="https://api.feexpay.me/api/static/Flag_of_Rwanda.svg.png",S="https://api.feexpay.me/api/static/CI.png",A="https://api.feexpay.me/api",F=({choice_local_func:a})=>t(x,{children:[t("div",{className:"text_container",onClick:()=>a(),children:[e("input",{onClick:()=>a(),className:"input_choice",type:"radio",name:"isClicked",id:""}),e("div",{onClick:()=>a(),className:"choice_text",children:"Mobile Money"})]}),t("div",{className:"image_choice",onClick:()=>a(),children:[e("img",{className:"img_mtn",src:v,alt:""}),e("img",{className:"img_moov",src:k,alt:""})]})]}),M=({choice_cardBank_func:a})=>t(x,{children:[t("div",{className:"text_container",onClick:()=>a(),children:[e("input",{onClick:()=>a(),className:"input_choice",type:"radio",name:"isClicked",id:""}),e("div",{onClick:()=>a(),className:"choice_text",children:"Cartes bancaires"})]}),t("div",{className:"image_choice",onClick:()=>a(),children:[e("img",{className:"img_mtn",src:N,alt:""}),e("img",{className:"img_moov",src:b,alt:""})]})]});let B;const G=r(B||(B=(e=>e)`
    .choice_operator_card{
        width:100%;
        border-bottom:solid 1.9px black;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
    }

    .choice_operator_text{
         width:auto;
         display:flex;
         align-items:center;
         font-weight:700;
         font-size:0.8rem;
         
    }
    .choice_operator_img{
        display:flex;
        width:40%;
        justify-content:flex-end;
        align-items:center;
        flex-direction:row;

    }
    .choice_operator_img input{
        margin-right:0.3rem;
    }
    .choice_operator_img img{
        width:45px;
        padding-top:8px;
        padding-bottom:8px;
        
    }


    .choice_mtn{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:row;
  
  
     }
     .choice_moov{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:row;
     }
    


    .img_mtn{
        margin-right:1rem;
    }

.error_text_operator{
    font-size:0.6rem;
    color:crimson;
    margin-top:0.5rem;
}
    @media screen and (max-width:960px){
      
        .img_mtn{
            margin-right:0px;
        }
        .choice_operator_img{
           display:flex; 
           align-items:center;
           justify-content:flex-end;  
           /*flex-direction:column;*/
        }
        .choice_mtn{
           display:flex;
     
        }
        .choice_moov{
            display:flex;
        }
        .img_mtn{
           margin-right:0px;
        }
     
     
     }
`));let R;const H=r(R||(R=(e=>e)` 
    .margin{
        margin-top:1.5rem;
        margin-bottom:1.5rem;
    }

    .feexpay_input_simple{
        border: 1px solid #ced4da;
        border-radius: 5px;
        outline:none;
        /*border-bottom: solid 1.5px #00000071;*/
        padding-bottom:10px;
        padding-top:10px;
        padding-left:10px;
        width: -webkit-fill-available;
        margin-bottom: 1.5rem;
        margin-top: 5px;
        background-color: transparent;
    }
    
    
    .num_operator_card{
        width:100%;
        display:flex;
        flex-direction:column;

    }
    .num_input_container{
        width:100%;
        display:flex;
        flex-direction:row;
        align-items:center;
        border: 1px solid #ced4da;
        border-radius: 5px;
        /*border-bottom:solid 2px black;*/
    }
    .flag{
        width:10%;
        text-align: center !important;
    }
    .input_num{
        border:none !important;
        outline:none !important;
        background-color: transparent;
        padding:10px !important;
        width: -webkit-fill-available;
    }
    .flag .img_flag{
        width:25px !important;
        text-align: center;
    }

    .num_flag_container{
        width:30%;
        padding:0px;
        background-color:white;
        box-shadow:1px 1px 20px 0.2px lightgrey;
        display:flex;
        flex-direction:column;
        transform:translateY(40%);
        position:absolute;
        
    }
    .flag_info_container{
        transition:all 1s;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:3px;
        padding-left:0px;
        cursor:pointer;

    }
    .flag_info_container:hover{
        transition:all 1s;
        background-color:whitesmoke;

    }

    .flag_container img{
        width:25px;
    }
    .flag_conyainer{
        width:10%;
        padding-top:5px;
    }
    .flag_name{
        width:90%;
        text-align:right;
        padding-right:1rem;
        font-size:0.8rem;
    }
    .error_text_operator_input{
        font-size:0.6rem;
        color:crimson;
        margin-top:0.5rem;
    }
    @media screen and (max-width:700px) {
         .num_flag_container{
             width:85%;
        }

    }
`)),T=({send_pay_form:n,setnum_exist_false:r,setnum_exist_true:o})=>{const{dispatch:c}=_(),[l,s]=i.useState(!1),[d,m]=i.useState(1);i.useState(null);const[p,u]=i.useState(!1),[h,g]=i.useState("");i.useState("");const[f,y]=i.useState("");i.useState("");const[x,b]=i.useState(""),[N,v]=i.useState(""),[k,A]=i.useState(""),[F,M]=i.useState("");function B(){switch(d){case 1:return{flagLink:E,placeholder:"95020304"};case 2:return{flagLink:w,placeholder:"05340312"};case 3:return{flagLink:S,placeholder:"01204502"};case 4:return{flagLink:C,placeholder:"04022304"};default:return null}}return i.useEffect(()=>{0===x.length?A("Entrez votre email"):(A(""),c({type:"CHANGE/EMAIL",payload:{email:x}})),0===N.length?M("Entrez votre nom et prenom"):(M(""),c({type:"CHANGE/FULLNAME",payload:{full_name:N}})),Number.isNaN(parseInt(f))?(u(!0),g("Entrez votre numéro"),r()):(u(!1),g(""),o(),c({type:"CHANGE/NUMERO",payload:{num_client:f,country:d}}))},[n]),t(a,{children:[e(H,{}),t("div",{className:"margin",children:[e("label",{style:{marginBottom:"1.2rem"},children:"Nom et prénoms"}),e("input",{className:"feexpay_fullname_input feexpay_input_simple feexpay_input_fullname input_simple",type:"text",style:{marginBottom:"0px"},onChange:e=>{v(e.target.value),function(e){0===e.target.value.length&&c({type:"CHANGE/FULLNAME",payload:{full_name:""}})}(e)},placeholder:"John Don"}),e("div",{className:"feepay_fullname_error error_text_operator_input",style:{display:"block",marginBottom:"1.5rem"},children:F}),e("label",{style:{marginBottom:"1.2rem"},children:"Adresse mail"}),e("input",{className:"feexpay_email_input feexpay_input_simple feexpay_input_email input_simple",type:"email",style:{marginBottom:"0px"},placeholder:"example@gmail.com",onChange:e=>{b(e.target.value),function(e){0===e.target.value.length&&c({type:"CHANGE/EMAIL",payload:{email:""}})}(e)}}),e("div",{className:"feepay_email_error error_text_operator_input",style:{display:"block",marginBottom:"1.5rem"},children:k}),e("label",{style:{marginBottom:"1.2rem"},htmlFor:"input_num",children:"Numéro de téléphone"}),t("div",{className:"num_operator_card",children:[t("div",{className:"num_input_container",children:[e("div",{onClick:()=>{s(!1===l)},className:"flag",children:e("img",{className:"img_flag",src:B().flagLink,alt:"benin_flag"})}),e("input",{className:"input_num",type:"number",name:"input_num",onChange:e=>{y(e.target.value),function(e){Number.isNaN(parseInt(e.target.value))&&c({type:"CHANGE/NUMERO",payload:{num_client:f,country:d}})}(e)},placeholder:B().placeholder})]}),t("div",{className:"num_flag_container",style:{display:l?"flex":"none"},children:[t("div",{onClick:()=>{m(1),s(!1)},className:"flag_info_container",children:[e("div",{className:"flag_container",children:e("img",{src:E,alt:""})}),e("div",{className:"flag_name",children:"Bénin"})]}),t("div",{onClick:()=>{m(2),s(!1)},className:"flag_info_container",children:[e("div",{className:"flag_container",children:e("img",{src:w,alt:""})}),e("div",{className:"flag_name",children:"Togo"})]}),t("div",{onClick:()=>{m(3),s(!1)},className:"flag_info_container",children:[e("div",{className:"flag_container",children:e("img",{src:S,alt:""})}),e("div",{className:"flag_name",children:"Côte d'Ivoire"})]}),t("div",{onClick:()=>{m(4),s(!1)},className:"flag_info_container",children:[e("div",{className:"flag_container",children:e("img",{src:C,alt:""})}),e("div",{className:"flag_name",children:"Rwanda"})]})]})]}),e("div",{className:"error_text_operator_input",style:{display:p?"block":"none"},children:h})]})]})};let j;const P=r(j||(j=(e=>e)`
      .button_container{
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
      }
      .button_pay{
          background-color:#112C56;
          color:white;
          text-align:center;
          padding:10px;
          border:none;
          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:row;
          cursor:pointer;
          border-radius:10px;
          margin-top: 0.5rem;
      }
      .button_text{
        font-size:0.8rem;
        font-weight:500;
      }

      .button_back{
        background-color: #f8f9fa !important;
        color: #112C56 !important;
        margin-right: 2px !important;
        border: 1px solid #112C56 !important;
    }

      @media screen and (max-width:960px) {
        .button_pay{
          width:100%;
         }
    }
`)),$=({pay_func:i})=>{const{state:n}=_();return t(a,{children:[e(P,{}),e("div",{className:"button_container",children:e("button",{onClick:()=>i(),className:"button_pay",children:t("span",{className:"button_text",children:["Payer ",n.price," XOF"]})})})]})};let z;const I=n.div(z||(z=(e=>e)`
     transition:all 1s;
     border:solid 1.5px gray;
     display:flex;
     flex-direction:row;
     align-items:center;
     width:100%;
     margin-top:1rem;
     transform-origin: center;
     height:56px;

     :hover{
        transition:all 1s;
        border:solid 1.5px orangered;
     }
     .input_choice,.choice_text{
        margin-left:0.5rem;
     }
     

`)),D=({onClickCancel:a})=>t(I,{children:[e("input",{onClick:()=>a(),className:"input_choice",type:"radio",name:"isClicked",id:""}),e("div",{onClick:()=>a(),className:"choice_text",children:"Annuler le paiement"})]}),O=({pay_func:i})=>{const{state:n}=_();return t(a,{children:[e(P,{}),e("div",{className:"button_container",children:e("button",{onClick:()=>i(),className:"button_pay",children:t("span",{className:"button_text",children:["Payer ",n.price," XOF"]})})})]})};let U;const L=r(U||(U=(e=>e)`
    

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

   
    
`)),q=({send_signal:n})=>{const[r,o]=i.useState(""),[c,l]=i.useState(""),[s,d]=i.useState("");i.useState("Benin");const[m,p]=i.useState("");i.useState("");const[u,h]=i.useState("");i.useState("");const[g,f]=i.useState(""),[y,x]=i.useState(""),[b,N]=i.useState("");i.useState("");const[v,k]=i.useState(""),{dispatch:w}=_();return i.useEffect(()=>{0===m.trim().length?x("Entrez votre email"):(x(""),w({type:"CHANGE/NAME_CARD",payload:{email_card:m}})),0===s.trim().length||Number.isNaN(parseInt(s))?N("Entrez votre numéro"):(N(""),w({type:"CHANGE/NAME_CARD",payload:{numero_card:s}})),0===r.trim().length||0===c.trim().length?f("Entrez votre nom et prénoms"):(f(""),w({type:"CHANGE/NAME_CARD",payload:{name_card:r,last_name_card:c}})),0===u.trim().length?k("Entrez votre adresse"):(k(""),w({type:"CHANGE/NAME_CARD",payload:{address_card:u}}))},[n]),t(a,{children:[e(L,{}),e("div",{className:"feexpaycardBankForm",children:t("form",{className:"form_pay",children:[t("div",{className:"other_info_container",children:[t("div",{className:"expiration_date",children:[e("label",{className:"titulaire_lab",htmlFor:"last_name",children:"Nom"}),e("input",{className:"input_info input_customer feexpay_input_name",type:"text",name:"last_name",id:"last_name",placeholder:"Doe",onChange:e=>{o(e.target.value),function(e){0===e.target.value.length&&w({type:"CHANGE/NAME_CARD",payload:{name_card:""}})}(e)}})]}),t("div",{className:"expiration_date",children:[e("label",{className:"titulaire_lab titulaire_lab_prenom",htmlFor:"first_name",children:"Prénoms"}),e("div",{className:"titulaire_input",style:{backgroundColor:"white !important"},children:e("input",{className:"input_info input_customer input_customer_prenom feexpay_lastName_input width-100",type:"text",name:"first_name",id:"first_name",placeholder:"John",onChange:e=>{l(e.target.value),function(e){0===e.target.value.length&&w({type:"CHANGE/NAME_CARD",payload:{last_name_card:""}})}(e)}})})]})]}),e("div",{className:"feepay_nameLastname_error error_text_operator_input",style:{fontSize:"0.6rem",color:"crimson",marginTop:"0.1rem"},children:g}),t("div",{className:"titulaire_info_container",children:[e("label",{className:"titulaire_lab",htmlFor:"email",children:"Email"}),e("div",{className:"titulaire_input",style:{backgroundColor:"white !important"},children:e("input",{className:"input_info feexpay_email_input",type:"email",name:"email",id:"email",placeholder:"Email",onChange:e=>{p(e.target.value),function(e){0===e.target.value.length&&w({type:"CHANGE/NAME_CARD",payload:{email_card:""}})}(e)}})}),e("div",{className:"feexpay_email_error error_text_operator_input",style:{fontSize:"0.6rem",color:"crimson",marginTop:"0.1rem"},children:y})]}),t("div",{className:"titulaire_info_container",children:[e("label",{className:"titulaire_lab",htmlFor:"phone_number",children:"Numéro de téléphone"}),e("div",{className:"titulaire_input",style:{backgroundColor:"white !important"},children:e("input",{className:"input_info feexpay_numTel_input",type:"number",name:"phone",id:"phone_number",placeholder:"Numéro",onChange:e=>{d(e.target.value),function(e){0===e.target.value.length&&w({type:"CHANGE/NAME_CARD",payload:{numero_card:""}})}(e)}})}),e("div",{className:"feexpay_countryNumber_error error_text_operator_input",style:{fontSize:"0.6rem",color:"crimson",marginTop:"0.1rem"},children:b})]})]})})]})},V=({renderComponent:n})=>{const[r,c]=i.useState(!1),[l,s]=i.useState(""),[d,m]=i.useState(""),[p,u]=i.useState(!0),[h,g]=i.useState(!1),[f,y]=i.useState(""),[x,v]=i.useState(!1),k=["Agla","Aibatin","Ahogohoue","Gbedegbe","Missite","Houenoussou","Cadjehoun","Vodje","Fidjrosse","Fiyegnon","Cototier","Ahouanleko","Alobatin","Finagnon","Houeyiho","Saint Jean","Gbegamey","Gbediga","Yenawa","Missogbe","Kouhounou","Midedji","Vedoko","Gbenonkpo","Fifadji","Zogbo","Zogbohohoue","Minonkpo","Mededjro","Tonato","Gbedagba","Houehoun","Sedami","Sedjro","Todote","Yevedo","Dagbegji","Enagnon","Fignon","Sehogan","Ladji","Djidje","Vossa","Dantokpa","Jericho","GBedromede","Ahouansori","Tokpa","Missebo","Gbedokpo","Zongo","Joncquet","Wlacodji","Midombo","Fifatin","Adogleta","Hlakonme","Agbato","DOnatin","Senade","Irede"],w=k[Math.floor(Math.random()*k.length)],E=i.useRef(null),C=i.useRef(null),{state:S,dispatch:F}=_();function M(){s("VISA"),E.current&&(E.current.checked=!0)}function B(){s("MASTERCARD"),C.current&&(C.current.checked=!0)}return i.useEffect(()=>{!async function(){const e=function(){let e="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=t.length;for(let i=0;i<14;i++)e+=t.charAt(Math.floor(Math.random()*a));return e}();""!==S.reseau_card?""!==S.reseau_card&&""!==S.numero_card&&""!==S.name_card&&""!==S.email_card&&""!==S.last_name_card&&await o.post(`${A}/transactions/card/inittransact/integration`,{amount:`${S.price}`,reseau:`${l}`,token:`${S.token}`,shop:`${S.id}`,first_name:`${S.name_card}`,last_name:`${S.last_name_card}`,address1:`${w}`,district:"Cotonou",country:"Benin",phone:`${S.numero_card}`,email:`${S.email_card}`,reference:`${e}`}).then(t=>{F({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"En attente de paiement",stopchargement:!0}}),y(t.data.url),u(!1),g(!0);let a=0;const i=setInterval(async()=>{let t=await o.get(`${A}/transactions/getrequesttopay/integration/${e}`),n=t.data.status;"SUCCESSFUL"==n||"FAILED"==n?(a+=1,clearInterval(i),F({type:"CHANGE/REQUESTTOPAYINFO",payload:{transref:t.data.transref,status:t.data.status}}),F({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"Paiement effectué",stopchargement:!0}}),setTimeout(()=>{if(S.callback&&"function"==typeof S.callback)S.callback();else if(void 0!==S.callback_url){const t=new URL(S.callback_url);S.callback_url=t.searchParams&&t.searchParams.toString()?`${S.callback_url}&id_transaction=${e}`:`${S.callback_url}?id_transaction=${e}`,window.location.href=S.callback_url}},3e3)):(a++,30===a&&(clearInterval(i),clearInterval(i)))},3e4)}).catch(e=>{console.log(e)}):""==S.reseau_card?m("Choisissez votre operateur"):console.log("error")}()},[S.numero_card,S.reseau_card,S.name_card,S.email_card,S.last_name_card,n,r]),t(a,{children:[p&&t("div",{children:[e(G,{}),t("div",{className:"choice_operator_card",children:[e("div",{className:"choice_operator_text",children:"Cartes Bancaires"}),t("div",{className:"choice_operator_img",children:[e("input",{ref:E,type:"radio",name:"operator_choice",id:"input_visa",onChange:()=>M()}),e("img",{className:"img_mtn",src:N,alt:"mtn",style:{marginRight:"1rem"},id:"mastercard_picture",onClick:()=>M()}),e("input",{ref:C,type:"radio",name:"operator_choice",id:"input_mastercard",onChange:()=>B()}),e("img",{className:"img_moov",src:b,alt:"moov",id:"visa_picture",onClick:()=>B()})]})]}),e("div",{className:"feexpay_title_error error_text_operator_input",style:{fontSize:"0.6rem",color:"crimson",marginTop:"0.1rem"},children:d}),e(q,{send_signal:r}),x?t(a,{children:[e(P,{}),e("div",{className:"button_container",children:e("button",{className:"button_pay",children:e("span",{className:"button_text",children:"En cours ..."})})})]}):e(O,{pay_func:()=>function(){if(!1===r&&c(!0),!0===r&&c(!1),""===l||""==S.reseau)m("Choisissez votre operateur"),F({type:"CHANGE/NAME_CARD",payload:{reseau_card:""}});else{if(v(!0),x)return;v(!0),m(""),F({type:"CHANGE/NAME_CARD",payload:{reseau_card:l}})}}()})]}),h&&e("iframe",{src:f,height:"600",width:"100%",style:{border:"none"},name:"demo"})]})},Y=({changeVisibleChargementFunc:n,changeVisibleChargementExitFunc:r,cancel_modal_func:c})=>{const[l,s]=i.useState(!1),[d,m]=i.useState(""),[p,u]=i.useState(""),[h,g]=i.useState("");i.useState(!1),i.useState(!1);const[f,y]=i.useState(!1),[x,b]=i.useState(""),{state:N,dispatch:w}=_(),[E,C]=i.useState(!1),[S,B]=i.useState(!0),[R,H]=i.useState(!1),[j,P]=i.useState(!1),[z,I]=i.useState(!1),[O,U]=i.useState(!0),[L,q]=i.useState(!1),[Q,J]=i.useState("choice_section"),[X,Z]=i.useState(!1);function W(){u("MOOV"),m(""),g("MOOV"),q(!0)}function K(){u(""),m("MTN"),g("MTN"),q(!0)}return i.useEffect(()=>{!function(){const e=new String(N.num_client),t=new String(N.operator_name);e.length>4&&t.length>0&&!0===E&&N.full_name.length>0&&N.email.length>0&&(async()=>{n(),await o.post(`${A}/transactions/requesttopay/integration`,{phoneNumber:`${N.num_client}`,amount:`${N.price}`,reseau:`${N.operator_name}`,token:`${N.token}`,shop:`${N.id}`,first_name:`${N.full_name}`,email:`${N.email}`}).then(e=>{let t=0;const a=setInterval(async()=>{const i=await o.get(`${A}/transactions/getrequesttopay/integration/${e.data.reference}`),n=i.data.status;"SUCCESSFUL"===n&&(t+=1,t<2&&(clearInterval(a),w({type:"CHANGE/REQUESTTOPAYINFO",payload:{externalId:i.data.externalId,amount:i.data.amount,status:i.data.status,partyId:i.data.payer.partyId}}),w({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"Paiement effectué",stopchargement:!0}}),setTimeout(()=>{if(N.callback&&"function"==typeof N.callback)N.callback();else if(void 0!==N.callback_url){const t=new URL(N.callback_url);N.callback_url=t.searchParams&&t.searchParams.toString()?`${N.callback_url}&id_transaction=${e.data.reference}`:`${N.callback_url}?id_transaction=${e.data.reference}`,window.location.href=N.callback_url}},2e3))),"FAILED"===n&&(clearInterval(a),w({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"Veuillez verifier votre numero",stopchargement:!0}}),setTimeout(()=>{r()},2e3))},5e3);setTimeout(async()=>{const t=(await o.get(`${A}/transactions/getrequesttopay/integration/${e.data.reference}`)).data.status;"PENDING"!==t&&"IN PENDING STATE"!==t||(w({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"Vous n'avez pas accepter la requete",stopchargement:!0}}),setTimeout(()=>{r()},5e3)),clearInterval(a)},18e4)}).catch(e=>{"Token API invalid"===e.response.data.message&&w({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"Veuillez contacter l'administrateur du site.",stopchargement:!0}})})})()}()},[N.operator_name,N.num_client,l]),t(a,{children:["modal_section"===Q&&t(a,{children:[e("div",{className:"pay_with",children:"PAYER AVEC :"}),e(F,{choice_local_func:()=>(H(!1),B(!1),void P(!0))}),e(M,{choice_cardBank_func:()=>(H(!0),B(!1),void P(!1))}),e(D,{onClickCancel:()=>c()})]}),R&&e(V,{}),j&&e(Y,{changeVisibleChargementFunc:()=>{Z(!0)},changeVisibleChargementExitFunc:()=>Z(!1)}),"choice_section"===Q&&t(a,{children:[e(G,{}),t("div",{className:"choice_operator_card",children:[e("div",{className:"choice_operator_text",children:"Opérateurs mobiles"}),t("div",{className:"choice_operator_img",children:[t("div",{className:"choice_mtn",children:[e("input",{type:"radio",name:"operator_name",id:"",onChange:()=>K()}),e("img",{onClick:()=>K(),className:"img_mtn",src:v,alt:"mtn"})]}),t("div",{className:"choice_moov",children:[e("input",{type:"radio",name:"operator_name",id:"",onChange:()=>W()}),e("img",{onClick:()=>W(),className:"img_moov",src:k,alt:"moov"})]})]})]}),e("div",{className:"error_text_operator",style:{display:f?"block":"none"},children:x}),e(T,{send_pay_form:l,setnum_exist_true:()=>{C(!0)},setnum_exist_false:()=>{C(!1)}}),e($,{pay_func:()=>(!1===l&&s(!0),!0===l&&s(!1),void(""===h?(y(!0),b("Choisissez un operateur mobile"),w({type:"CHANGE/OPERATOR",payload:{operator_name:""}})):(y(!1),b(""),w({type:"CHANGE/OPERATOR",payload:{operator_name:h}})))),back_func:()=>(J("modal_section"),I(!0),void U(!1))})]})]})};let Q;const J=r(Q||(Q=(e=>e)`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

      .chargement_container{
        width:100vw;
        height:100vh;
        position:fixed;
        top:0px;
        left:0px;
        background-color:#404040a6;
        z-index:1000000000;
        
        flex-direction:column;
        align-items:center;
        justify-coNtent:center;
        
      }
      .message_container{
       
        padding:2rem;
        display:flex;
        flex-direction:column;
        align-items:center;
        width:25%;
        height:25%;
        justify-coNtent:center;
        background-color:#D45D00;
        box-shadow:2px 2px 10px 2px #5a5a5a1f;
        transform:translateY(10px);
      }
      img{
        width:10px;
      }

      .request_msg{
        font-size:0.9rem;
        color:white;
        font-weight:500;
        margin-top:1rem;
        font-family: 'Poppins', sans-serif;
        text-align:center;

      }

      .loader{
        width:50px;
        height:50px;
        border:10px solid white;
        border-top:10px solid #112C56;
        margin:0 auto;
        border-radius:50%;
        animation: spin 2s linear infinite;

      }
      @keyframes spin {
        0%{transform: rorate(0deg)}
        100%{transform:rotate(360deg)}
      }


      
    @media screen and (max-width:700px) {
      .message_container{
        width:60%;
        height:30%;
      }
    }


      
`)),X=({isVisible:n})=>{const{state:r,dispatch:o}=_(),[c,l]=i.useState(!1);return i.useEffect(()=>{!0===n&&(l(!0),o({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"En attente du paiement.",stopchargement:!1}})),!1===n&&l(!1)},[n]),t(a,{children:[e(J,{}),e("div",{className:"chargement_container",style:{display:c?"flex":"none"},children:t("div",{className:"message_container",style:{backgroundColor:"Paiement effectué"===r.paiement_request_verify_msg?"green":"#D45D00"},children:[e("div",{className:"loader",style:{display:r.stopchargement?"none":"block"}}),e("div",{className:"request_msg",children:r.paiement_request_verify_msg})]})})]})},Z=({isOpen:n,cancel_modal:r,cancel_modal_func:o,name_marchand:c,reference_marchand:l})=>{const[s,d]=i.useState(!0),[m,p]=i.useState(!1),[u,h]=i.useState(!1),[g,y]=i.useState(!1);return _(),t(a,{children:[e(f,{}),e(X,{isVisible:g}),e("div",{className:"modal_container",style:{position:"fixed !important",zIndex:"10000000000 !important",transition:"all 2s",transform:n&&!1===r?"scale(1)":"scale(0.6)",display:n&&!1===r?"flex":"none"},children:t("div",{className:"modal",children:[t("div",{className:"modal_header",children:[e("div",{className:"logo_container",children:e("img",{className:"logo",src:"https://api.feexpay.me/api/static/feexpay_logo-h.png",alt:"feexpay"})}),t("div",{className:"header_text",children:[e("div",{className:"feexpay_close_btn",onClick:()=>o()}),t("div",{className:"marchant_name",children:["MARCHAND : ",c]})," ",t("div",{className:"id_info",children:[" ID : ",l]})]})]}),t("div",{className:"padding_add",style:{paddingLeft:"2rem",paddingRight:"2rem",height:"94%",overflowY:"scroll"},children:[s&&t(a,{children:[e("div",{className:"pay_with",children:"PAYER AVEC :"}),e(F,{choice_local_func:()=>(p(!1),d(!1),void h(!0))}),e(M,{choice_cardBank_func:()=>(p(!0),d(!1),void h(!1))}),e(D,{onClickCancel:()=>o()})]}),m&&e(V,{}),u&&e(Y,{changeVisibleChargementFunc:()=>{y(!0)},changeVisibleChargementExitFunc:()=>y(!1)})]}),t("div",{className:"secure_by_feexpay",children:[e("div",{className:"lock_line"}),e("div",{className:"img_lock_container",children:e("img",{className:"img_lock",src:"https://api.feexpay.me/api/static/svg/icons8-lock.svg",alt:"icon lock"})}),e("div",{className:"lock_text",children:"Sécurisé par FeexPay"})]}),e("div",{className:"secure_by_feexpay",style:{flexDirection:"column"},children:t("div",{className:"lock_text",children:["En payant via ce plugin, vous acceptez les ",e("a",{href:"https://feexpay.me/termesconditions",target:"_blank",style:{color:"#D45D00",textDecoration:"none"},children:"conditions générales d'utilisation"})," de FeexPay."]})}),e("div",{className:"footer_modal_container",children:e("div",{className:"footer_modal"})})]})})]})},W=({amount:n,token:r,id:c,callback:l,callback_url:s})=>{const[d,m]=i.useState(!1),[u,_]=i.useState(!0),[g,f]=i.useState(!1),[y,x]=i.useState(""),[b,N]=i.useState(""),v=n;return i.useEffect(()=>{!async function(){await o.get(`${A}/shop/${c}/get_shop`).then(e=>{const t=e.data;t&&(x(t.name),N(t.reference),f(!0))}).catch(e=>{"Le format de l'id est"===e.response.data.message&&(x(""),N(""),f(!1))})}()},[]),e(a,{children:t(p,{amount:v,token:r,id:c,callback:l,callback_url:s,children:[e(Z,{isOpen:d,cancel_modal:u,cancel_modal_func:()=>(m(!1),void _(!0)),name_marchand:y,reference_marchand:b}),e(h,{open_modal:()=>(m(!0),void _(!1)),feexVisisbleBtn:g})]})})};export{W as default};
