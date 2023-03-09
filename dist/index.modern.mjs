import{jsx as e,jsxs as t,Fragment as a}from"react/jsx-runtime";import i from"react";import n,{createGlobalStyle as r}from"styled-components";import o from"axios";let l;const c=r(l||(l=(e=>e)`
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
         margin-right:1rem;
      }
      img{
        width:100px;
      }
      .choice_text {
        font-size:0.8rem;
      }
`)),s="https://api.feexpay.me/api/static/logo_mastercard.svg",m="https://api.feexpay.me/api/static/logo_visa.svg",d="https://api.feexpay.me/api/static/logo_mtn.svg",p="https://api.feexpay.me/api/static/logo_moov.svg",_="https://api.feexpay.me/api/static/Flag_of_Togo.svg.png",u="https://api.feexpay.me/api/static/Flag_of_Benin.svg.png",h="https://api.feexpay.me/api/static/Flag_of_Rwanda.svg.png",g="https://api.feexpay.me/api/static/CI.png",f="https://api.feexpay.me/api";function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},y.apply(this,arguments)}function x(e,t){switch(t.type){case"CHANGE/OPERATOR":return y({},e,t.payload);case"CHANGE/NUMERO":let a="";switch(t.payload.country){case 1:return Number.isNaN(parseInt(t.payload.num_client))?y({},e,t.payload):(a=`229${t.payload.num_client}`,y({},e,{num_client_without_code:t.payload.num_client,num_client:a}));case 2:return a=`228${t.payload.num_client}`,y({},e,{num_client:a});case 3:return a=`225${t.payload.num_client}`,y({},e,{num_client:a});case 4:return a=`250${t.payload.num_client}`,y({},e,{num_client:a});default:return y({},e,t.payload)}case"CHANGE/NUMWITHOUTCODE":return y({},e,{num_client_without_code:t.payload.num_client_without_code});case"CHANGE/REQUESTMESSAGE":return y({},e,{paiement_request_verify_msg:t.payload.paiement_request_verify_msg,stopchargement:t.payload.stopchargement});case"CHANGE/REQUESTTOPAYINFO":return y({},e,{requesttopayinfo:y({},t.payload)});case"CHANGE/EMAIL":case"CHANGE/FULLNAME":case"CHANGE/NAME_CARD":return y({},e,t.payload);default:throw new Error("Message")}}let N={};const v=({children:t,amount:a,apiURL:n,token:r,id:o,callback:l})=>{N={price:a,apiURL:n,token:r,id:o,operator_name:"",num_client:"",num_client_without_code:"",paiement_request_verify_msg:"En attente du paiement.",stopchargement:!1,requesttopayinfo:{},name_marchand:"",email:"",full_name:"",callback:l,numero_card:"",name_card:"",email_card:"",title_card:"",address_card:"",locality_card:"",last_name_card:""};const[c,s]=i.useReducer(x,N),m=i.useMemo(()=>({state:c,dispatch:s}),[c,s]);return e(b.Provider,{value:m,children:t})},b=i.createContext({state:N,dispatch:()=>{}});console.log(N);const w=()=>i.useContext(b),E=({open_modal:i,feexVisisbleBtn:n})=>{const{state:r}=w();return t(a,{children:[e(c,{}),t("button",{onClick:()=>i(),className:"button",style:{display:n?"flex":"none"},children:[e("span",{className:"button_text",children:"PAYER"}),t("span",{children:[r.price," XOF"]}),e("img",{src:"https://api.feexpay.me/api/static/feexpay_logo.png",alt:""})]})]})};let k;const C=r(k||(k=(e=>e)`
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
       width:30%;
       height:92%;
       background-color:white;

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
        padding-bottom: 0.5rem;
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
        width:100%;
        height:50px;
        background-color:#112C56;
        background-image:url("https://api.feexpay.me/api/static/motif_footer.svg");
        background-size:cover;
        background-position:center;
        

    }

    .secure_by_feexpay{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        margin-bottom:2rem;
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

    @media screen and (max-width:700px) {
        .modal{
            width:100%;
            height:100%;
        }
        .footer_modal_container{
            width:100%;
            
            
        }
    }

    @media screen and (max-height:850px) and (max-width:700px) {
        .modal{
            overflow-y:scroll;
        }
        
    }

    
`));let A;const S=n.div(A||(A=(e=>e)`
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

 
   

`)),F=({choice_local_func:a})=>t(S,{children:[t("div",{className:"text_container",children:[e("input",{onClick:()=>a(),className:"input_choice",type:"radio",name:"isClicked",id:""}),e("div",{className:"choice_text",children:"Mobile Money"})]}),t("div",{className:"image_choice",children:[e("img",{className:"img_mtn",src:d,alt:""}),e("img",{className:"img_moov",src:p,alt:""})]})]}),B=({choice_cardBank_func:a})=>t(S,{children:[t("div",{className:"text_container",children:[e("input",{onClick:()=>a(),className:"input_choice",type:"radio",name:"isClicked",id:""}),e("div",{className:"choice_text",children:"Carte bancaire"})]}),t("div",{className:"image_choice",children:[e("img",{className:"img_mtn",src:m,alt:""}),e("img",{className:"img_moov",src:s,alt:""})]})]});let R;const G=r(R||(R=(e=>e)`
    .choice_operator_card{
        width:100%;
        border-bottom:solid 1.9px black;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        

    }

    .choice_operator_text{
         width:60%;
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
           flex-direction:column;
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
`));let M;const T=r(M||(M=(e=>e)` 
    .margin{
        margin-top:1.5rem;
        margin-bottom:1.5rem;
    }
    
    .feexpay_input_simple{
        border: none;
        outline:none;
        border-bottom: solid 1.5px #00000071;
        padding-bottom:10px;
        width: 100%;
        margin-bottom: 1.5rem;
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
        border-bottom:solid 2px black;
    }
    .flag{
        width:10%;
    }
    .input_num{
        border:none !important;
        outline:none !important;
        padding:10px !important;
    }
    .flag .img_flag{
        width:25px !important;
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
`)),z=({send_pay_form:n,setnum_exist_false:r,setnum_exist_true:o})=>{const{dispatch:l}=w(),[c,s]=i.useState(!1),[m,d]=i.useState(1);i.useState(null);const[p,f]=i.useState(!1),[y,x]=i.useState("");i.useState("");const[N,v]=i.useState("");i.useState("");const[b,E]=i.useState(""),[k,C]=i.useState(""),[A,S]=i.useState(""),[F,B]=i.useState("");function R(){switch(m){case 1:return{flagLink:u,placeholder:"95 02 03 04"};case 2:return{flagLink:_,placeholder:"05 34 03 12"};case 3:return{flagLink:g,placeholder:"01 20 45 02"};case 4:return{flagLink:h,placeholder:"04 02 23 04"};default:return null}}return i.useEffect(()=>{0===b.length?S("Entrez votre email"):(S(""),l({type:"CHANGE/EMAIL",payload:{email:b}})),0===k.length?B("Entrez votre nom et prenom"):(B(""),l({type:"CHANGE/FULLNAME",payload:{full_name:k}})),Number.isNaN(parseInt(N))?(f(!0),x("Entrez votre numéro"),r()):(f(!1),x(""),o(),l({type:"CHANGE/NUMERO",payload:{num_client:N,country:m}}))},[n]),t(a,{children:[e(T,{}),t("div",{className:"margin",children:[e("label",{style:{marginBottom:"1.2rem"},children:"Nom et prénoms"}),e("input",{className:"feexpay_fullname_input feexpay_input_simple feexpay_input_fullname input_simple",type:"text",style:{marginBottom:"0px"},onChange:e=>{C(e.target.value),function(e){0===e.target.value.length&&l({type:"CHANGE/FULLNAME",payload:{full_name:""}})}(e)},placeholder:"John Don"}),e("div",{className:"feepay_fullname_error error_text_operator_input",style:{display:"block",marginBottom:"1.5rem"},children:F}),e("label",{style:{marginBottom:"1.2rem"},children:"Adresse mail"}),e("input",{className:"feexpay_email_input feexpay_input_simple feexpay_input_email input_simple",type:"email",style:{marginBottom:"0px"},placeholder:"example@gmail.com",onChange:e=>{E(e.target.value),function(e){0===e.target.value.length&&l({type:"CHANGE/EMAIL",payload:{email:""}})}(e)}}),e("div",{className:"feepay_email_error error_text_operator_input",style:{display:"block",marginBottom:"1.5rem"},children:A}),e("label",{style:{marginBottom:"1.2rem"},htmlFor:"input_num",children:"Numéro de téléphone"}),t("div",{className:"num_operator_card",children:[t("div",{className:"num_input_container",children:[e("div",{onClick:()=>{s(!1===c)},className:"flag",children:e("img",{className:"img_flag",src:R().flagLink,alt:"benin_flag"})}),e("input",{className:"input_num",type:"number",name:"input_num",onChange:e=>{v(e.target.value),function(e){Number.isNaN(parseInt(e.target.value))&&l({type:"CHANGE/NUMERO",payload:{num_client:N,country:m}})}(e)},placeholder:R().placeholder})]}),t("div",{className:"num_flag_container",style:{display:c?"flex":"none"},children:[t("div",{onClick:()=>{d(1),s(!1)},className:"flag_info_container",children:[e("div",{className:"flag_container",children:e("img",{src:u,alt:""})}),e("div",{className:"flag_name",children:"Bénin"})]}),t("div",{onClick:()=>{d(2),s(!1)},className:"flag_info_container",children:[e("div",{className:"flag_container",children:e("img",{src:_,alt:""})}),e("div",{className:"flag_name",children:"Togo"})]}),t("div",{onClick:()=>{d(3),s(!1)},className:"flag_info_container",children:[e("div",{className:"flag_container",children:e("img",{src:g,alt:""})}),e("div",{className:"flag_name",children:"Côte d'Ivoire"})]}),t("div",{onClick:()=>{d(4),s(!1)},className:"flag_info_container",children:[e("div",{className:"flag_container",children:e("img",{src:h,alt:""})}),e("div",{className:"flag_name",children:"Rwanda"})]})]})]}),e("div",{className:"error_text_operator_input",style:{display:p?"block":"none"},children:y})]})]})};let H;const D=r(H||(H=(e=>e)`
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
          width:45%;
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




    
      @media screen and (max-width:960px) {
      
        .button_pay{
          width:100%;
         }

   
    }
      
`)),O=({pay_func:i})=>{const{state:n}=w();return t(a,{children:[e(D,{}),e("div",{className:"button_container",children:e("button",{onClick:()=>i(),className:"button_pay",children:t("span",{className:"button_text",children:["Payer ",n.price," XOF"]})})})]})},I=({changeVisibleChargementFunc:n,changeVisibleChargementExitFunc:r})=>{const[l,c]=i.useState(!1),[s,m]=i.useState(""),[_,u]=i.useState(""),[h,g]=i.useState("");i.useState(!1),i.useState(!1);const[y,x]=i.useState(!1),[N,v]=i.useState(""),{state:b,dispatch:E}=w(),[k,C]=i.useState(!1),[A,S]=i.useState(!1);return i.useEffect(()=>{!function(){const e=new String(b.num_client),t=new String(b.operator_name);e.length>4&&t.length>0&&!0===k&&b.full_name.length>0&&b.email.length>0&&(async()=>{n(),await o.post(`${f}/transactions/requesttopay/integration`,{phoneNumber:`${b.num_client}`,amount:`${b.price}`,reseau:`${b.operator_name}`,token:`${b.token}`,shop:`${b.id}`,first_name:`${b.full_name}`,email:`${b.email}`}).then(e=>{let t=0;const a=setInterval(async()=>{const i=await o.get(`${f}/transactions/getrequesttopay/integration/${e.data.reference}`),n=i.data.status;"SUCCESSFUL"===n&&(t+=1,t<2&&(clearInterval(a),E({type:"CHANGE/REQUESTTOPAYINFO",payload:{externalId:i.data.externalId,amount:i.data.amount,status:i.data.status,partyId:i.data.payer.partyId}}),E({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"Paiement effectué",stopchargement:!0}}),setTimeout(()=>{b.callback()},2e3))),"FAILED"===n&&(clearInterval(a),E({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"Veuillez verifier votre numero",stopchargement:!0}}),setTimeout(()=>{r()},2e3))},5e3);setTimeout(async()=>{const t=(await o.get(`${f}/transactions/getrequesttopay/integration/${e.data.reference}`)).data.status;"PENDING"!==t&&"IN PENDING STATE"!==t||(E({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"Vous n'avez pas accepter la requete",stopchargement:!0}}),setTimeout(()=>{r()},5e3)),clearInterval(a)},18e4)}).catch(e=>{"Token API invalid"===e.response.data.message&&E({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"Veuillez contacter l'administrateur du site.",stopchargement:!0}})})})()}()},[b.operator_name,b.num_client,l]),t(a,{children:[e(G,{}),t("div",{className:"choice_operator_card",children:[e("div",{className:"choice_operator_text",children:"Opérateur mobile"}),t("div",{className:"choice_operator_img",children:[t("div",{className:"choice_mtn",children:[e("input",{type:"radio",name:"operator_name",id:"",onChange:()=>(u(""),m("MTN"),g("MTN"),void S(!0))}),e("img",{className:"img_mtn",src:d,alt:"mtn"})]}),t("div",{className:"choice_moov",children:[e("input",{type:"radio",name:"operator_name",id:"",onChange:()=>(u("MOOV"),m(""),g("MOOV"),void S(!0))}),e("img",{className:"img_moov",src:p,alt:"moov"})]})]})]}),e("div",{className:"error_text_operator",style:{display:y?"block":"none"},children:N}),e(z,{send_pay_form:l,setnum_exist_true:()=>{C(!0)},setnum_exist_false:()=>{C(!1)}}),e(O,{pay_func:()=>(!1===l&&c(!0),!0===l&&c(!1),void(""===h?(x(!0),v("Choisissez un operateur mobile"),E({type:"CHANGE/OPERATOR",payload:{operator_name:""}})):(x(!1),v(""),E({type:"CHANGE/OPERATOR",payload:{operator_name:h}}))))})]})};let $;const j=n.div($||($=(e=>e)`
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
     

`)),L=({onClickCancel:a})=>t(j,{children:[e("input",{onClick:()=>a(),className:"input_choice",type:"radio",name:"isClicked",id:""}),e("div",{className:"choice_text",children:"Annuler le paiement"})]});let P;const U=r(P||(P=(e=>e)`
    

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
    background-color:white;
    border-radius:0px;
    justify-content: inherit;
}
.feexpaycardBankForm .titulaire_lab{
   margin-bottom:5px;
   margin-top:0px;
   font-size: 0.8rem;
}


.feexpaycardBankForm .input_container{
    width:90%;
}
.feexpaycardBankForm .input_info{
   background-color:#cfcfcf;
   border:none;
   outline:none;
   padding:10px;
   width:100%;

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
    height: 94%;
    
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

           height:fit-content;
           
      }
   


 }

   
    
`)),q=({send_signal:n})=>{const[r,o]=i.useState(""),[l,c]=i.useState(""),[s,m]=i.useState(""),[d,p]=i.useState("Benin"),[_,u]=i.useState(""),[h,g]=i.useState(""),[f,y]=i.useState(""),[x,N]=i.useState(""),[v,b]=i.useState(""),[E,k]=i.useState(""),[C,A]=i.useState(""),[S,F]=i.useState(""),[B,R]=i.useState(""),{dispatch:G}=w();return i.useEffect(()=>{0===_.trim().length?k("Entrez votre email"):(k(""),G({type:"CHANGE/NAME_CARD",payload:{email_card:_}})),0===h.trim().length?F("Entrez votre title"):(F(""),G({type:"CHANGE/NAME_CARD",payload:{title_card:h}})),0===s.trim().length||Number.isNaN(parseInt(s))?A("Entrez votre numéro"):(A(""),G({type:"CHANGE/NAME_CARD",payload:{numero_card:s}})),0===r.trim().length||0===l.trim().length?b("Entrez votre nom et prénoms"):(b(""),G({type:"CHANGE/NAME_CARD",payload:{name_card:r,last_name_card:l}})),0===f.trim().length||0===x.trim().length?R("Entrez votre adreese et votre localité"):(R(""),G({type:"CHANGE/NAME_CARD",payload:{address_card:f,locality_card:x}}))},[n]),t(a,{children:[e(U,{}),e("div",{className:"feexpaycardBankForm",children:t("form",{className:"form_pay",children:[t("div",{className:"other_info_container",children:[t("div",{className:"expiration_date",children:[e("label",{className:"titulaire_lab",htmlFor:"last_name",children:"Nom"}),e("input",{className:"input_info input_customer feexpay_input_name",type:"text",name:"last_name",id:"last_name",placeholder:"Doe",onChange:e=>{o(e.target.value),function(e){0===e.target.value.length&&G({type:"CHANGE/NAME_CARD",payload:{name_card:""}})}(e)}})]}),t("div",{className:"cryptogramme",children:[e("label",{className:"titulaire_lab titulaire_lab_prenom",htmlFor:"first_name",children:"Prénoms"}),e("input",{className:"input_info input_customer input_customer_prenom feexpay_lastName_input",type:"text",name:"first_name",id:"first_name",placeholder:"John",onChange:e=>{c(e.target.value),function(e){0===e.target.value.length&&G({type:"CHANGE/NAME_CARD",payload:{last_name_card:""}})}(e)}})]})]}),e("div",{className:"feepay_nameLastname_error error_text_operator_input",style:{fontSize:"0.6rem",color:"crimson",marginTop:"0.1rem"},children:v}),t("div",{className:"titulaire_info_container",children:[e("label",{className:"titulaire_lab",htmlFor:"email",children:"Email"}),e("div",{className:"titulaire_input",style:{backgroundColor:"white !important"},children:e("input",{className:"input_info feexpay_email_input",type:"email",name:"email",id:"email",placeholder:"Email",onChange:e=>{u(e.target.value),function(e){0===e.target.value.length&&G({type:"CHANGE/NAME_CARD",payload:{email_card:""}})}(e)}})}),e("div",{className:"feexpay_email_error error_text_operator_input",style:{fontSize:"0.6rem",color:"crimson",marginTop:"0.1rem"},children:E})]}),t("div",{className:"other_info_container",children:[t("div",{className:"expiration_date_custom expiration_date",children:[e("label",{className:"titulaire_lab",htmlFor:"country",children:"Pays"}),e("div",{children:t("select",{id:"country",name:"country",className:"input_info feexpay_input_countryName",style:{width:"100%"},onChange:e=>{!function(e){p(e.target.value),G({type:"CHANGE/NAME_CARD",payload:{country_card:e.target.value}})}(e)},children:[e("option",{value:"Benin",children:"Benin"}),e("option",{value:"Rwanda",children:"Rwanda"}),e("option",{value:"Togo",children:"Togo"})]})})]}),t("div",{className:"cryptogramme_custom cryptogramme",children:[e("label",{className:"titulaire_lab",htmlFor:"phone_number",children:"Numéro de téléphone"}),e("div",{className:"titulaire_input",style:{width:"100%",backgroundColor:"white !important"},children:e("input",{className:"input_w input_info input_customer input_customer_prenom feexpay_numTel_input",type:"number",name:"phone",id:"phone_number",placeholder:"Numéro",onChange:e=>{m(e.target.value),function(e){0===e.target.value.length&&G({type:"CHANGE/NAME_CARD",payload:{numero_card:""}})}(e)}})})]})]}),e("div",{className:"feexpay_countryNumber_error error_text_operator_input",style:{fontSize:"0.6rem",color:"crimson",marginTop:"0.1rem"},children:C}),t("div",{className:"titulaire_info_container",children:[e("label",{className:"titulaire_lab",htmlFor:"title",children:"Titre"}),e("div",{className:"titulaire_input",style:{backgroundColor:"white !important"},children:e("input",{className:"input_info feexpay_title_input",type:"text",name:"title",id:"title",placeholder:"Titre",onChange:e=>{g(e.target.value),function(e){0===e.target.value.length&&G({type:"CHANGE/NAME_CARD",payload:{title_card:""}})}(e)}})})]}),e("div",{className:"feexpay_title_error error_text_operator_input",style:{fontSize:"0.6rem",color:"crimson",marginTop:"0.1rem"},children:S}),t("div",{className:"other_info_container",children:[t("div",{className:"expiration_date",children:[e("label",{className:"titulaire_lab",htmlFor:"last_name",children:"Adresse"}),e("input",{className:"input_info input_customer feexpay_adresse_input",id:"last_name",type:"text",name:"address1",placeholder:"Adresse",onChange:e=>{y(e.target.value),function(e){0===e.target.value.length&&G({type:"CHANGE/NAME_CARD",payload:{address_card:""}})}(e)}})]}),t("div",{className:"cryptogramme",children:[e("label",{className:"titulaire_lab titulaire_lab_prenom",htmlFor:"first_name",children:"Localité"}),e("div",{className:"titulaire_input",style:{backgroundColor:"white !important"},children:e("input",{className:"input_info input_customer_prenom feexpay_locality_input",type:"text",name:"locality",id:"locality",placeholder:"Localité",onChange:e=>{N(e.target.value),function(e){0===e.target.value.length&&G({type:"CHANGE/NAME_CARD",payload:{locality_card:""}})}(e)}})})]})]}),e("div",{className:"feepay_localiteAdresse_error error_text_operator_input",style:{fontSize:"0.6rem",color:"crimson",marginTop:"0.1rem"},children:B})]})})]})},V=({})=>{const[n,r]=i.useState(!1),[l,c]=i.useState(""),[d,p]=i.useState(""),[_,u]=i.useState(!0),[h,g]=i.useState(!1),[f,y]=i.useState(""),{state:x,dispatch:N}=w();return i.useEffect(()=>{!async function(){""!==x.numero_card&&""!==x.name_card&&""!==x.email_card&&""!==x.title_card&&""!==x.address_card&&""!==x.locality_card&&""!==x.last_name_card&&""!==x.country_card&&await o.post("http://192.168.0.122:4005/api/transactions/card/inittransact",{amount:`${x.price}`,reseau:`${l}`,token:"fp_expK2auYVTcKGLkg6yq3FfozEg7TdOkczJSMMZtJoOBR55gwwrDv7kGrssa0tZEj",shop:"63e3c477589840e611232472",first_name:`${x.name_card}`,last_name:`${x.last_name_card}`,title:`${x.title_card}`,address1:`${x.address_card}`,locality:`${x.locality_card}`,country:`${x.country_card}`,phone:`${x.numero_card}`,email:`${x.email_card}`}).then(e=>{console.log(e);const t=e.data.url;console.log(e),y(t),u(!1),g(!0)}).catch(e=>{console.log(e)})}()},[x.numero_card,x.name_card,x.email_card,x.title_card,x.address_card,x.locality_card,x.last_name_card,x.country_card,n]),t(a,{children:[_&&t("div",{children:[e(G,{}),t("div",{className:"choice_operator_card",children:[e("div",{className:"choice_operator_text",children:"Carte Bancaire"}),t("div",{className:"choice_operator_img",children:[e("input",{type:"radio",name:"operator_choice",id:"",onChange:()=>{c("VISA")}}),e("img",{className:"img_mtn",src:m,alt:"mtn",style:{marginRight:"1rem"}}),e("input",{type:"radio",name:"operator_choice",id:"",onChange:()=>{c("MASTERCARD")}}),e("img",{className:"img_moov",src:s,alt:"moov"})]})]}),e("div",{className:"feexpay_title_error error_text_operator_input",style:{fontSize:"0.6rem",color:"crimson",marginTop:"0.1rem"},children:d}),e(q,{send_signal:n}),e(O,{pay_func:()=>(!1===n&&r(!0),!0===n&&r(!1),console.log(l),void(""===l?(p("Choisissez votre operateur"),console.log("Reseau Empty"),N({type:"CHANGE/NAME_CARD",payload:{reseau_card:""}})):(p(""),console.log("Reseau Change"),N({type:"CHANGE/NAME_CARD",payload:{reseau_card:l}}))))})]}),h&&e("iframe",{src:f,height:"500",width:"100%",style:{border:"none"},name:"demo"})]})};let Q;const Y=r(Q||(Q=(e=>e)`
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


      
`)),J=({isVisible:n})=>{const{state:r,dispatch:o}=w(),[l,c]=i.useState(!1);return i.useEffect(()=>{!0===n&&(c(!0),o({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"En attente du paiement.",stopchargement:!1}})),!1===n&&c(!1)},[n]),t(a,{children:[e(Y,{}),e("div",{className:"chargement_container",style:{display:l?"flex":"none"},children:t("div",{className:"message_container",style:{backgroundColor:"Paiement effectué"===r.paiement_request_verify_msg?"green":"#D45D00"},children:[e("div",{className:"loader",style:{display:r.stopchargement?"none":"block"}}),e("div",{className:"request_msg",children:r.paiement_request_verify_msg})]})})]})},X=({isOpen:n,cancel_modal:r,cancel_modal_func:o,name_marchand:l})=>{const[c,s]=i.useState(!0),[m,d]=i.useState(!1),[p,_]=i.useState(!1),[u,h]=i.useState(!1),{state:g}=w();return t(a,{children:[e(C,{}),e(J,{isVisible:u}),e("div",{className:"modal_container",style:{position:"fixed !important",zIndex:"10000000000 !important",transition:"all 2s",transform:n&&!1===r?"scale(1)":"scale(0.6)",display:n&&!1===r?"flex":"none"},children:t("div",{className:"modal",children:[t("div",{className:"modal_header",children:[e("div",{className:"logo_container",children:e("img",{className:"logo",src:"https://api.feexpay.me/api/static/feexpay_logo-h.png",alt:"feexpay"})}),t("div",{className:"header_text",children:[e("div",{class:"feexpay_close_btn",onClick:()=>o()}),t("div",{className:"marchant_name",children:["MARCHAND : ",l]})," ",t("div",{className:"id_info",children:[" ID : ",g.id]})]})]}),t("div",{className:"padding_add",style:{paddingLeft:"2rem",paddingRight:"2rem",height:"94%"},children:[c&&t(a,{children:[e("div",{className:"pay_with",children:"PAYER AVEC :"}),e(F,{choice_local_func:()=>(d(!1),s(!1),void _(!0))}),e(B,{choice_cardBank_func:()=>(d(!0),s(!1),void _(!1))}),e(L,{onClickCancel:()=>o()})]}),m&&e(V,{}),p&&e(I,{changeVisibleChargementFunc:()=>{h(!0)},changeVisibleChargementExitFunc:()=>h(!1)})]}),t("div",{className:"secure_by_feexpay",children:[e("div",{className:"lock_line"}),e("div",{className:"img_lock_container",children:e("img",{className:"img_lock",src:"https://api.feexpay.me/api/static/svg/icons8-lock.svg",alt:"icon lock"})}),e("div",{className:"lock_text",children:"Sécurisé par FeexPay"})]}),e("div",{className:"footer_modal_container",children:e("div",{className:"footer_modal"})})]})})]})},K=({amount:n,token:r,id:l,callback:c})=>{const[s,m]=i.useState(!1),[d,p]=i.useState(!0),[_,u]=i.useState(!1),[h,g]=i.useState(""),y=n;return i.useEffect(()=>{!async function(){await o.get(`${f}/shop/${l}/get_shop`).then(e=>{g(e.data.name),u(!0)}).catch(e=>{"Le format de l'id est"===e.response.data.message&&(g(""),u(!1))})}()},[]),e(a,{children:t(v,{amount:y,token:r,id:l,callback:c,children:[e(X,{isOpen:s,cancel_modal:d,cancel_modal_func:()=>(m(!1),void p(!0)),name_marchand:h}),e(E,{open_modal:()=>(m(!0),void p(!1)),feexVisisbleBtn:_})]})})};export{K as default};
