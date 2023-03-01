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
`)),s="https://api.feexpay.me/api/static/logo_mastercard.svg",m="https://api.feexpay.me/api/static/logo_visa.svg",d="https://api.feexpay.me/api/static/logo_mtn.svg",p="https://api.feexpay.me/api/static/logo_moov.svg",g="https://api.feexpay.me/api/static/Flag_of_Togo.svg.png",u="https://api.feexpay.me/api/static/Flag_of_Benin.svg.png",_="https://api.feexpay.me/api/static/Flag_of_Rwanda.svg.png",h="https://api.feexpay.me/api/static/CI.png",f="https://api.feexpay.me/api";function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},x.apply(this,arguments)}function y(e,t){switch(t.type){case"CHANGE/OPERATOR":return x({},e,t.payload);case"CHANGE/NUMERO":let a="";switch(t.payload.country){case 1:return Number.isNaN(parseInt(t.payload.num_client))?x({},e,t.payload):(a=`229${t.payload.num_client}`,x({},e,{num_client_without_code:t.payload.num_client,num_client:a}));case 2:return a=`228${t.payload.num_client}`,x({},e,{num_client:a});case 3:return a=`225${t.payload.num_client}`,x({},e,{num_client:a});case 4:return a=`250${t.payload.num_client}`,x({},e,{num_client:a});default:return x({},e,t.payload)}case"CHANGE/NUMWITHOUTCODE":return x({},e,{num_client_without_code:t.payload.num_client_without_code});case"CHANGE/REQUESTMESSAGE":return x({},e,{paiement_request_verify_msg:t.payload.paiement_request_verify_msg,stopchargement:t.payload.stopchargement});case"CHANGE/REQUESTTOPAYINFO":return x({},e,{requesttopayinfo:x({},t.payload)});case"CHANGE/EMAIL":case"CHANGE/FULLNAME":return x({},e,t.payload);default:throw new Error("Message")}}let N={};const v=({children:t,amount:a,apiURL:n,token:r,id:o,callback:l})=>{N={price:a,apiURL:n,token:r,id:o,operator_name:"",num_client:"",num_client_without_code:"",paiement_request_verify_msg:"En attente du paiement.",stopchargement:!1,requesttopayinfo:{},name_marchand:"",email:"",full_name:"",callback:l};const[c,s]=i.useReducer(y,N),m=i.useMemo(()=>({state:c,dispatch:s}),[c,s]);return e(b.Provider,{value:m,children:t})},b=i.createContext({state:N,dispatch:()=>{}});console.log(N);const w=()=>i.useContext(b),E=({open_modal:i,feexVisisbleBtn:n})=>{const{state:r}=w();return t(a,{children:[e(c,{}),t("button",{onClick:()=>i(),className:"button",style:{display:n?"flex":"none"},children:[e("span",{className:"button_text",children:"PAYER"}),t("span",{children:[r.price," XOF"]}),e("img",{src:"https://api.feexpay.me/api/static/feexpay_logo.png",alt:""})]})]})};let k;const C=r(k||(k=(e=>e)`
    
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
       display:flex;
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
        padding-top: 1rem;
        
        
        
    }
    .modal .logo_container{
        width:40%;
        padding-top: 1rem;
        padding-left:1rem;
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
      
    }

    .footer_modal{
        width:100%;
        height:100%;
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

    
`));let S;const A=n.div(S||(S=(e=>e)`
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

 
   

`)),G=({choice_local_func:a})=>t(A,{children:[t("div",{className:"text_container",children:[e("input",{onClick:()=>a(),className:"input_choice",type:"radio",name:"isClicked",id:""}),e("div",{className:"choice_text",children:"Mobile Money"})]}),t("div",{className:"image_choice",children:[e("img",{className:"img_mtn",src:d,alt:""}),e("img",{className:"img_moov",src:p,alt:""})]})]}),O=({choice_cardBank_func:a})=>t(A,{children:[t("div",{className:"text_container",children:[e("input",{onClick:()=>a(),className:"input_choice",type:"radio",name:"isClicked",id:""}),e("div",{className:"choice_text",children:"Carte bancaire"})]}),t("div",{className:"image_choice",children:[e("img",{className:"img_mtn",src:m,alt:""}),e("img",{className:"img_moov",src:s,alt:""})]})]});let R;const M=r(R||(R=(e=>e)`
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
`));let T;const I=r(T||(T=(e=>e)` 
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
`)),F=({send_pay_form:n,setnum_exist_false:r,setnum_exist_true:o})=>{const{dispatch:l}=w(),[c,s]=i.useState(!1),[m,d]=i.useState(1);i.useState(null);const[p,f]=i.useState(!1),[x,y]=i.useState("");i.useState("");const[N,v]=i.useState("");i.useState("");const[b,E]=i.useState(""),[k,C]=i.useState(""),[S,A]=i.useState(""),[G,O]=i.useState("");function R(){switch(m){case 1:return{flagLink:u,placeholder:"+229 95 02 03 04"};case 2:return{flagLink:g,placeholder:"+228 05 34 03 12"};case 3:return{flagLink:h,placeholder:"+225 01 20 45 02"};case 4:return{flagLink:_,placeholder:"+250 04 02 23 04"};default:return null}}return i.useEffect(()=>{0===b.length?A("Entrez votre email"):(A(""),l({type:"CHANGE/EMAIL",payload:{email:b}})),0===k.length?O("Entrez votre nom et prenom"):(O(""),l({type:"CHANGE/FULLNAME",payload:{full_name:k}})),Number.isNaN(parseInt(N))?(f(!0),y("Entrez votre numéro"),r()):(f(!1),y(""),o(),l({type:"CHANGE/NUMERO",payload:{num_client:N,country:m}}))},[n]),t(a,{children:[e(I,{}),t("div",{className:"margin",children:[e("label",{style:{marginBottom:"1.2rem"},children:"Nom Prenom"}),e("input",{className:"feexpay_fullname_input feexpay_input_simple feexpay_input_fullname input_simple",type:"text",style:{marginBottom:"0px"},onChange:e=>{C(e.target.value),function(e){0===e.target.value.length&&l({type:"CHANGE/FULLNAME",payload:{full_name:""}})}(e)},placeholder:"John Don"}),e("div",{className:"feepay_fullname_error error_text_operator_input",style:{display:"block",marginBottom:"1.5rem"},children:G}),e("label",{style:{marginBottom:"1.2rem"},children:"E-mail"}),e("input",{className:"feexpay_email_input feexpay_input_simple feexpay_input_email input_simple",type:"email",style:{marginBottom:"0px"},placeholder:"example@gmail.com",onChange:e=>{E(e.target.value),function(e){0===e.target.value.length&&l({type:"CHANGE/EMAIL",payload:{email:""}})}(e)}}),e("div",{className:"feepay_email_error error_text_operator_input",style:{display:"block",marginBottom:"1.5rem"},children:S}),e("label",{style:{marginBottom:"1.2rem"},htmlFor:"input_num",children:"Numéro de téléphone"}),t("div",{className:"num_operator_card",children:[t("div",{className:"num_input_container",children:[e("div",{onClick:()=>{s(!1===c)},className:"flag",children:e("img",{className:"img_flag",src:R().flagLink,alt:"benin_flag"})}),e("input",{className:"input_num",type:"number",name:"input_num",onChange:e=>{v(e.target.value),function(e){Number.isNaN(parseInt(e.target.value))&&l({type:"CHANGE/NUMERO",payload:{num_client:N,country:m}})}(e)},placeholder:R().placeholder})]}),t("div",{className:"num_flag_container",style:{display:c?"flex":"none"},children:[t("div",{onClick:()=>{d(1),s(!1)},className:"flag_info_container",children:[e("div",{className:"flag_container",children:e("img",{src:u,alt:""})}),e("div",{className:"flag_name",children:"Bénin"})]}),t("div",{onClick:()=>{d(2),s(!1)},className:"flag_info_container",children:[e("div",{className:"flag_container",children:e("img",{src:g,alt:""})}),e("div",{className:"flag_name",children:"Togo"})]}),t("div",{onClick:()=>{d(3),s(!1)},className:"flag_info_container",children:[e("div",{className:"flag_container",children:e("img",{src:h,alt:""})}),e("div",{className:"flag_name",children:"Côte d'Ivoire"})]}),t("div",{onClick:()=>{d(4),s(!1)},className:"flag_info_container",children:[e("div",{className:"flag_container",children:e("img",{src:_,alt:""})}),e("div",{className:"flag_name",children:"Rwanda"})]})]})]}),e("div",{className:"error_text_operator_input",style:{display:p?"block":"none"},children:x})]})]})};let H;const z=r(H||(H=(e=>e)`
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
      
`)),j=({pay_func:i})=>{const{state:n}=w();return t(a,{children:[e(z,{}),e("div",{className:"button_container",children:e("button",{onClick:()=>i(),className:"button_pay",children:t("span",{className:"button_text",children:["Payer ",n.price," XOF"]})})})]})},L=({changeVisibleChargementFunc:n,changeVisibleChargementExitFunc:r})=>{const[l,c]=i.useState(!1),[s,m]=i.useState(""),[g,u]=i.useState(""),[_,h]=i.useState("");i.useState(!1),i.useState(!1);const[x,y]=i.useState(!1),[N,v]=i.useState(""),{state:b,dispatch:E}=w(),[k,C]=i.useState(!1),[S,A]=i.useState(!1);return i.useEffect(()=>{!function(){const e=new String(b.num_client),t=new String(b.operator_name);e.length>4&&t.length>0&&!0===k&&b.full_name.length>0&&b.email.length>0&&(async()=>{n(),await o.post(`${f}/transactions/requesttopay/integration`,{phoneNumber:`${b.num_client}`,amount:`${b.price}`,reseau:`${b.operator_name}`,token:`${b.token}`,id:`${b.id}`,first_name:`${b.full_name}`,email:`${b.email}`}).then(e=>{let t=0;const a=setInterval(async()=>{const i=await o.get(`${f}/transactions/getrequesttopay/integration/${e.data.reference}`),n=i.data.status;"SUCCESSFUL"===n&&(t+=1,t<2&&(clearInterval(a),E({type:"CHANGE/REQUESTTOPAYINFO",payload:{externalId:i.data.externalId,amount:i.data.amount,status:i.data.status,partyId:i.data.payer.partyId}}),E({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"Paiement effectué",stopchargement:!0}}),setTimeout(()=>{b.callback()},2e3))),"FAILED"===n&&(clearInterval(a),E({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"Veuillez verifier votre numero",stopchargement:!0}}),setTimeout(()=>{r()},2e3))},5e3);setTimeout(async()=>{"PENDING"===(await o.get(`${f}/transactions/getrequesttopay/integration/${e.data.reference}`)).data.status&&(E({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"Vous n'avez pas accepter la requete",stopchargement:!0}}),setTimeout(()=>{r()},5e3)),clearInterval(a)},18e4)}).catch(e=>{"Token API invalid"===e.response.data.message&&E({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"Veuillez contacter l'administrateur du site.",stopchargement:!0}})})})()}()},[b.operator_name,b.num_client,l]),t(a,{children:[e(M,{}),t("div",{className:"choice_operator_card",children:[e("div",{className:"choice_operator_text",children:"Opérateur mobile"}),t("div",{className:"choice_operator_img",children:[t("div",{className:"choice_mtn",children:[e("input",{type:"radio",name:"operator_name",id:"",onChange:()=>(u(""),m("MTN"),h("MTN"),void A(!0))}),e("img",{className:"img_mtn",src:d,alt:"mtn"})]}),t("div",{className:"choice_moov",children:[e("input",{type:"radio",name:"operator_name",id:"",onChange:()=>(u("MOOV"),m(""),h("MOOV"),void A(!0))}),e("img",{className:"img_moov",src:p,alt:"moov"})]})]})]}),e("div",{className:"error_text_operator",style:{display:x?"block":"none"},children:N}),e(F,{send_pay_form:l,setnum_exist_true:()=>{C(!0)},setnum_exist_false:()=>{C(!1)}}),e(j,{pay_func:()=>(!1===l&&c(!0),!0===l&&c(!1),void(""===_?(y(!0),v("Choisissez un operateur mobile"),E({type:"CHANGE/OPERATOR",payload:{operator_name:""}})):(y(!1),v(""),E({type:"CHANGE/OPERATOR",payload:{operator_name:_}}))))})]})};let P;const U=n.div(P||(P=(e=>e)`
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
     

`)),q=({onClickCancel:a})=>t(U,{children:[e("input",{onClick:()=>a(),className:"input_choice",type:"radio",name:"isClicked",id:""}),e("div",{className:"choice_text",children:"Annuler le paiement"})]});let $;const B=r($||($=(e=>e)`
    
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
   
    
`)),V=({})=>t(a,{children:[e(B,{}),t("form",{className:"form_pay",children:[t("div",{className:"titulaire_info_container",children:[e("label",{className:"titulaire_lab",htmlFor:"titulaire",children:"Titulaire"}),t("div",{className:"titulaire_input",children:[e("div",{className:"input_container",children:e("input",{className:"input_info",type:"text",name:"titulaire",id:"",placeholder:"John PETER"})}),e("div",{className:"img_container",children:e("img",{className:"img_user",src:"https://api.feexpay.me/api/static/svg/user-1-svgrepo-com.svg",alt:""})})]})]}),t("div",{className:"titulaire_info_container",children:[e("label",{className:"titulaire_lab",htmlFor:"num_card",children:"N° de Carte"}),t("div",{className:"titulaire_input",children:[e("div",{className:"input_container",children:e("input",{className:"input_info",type:"text",name:"num_card",id:"",placeholder:"*** *** *** ***"})}),e("div",{className:"img_container",children:e("img",{className:"img_user",src:"https://api.feexpay.me/api/static/svg/creditcard-svgrepo-com.svg",alt:""})})]})]}),t("div",{className:"other_info_container",children:[t("div",{className:"expiration_date",children:[e("label",{className:"titulaire_lab",htmlFor:"date_expiration",children:"Date d'expiration"}),e("div",{className:"padding",children:e("input",{className:"date_expiration_input",type:"text",name:"date_expiration",id:"",placeholder:"MM/AA"})})]}),t("div",{className:"cryptogramme",children:[e("label",{className:"titulaire_lab",htmlFor:"cryptogramme",children:"Cryptogramme"}),e("div",{className:"padding",children:e("input",{className:"cryptogramme_input",type:"text",name:"cryptogramme",placeholder:"***"})})]})]})]})]}),D=({})=>t(a,{children:[e(M,{}),t("div",{className:"choice_operator_card",children:[e("div",{className:"choice_operator_text",children:"Carte Bancaire"}),t("div",{className:"choice_operator_img",children:[e("input",{type:"radio",name:"operator_choice",id:""}),e("img",{className:"img_mtn",src:m,alt:"mtn",style:{marginRight:"1rem"}}),e("input",{type:"radio",name:"operator_choice",id:""}),e("img",{className:"img_moov",src:s,alt:"moov"})]})]}),e(V,{}),e(j,{pay_func:()=>{console.log("FeexPayer")}})]});let Q;const Y=r(Q||(Q=(e=>e)`
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


      
`)),J=({isVisible:n})=>{const{state:r,dispatch:o}=w(),[l,c]=i.useState(!1);return i.useEffect(()=>{!0===n&&(c(!0),o({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"En attente du paiement.",stopchargement:!1}})),!1===n&&c(!1)},[n]),t(a,{children:[e(Y,{}),e("div",{className:"chargement_container",style:{display:l?"flex":"none"},children:t("div",{className:"message_container",style:{backgroundColor:"Paiement effectué"===r.paiement_request_verify_msg?"green":"#D45D00"},children:[e("div",{className:"loader",style:{display:r.stopchargement?"none":"block"}}),e("div",{className:"request_msg",children:r.paiement_request_verify_msg})]})})]})},X=({isOpen:n,cancel_modal:r,cancel_modal_func:o,name_marchand:l})=>{const[c,s]=i.useState(!0),[m,d]=i.useState(!1),[p,g]=i.useState(!1),[u,_]=i.useState(!1),{state:h}=w();return t(a,{children:[e(C,{}),e(J,{isVisible:u}),e("div",{className:"modal_container",style:{position:"fixed !important",zIndex:"10000000000 !important",transition:"all 2s",transform:n&&!1===r?"scale(1)":"scale(0.6)",display:n&&!1===r?"flex":"none"},children:t("div",{className:"modal",children:[t("div",{className:"modal_header",children:[e("div",{className:"logo_container",children:e("img",{className:"logo",src:"https://api.feexpay.me/api/static/feexpay_logo-h.png",alt:"feexpay"})}),t("div",{className:"header_text",children:[t("div",{className:"marchant_name",children:["MARCHAND : ",l]}),"  ",t("div",{className:"id_info",children:[" ID : ",h.id]})]})]}),t("div",{className:"padding_add",style:{paddingLeft:"2rem",paddingRight:"2rem",height:"94%"},children:[c&&t(a,{children:[e("div",{className:"pay_with",children:"PAYER AVEC :"}),e(G,{choice_local_func:()=>(d(!1),s(!1),void g(!0))}),e(O,{choice_cardBank_func:()=>(d(!0),s(!1),void g(!1))}),e(q,{onClickCancel:()=>o()})]}),m&&e(D,{}),p&&e(L,{changeVisibleChargementFunc:()=>{_(!0)},changeVisibleChargementExitFunc:()=>_(!1)})]}),t("div",{className:"secure_by_feexpay",children:[e("div",{className:"lock_line"}),e("div",{className:"img_lock_container",children:e("img",{className:"img_lock",src:"https://api.feexpay.me/api/static/svg/icons8-lock.svg",alt:"icon lock"})}),e("div",{className:"lock_text",children:"Sécurisé par FeexPay"})]}),e("div",{className:"footer_modal_container",children:e("div",{className:"footer_modal"})})]})})]})},W=({amount:n,token:r,id:l,callback:c})=>{const[s,m]=i.useState(!1),[d,p]=i.useState(!0),[g,u]=i.useState(!1),[_,h]=i.useState(""),x=n;return i.useEffect(()=>{!async function(){await o.get(`${f}/shop/${l}/get_shop`).then(e=>{h(e.data.name),u(!0)}).catch(e=>{"Le format de l'id est"===e.response.data.message&&(h(""),u(!1))})}()},[]),e(a,{children:t(v,{amount:x,token:r,id:l,callback:c,children:[e(X,{isOpen:s,cancel_modal:d,cancel_modal_func:()=>(m(!1),void p(!0)),name_marchand:_}),e(E,{open_modal:()=>(m(!0),void p(!1)),feexVisisbleBtn:g})]})})};export{W as default};
