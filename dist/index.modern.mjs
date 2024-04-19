import{jsx as e,jsxs as t,Fragment as a}from"react/jsx-runtime";import n from"react";import i,{createGlobalStyle as r}from"styled-components";import o from"axios";function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l.apply(this,arguments)}let c;const s=r(c||(c=(e=>e)`
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
`));function d(e,t){try{switch(t.type){case"CHANGE/OPERATOR":case"CHANGE/EMAIL":case"CHANGE/FULLNAME":case"CHANGE/NAME_CARD":return l({},e,t.payload);case"CHANGE/COUNTRY_CODE":return l({},e,{country_code:t.payload.country_code});case"CHANGE/OPERATOR_NAME":return l({},e,{operator_name:t.payload.operator_name});case"CHANGE/NUMERO_CLIENT":let a="";return a=`${e.country_code}${t.payload.num_client}`,l({},e,{num_client_without_code:t.payload.num_client,num_client:a});case"CHANGE/CODE_OTP":return l({},e,{code_otp:t.payload.code_otp});case"CHANGE/NUMWITHOUTCODE":return l({},e,{num_client_without_code:t.payload.num_client_without_code});case"CHANGE/REQUESTMESSAGE":return l({},e,{paiement_request_verify_msg:t.payload.paiement_request_verify_msg,stopchargement:t.payload.stopchargement});case"CHANGE/REQUESTTOPAYINFO":return l({},e,{requesttopayinfo:l({},t.payload)});default:throw new Error("Message")}}catch(t){return console.error("Une erreur est survenue dans le reducer :",t),e}}let m={};const p=({children:t,amount:a,apiURL:i,token:r,id:o,reference:l,callback:c,description:s,callback_info:p,callback_url:_,fieldsToHide:h,buttonText:g,buttonStyles:f,defaultValueField:y})=>{m={price:a,apiURL:i,token:r,id:o,operator_name:"",custom_id:l||"",code_otp:"",callback_info:p,description:s,country_code:"",num_client:"",num_client_without_code:"",paiement_request_verify_msg:"En attente de paiement.",stopchargement:!1,requesttopayinfo:{},name_marchand:"",reference_marchand:"",email:"",full_name:"",callback:c,callback_url:_,numero_card:"",name_card:"",email_card:"",title_card:"",address_card:"",locality_card:"",last_name_card:"",fieldsToHide:h,buttonText:g,buttonStyles:f,defaultValueField:y};const[x,b]=n.useReducer(d,m),v=n.useMemo(()=>({state:x,dispatch:b}),[x,b]);return e(u.Provider,{value:v,children:t})},u=n.createContext({state:m,dispatch:()=>{}}),_=()=>n.useContext(u),h=({open_modal:n,feexVisisbleBtn:i,buttonText:r,buttonStyles:o,buttonClass:c})=>(_(),t(a,{children:[e(s,{}),e("button",{onClick:()=>n(),className:`${c||"button"}`,style:l({display:i?"flex":"none"},o),children:e("span",{className:"button_text",style:{marginRight:"5px"},children:r})})]}));let g;const f=r(g||(g=(e=>e)`
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

    
`));let y;const x=i.div(y||(y=(e=>e)`
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

 
   

`)),b=({choice_local_func:a})=>e(x,{children:t("div",{className:"text_container",onClick:()=>a(),style:{height:"45px"},children:[e("input",{onClick:()=>a(),className:"input_choice",type:"radio",name:"isClicked",id:""}),e("div",{onClick:()=>a(),className:"choice_text",children:"Mobile Money"})]})}),v="https://api.feexpay.me/api/static/logo_mastercard.svg",N="https://api.feexpay.me/api/static/logo_visa.svg",k="https://api.feexpay.me/api/static/Flag_of_Togo.svg.png",w="https://api.feexpay.me/api/static/Flag_of_Benin.svg.png",E="https://api.feexpay.me/api/static/Flag_of_Rwanda.svg.png",C="https://api.feexpay.me/api/static/CI.png",S="https://api.feexpay.me/api",A=({choice_cardBank_func:a})=>t(x,{children:[t("div",{className:"text_container",onClick:()=>a(),children:[e("input",{onClick:()=>a(),className:"input_choice",type:"radio",name:"isClicked",id:""}),e("div",{onClick:()=>a(),className:"choice_text",children:"Cartes bancaires"})]}),t("div",{className:"image_choice",onClick:()=>a(),children:[e("img",{className:"img_mtn",src:N,alt:""}),e("img",{className:"img_moov",src:v,alt:""})]})]});let F;const T=r(F||(F=(e=>e)`
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
`));let O;const G=r(O||(O=(e=>e)` 
    .margin{
        margin-top:1rem;
        margin-bottom:1rem;
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
    
    .custom-select {
      display: inline-block;
      width: 100%;
      height: calc(1.5em + 0.75rem + 2px);
      padding: 0.375rem 1.75rem 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      vertical-align: middle;
      background: #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") right 0.75rem center/8px 10px no-repeat;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    
    .custom-select:focus {
      border-color: #80bdff;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
    
    .custom-select:focus::-ms-value {
      color: #495057;
      background-color: #fff;
    }
    
    .custom-select[multiple], .custom-select[size]:not([size="1"]) {
      height: auto;
      padding-right: 0.75rem;
      background-image: none;
    }
    
    .custom-select:disabled {
      color: #6c757d;
      background-color: #e9ecef;
    }
    
    .custom-select::-ms-expand {
      display: none;
    }
    
    .custom-select:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 #495057;
    }
    
    .custom-select-sm {
      height: calc(1.5em + 0.5rem + 2px);
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      padding-left: 0.5rem;
      font-size: 0.875rem;
    }
    
    .custom-select-lg {
      height: calc(1.5em + 1rem + 2px);
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 1rem;
      font-size: 1.25rem;
    }
    
    @media screen and (max-width:700px) {
         .num_flag_container{
             width:85%;
        }

    }
`)),R=({send_pay_form:i,setnum_exist_false:r,setnum_exist_true:o})=>{var l,c;const{state:s,dispatch:d}=_(),[m,p]=n.useState(!1),[u,h]=n.useState(1);n.useState(null);const[g,f]=n.useState(!1),[y,x]=n.useState("");n.useState("");const[b,v]=n.useState(""),[N,S]=n.useState(""),[A,F]=n.useState(""),[T,O]=n.useState("");n.useState("");const[R,M]=n.useState(""),[B,I]=n.useState("");n.useState(""),n.useState("229");const[z,$]=n.useState(""),[H,P]=n.useState(!1),[D,V]=n.useState(""),[j,L]=n.useState("");let U=[{code:"229",name:"Bénin",country_code:"BJ"},{code:"226",name:"Burkina-Faso",country_code:"BF"},{code:"225",name:"Côte d'Ivoire",country_code:"CI"},{code:"221",name:"Sénégal",country_code:"SN"},{code:"228",name:"Togo",country_code:"TG"}];const q={229:[{value:"MOOV",label:"MOOV"},{value:"MTN",label:"MTN"}],226:[{value:"MOOV BF",label:"MOOV"},{value:"ORANGE BF",label:"ORANGE"}],225:[{value:"MOOV CI",label:"MOOV"},{value:"MTN CI",label:"MTN"},{value:"WAVE CI",label:"WAVE"},{value:"ORANGE CI",label:"ORANGE"}],228:[{value:"MOOV TG",label:"MOOV"},{value:"TOGOCOM TG",label:"TOGOCOM"}],221:[{value:"ORANGE SN",label:"ORANGE"},{value:"FREE SN",label:"FREE"}]},Y=e=>(s.fieldsToHide||[]).includes(e);return n.useEffect(()=>{if(s.defaultValueField&&s.defaultValueField.country_iban){let e,t=s.defaultValueField.country_iban;e="BJ"===t?229:"BF"===t?226:"CI"===t?225:"SN"===t?221:"TG"===t?228:229,d({type:"CHANGE/COUNTRY_CODE",payload:{country_code:e}}),V(e)}},[s.defaultValueField]),n.useEffect(()=>{$(0===j.length?"Sélectionnez le réseau":""),Y("email")&&F("johndoe@gmail.com"),Y("full_name")&&O("John"),0===A.length?M("Entrez votre email"):(M(""),d({type:"CHANGE/EMAIL",payload:{email:A}})),0===T.length?I("Entrez votre nom et prenom"):(I(""),d({type:"CHANGE/FULLNAME",payload:{full_name:T}})),Number.isNaN(parseInt(b))?(f(!0),x("Entrez votre numéro"),r()):(f(!1),x(""),o())},[i]),t(a,{children:[e(G,{}),t("div",{children:[e("label",{htmlFor:"countrySelect",style:{marginBottom:"1rem"},children:"Sélectionnez un pays :"}),null!=(l=s.defaultValueField)&&l.country_iban?e("div",{className:"custom-select",style:{marginTop:"1rem",width:"-webkit-fill-available",height:"auto",display:"flex",alignItems:"center",border:"1px solid #ccc",padding:"0.5rem",borderRadius:"4px"},children:e("span",{style:{marginLeft:"0.5rem"},children:null==(c=U.find(e=>e.country_code===s.defaultValueField.country_iban))?void 0:c.name})}):t("select",{className:"custom-select",id:"countrySelect",value:D,style:{marginTop:"1rem"},onChange:e=>{V(e.target.value),L(""),d({type:"CHANGE/COUNTRY_CODE",payload:{country_code:e.target.value}})},children:[e("option",{value:"",children:"Choisissez un pays"}),U.map(t=>e("option",{value:t.code,children:t.name},t.code))]})]}),D&&q[D]&&t("div",{className:"margin",children:[e("label",{htmlFor:"networkSelect",style:{marginTop:"1rem",marginBottom:"1.2rem"},children:"Choisissez un réseau :"}),t("select",{className:"custom-select",id:"networkSelect",value:j,style:{marginTop:"1rem"},onChange:e=>{L(e.target.value),d({type:"CHANGE/OPERATOR_NAME",payload:{operator_name:e.target.value}}),P("ORANGE SN"===e.target.value)},children:[e("option",{value:"",children:"Sélectionnez le réseau mobile"}),q[D].map(t=>e("option",{value:t.value,children:t.label},t.value))]})]}),e("div",{className:"feepay_fullname_error error_text_operator_input",style:{display:"block",marginBottom:"1.5rem"},children:z}),t("div",{className:"margin",children:[!Y("full_name")&&t("div",{children:[t("div",{children:[e("label",{children:"Nom et prénoms"}),e("input",{autoComplete:"off",className:"feexpay_fullname_input feexpay_input_simple feexpay_input_fullname input_simple",type:"text",style:{marginBottom:"0px",marginTop:"0.25rem"},onChange:e=>{O(e.target.value),function(e){0!==e.target.value.length&&d({type:"CHANGE/FULLNAME",payload:{full_name:e.target.value}})}(e)},placeholder:"John Don"})]}),e("div",{className:"feepay_fullname_error error_text_operator_input",style:{display:"block",marginBottom:"1.5rem"},children:B})]}),!Y("email")&&t("div",{children:[t("div",{children:[e("label",{children:"Adresse mail"}),e("input",{autoComplete:"off",className:"feexpay_email_input feexpay_input_simple feexpay_input_email input_simple",type:"email",style:{marginBottom:"0px",marginTop:"0.25rem"},placeholder:"example@gmail.com",onChange:e=>{F(e.target.value),function(e){0!==e.target.value.length&&d({type:"CHANGE/EMAIL",payload:{email:e.target.value}})}(e)}})]}),e("div",{className:"feepay_email_error error_text_operator_input",style:{display:"block",marginBottom:"1.5rem"},children:R})]}),e("label",{htmlFor:"input_num",children:"Numéro de téléphone"}),t("div",{className:"num_operator_card",children:[e("div",{className:"num_input_container",children:e("input",{autoComplete:"off",className:"input_num",style:{marginTop:"0.25rem"},type:"number",name:"input_num",onChange:e=>{v(e.target.value),function(e){Number.isNaN(parseInt(e.target.value))||d({type:"CHANGE/NUMERO_CLIENT",payload:{num_client:e.target.value}})}(e)},placeholder:function(){switch(u){case 1:return{flagLink:w,placeholder:"95020304"};case 2:return{flagLink:k,placeholder:"05340312"};case 3:return{flagLink:C,placeholder:"01204502"};case 4:return{flagLink:E,placeholder:"04022304"};default:return null}}().placeholder})}),t("div",{className:"num_flag_container",style:{display:m?"flex":"none"},children:[t("div",{onClick:()=>{h(1),p(!1)},className:"flag_info_container",children:[e("div",{className:"flag_container",children:e("img",{src:w,alt:""})}),e("div",{className:"flag_name",children:"Bénin"})]}),t("div",{onClick:()=>{h(2),p(!1)},className:"flag_info_container",children:[e("div",{className:"flag_container",children:e("img",{src:k,alt:""})}),e("div",{className:"flag_name",children:"Togo"})]}),t("div",{onClick:()=>{h(3),p(!1)},className:"flag_info_container",children:[e("div",{className:"flag_container",children:e("img",{src:C,alt:""})}),e("div",{className:"flag_name",children:"Côte d'Ivoire"})]}),t("div",{onClick:()=>{h(4),p(!1)},className:"flag_info_container",children:[e("div",{className:"flag_container",children:e("img",{src:E,alt:""})}),e("div",{className:"flag_name",children:"Rwanda"})]})]})]}),e("div",{className:"error_text_operator_input",style:{display:g?"block":"none"},children:y}),H&&t("div",{className:"num_operator_card",children:[e("label",{style:{marginTop:"1.2rem",marginBottom:"1rem"},htmlFor:"input_num",children:"Code OTP* (Obtenez ce code en tapant *144*391#) :"}),e("div",{className:"num_input_container",children:e("input",{type:"number",id:"otp_input",name:"input_num",className:"input_num",onChange:e=>{S(e.target.value),function(e){Number.isNaN(parseInt(e.target.value))||d({type:"CHANGE/CODE_OTP",payload:{code_otp:e.target.value}})}(e)}})})]})]})]})};let M;const B=r(M||(M=(e=>e)`
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
`)),I=({pay_func:n})=>{const{state:i}=_();return t(a,{children:[e(B,{}),e("div",{className:"button_container",children:e("button",{onClick:()=>n(),className:"button_pay",children:t("span",{className:"button_text",children:["Payer ",i.price," XOF"]})})})]})};let z;const $=i.div(z||(z=(e=>e)`
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
     

`)),H=({onClickCancel:a})=>t($,{children:[e("input",{onClick:()=>a(),className:"input_choice",type:"radio",name:"isClicked",id:""}),e("div",{onClick:()=>a(),className:"choice_text",children:"Annuler le paiement"})]}),P=({pay_func:n})=>{const{state:i}=_();return t(a,{children:[e(B,{}),e("div",{className:"button_container",children:e("button",{onClick:()=>n(),className:"button_pay",children:t("span",{className:"button_text",children:["Payer ",i.price," XOF"]})})})]})};let D;const V=r(D||(D=(e=>e)`
    

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

   
    
`)),j=({send_signal:i})=>{const[r,o]=n.useState(""),[l,c]=n.useState(""),[s,d]=n.useState("");n.useState("Benin");const[m,p]=n.useState("");n.useState("");const[u,h]=n.useState("");n.useState("");const[g,f]=n.useState(""),[y,x]=n.useState(""),[b,v]=n.useState("");n.useState("");const[N,k]=n.useState(""),{dispatch:w}=_();return n.useEffect(()=>{0===m.trim().length?x("Entrez votre email"):(x(""),w({type:"CHANGE/NAME_CARD",payload:{email_card:m}})),0===s.trim().length||Number.isNaN(parseInt(s))?v("Entrez votre numéro"):(v(""),w({type:"CHANGE/NAME_CARD",payload:{numero_card:s}})),0===r.trim().length||0===l.trim().length?f("Entrez votre nom et prénoms"):(f(""),w({type:"CHANGE/NAME_CARD",payload:{name_card:r,last_name_card:l}})),0===u.trim().length?k("Entrez votre adresse"):(k(""),w({type:"CHANGE/NAME_CARD",payload:{address_card:u}}))},[i]),t(a,{children:[e(V,{}),e("div",{className:"feexpaycardBankForm",children:t("form",{className:"form_pay",children:[t("div",{className:"other_info_container",children:[t("div",{className:"expiration_date",children:[e("label",{className:"titulaire_lab",htmlFor:"last_name",children:"Nom"}),e("input",{className:"input_info input_customer feexpay_input_name",type:"text",name:"last_name",id:"last_name",placeholder:"Doe",onChange:e=>{o(e.target.value),function(e){0===e.target.value.length&&w({type:"CHANGE/NAME_CARD",payload:{name_card:""}})}(e)}})]}),t("div",{className:"expiration_date",children:[e("label",{className:"titulaire_lab titulaire_lab_prenom",htmlFor:"first_name",children:"Prénoms"}),e("div",{className:"titulaire_input",style:{backgroundColor:"white !important"},children:e("input",{className:"input_info input_customer input_customer_prenom feexpay_lastName_input width-100",type:"text",name:"first_name",id:"first_name",placeholder:"John",onChange:e=>{c(e.target.value),function(e){0===e.target.value.length&&w({type:"CHANGE/NAME_CARD",payload:{last_name_card:""}})}(e)}})})]})]}),e("div",{className:"feepay_nameLastname_error error_text_operator_input",style:{fontSize:"0.6rem",color:"crimson",marginTop:"0.1rem"},children:g}),t("div",{className:"titulaire_info_container",children:[e("label",{className:"titulaire_lab",htmlFor:"email",children:"Email"}),e("div",{className:"titulaire_input",style:{backgroundColor:"white !important"},children:e("input",{className:"input_info feexpay_email_input",type:"email",name:"email",id:"email",placeholder:"Email",onChange:e=>{p(e.target.value),function(e){0===e.target.value.length&&w({type:"CHANGE/NAME_CARD",payload:{email_card:""}})}(e)}})}),e("div",{className:"feexpay_email_error error_text_operator_input",style:{fontSize:"0.6rem",color:"crimson",marginTop:"0.1rem"},children:y})]}),t("div",{className:"titulaire_info_container",children:[e("label",{className:"titulaire_lab",htmlFor:"phone_number",children:"Numéro de téléphone"}),e("div",{className:"titulaire_input",style:{backgroundColor:"white !important"},children:e("input",{className:"input_info feexpay_numTel_input",type:"number",name:"phone",id:"phone_number",placeholder:"Numéro",onChange:e=>{d(e.target.value),function(e){0===e.target.value.length&&w({type:"CHANGE/NAME_CARD",payload:{numero_card:""}})}(e)}})}),e("div",{className:"feexpay_countryNumber_error error_text_operator_input",style:{fontSize:"0.6rem",color:"crimson",marginTop:"0.1rem"},children:b})]})]})})]})},L=({renderComponent:i})=>{const[r,l]=n.useState(!1),[c,s]=n.useState(""),[d,m]=n.useState(""),[p,u]=n.useState(!0),[h,g]=n.useState(!1),[f,y]=n.useState(""),[x,b]=n.useState(!1),k=["Agla","Aibatin","Ahogohoue","Gbedegbe","Missite","Houenoussou","Cadjehoun","Vodje","Fidjrosse","Fiyegnon","Cototier","Ahouanleko","Alobatin","Finagnon","Houeyiho","Saint Jean","Gbegamey","Gbediga","Yenawa","Missogbe","Kouhounou","Midedji","Vedoko","Gbenonkpo","Fifadji","Zogbo","Zogbohohoue","Minonkpo","Mededjro","Tonato","Gbedagba","Houehoun","Sedami","Sedjro","Todote","Yevedo","Dagbegji","Enagnon","Fignon","Sehogan","Ladji","Djidje","Vossa","Dantokpa","Jericho","GBedromede","Ahouansori","Tokpa","Missebo","Gbedokpo","Zongo","Joncquet","Wlacodji","Midombo","Fifatin","Adogleta","Hlakonme","Agbato","DOnatin","Senade","Irede"],w=k[Math.floor(Math.random()*k.length)],E=n.useRef(null),C=n.useRef(null),{state:A,dispatch:F}=_();function O(){s("VISA"),E.current&&(E.current.checked=!0)}function G(){s("MASTERCARD"),C.current&&(C.current.checked=!0)}return n.useEffect(()=>{!async function(){const e=function(){let e="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",a=t.length;for(let n=0;n<14;n++)e+=t.charAt(Math.floor(Math.random()*a));return e}();""!==A.reseau_card?""!==A.reseau_card&&""!==A.numero_card&&""!==A.name_card&&""!==A.email_card&&""!==A.last_name_card&&await o.post(`${S}/transactions/card/inittransact/integration`,{amount:`${A.price}`,reseau:`${c}`,token:`${A.token}`,shop:`${A.id}`,first_name:`${A.name_card}`,last_name:`${A.last_name_card}`,address1:`${w}`,district:"Cotonou",country:"Benin",phone:`${A.numero_card}`,email:`${A.email_card}`,reference:`${e}`,callback_info:`${A.callback_info}`,description:`${A.description}`}).then(t=>{F({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"En attente de paiement",stopchargement:!0}}),y(t.data.url),u(!1),g(!0);let a=0;const n=setInterval(async()=>{let t=await o.get(`${S}/transactions/getrequesttopay/integration/${e}`),i=t.data.status;"SUCCESSFUL"==i||"FAILED"==i?(a+=1,clearInterval(n),F({type:"CHANGE/REQUESTTOPAYINFO",payload:{transref:t.data.transref,status:t.data.status}}),F({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"Paiement effectué",stopchargement:!0}}),setTimeout(()=>{if(A.callback&&"function"==typeof A.callback)A.callback();else if(void 0!==A.callback_url){const t=new URL(A.callback_url);A.callback_url=t.searchParams&&t.searchParams.toString()?`${A.callback_url}&id_transaction=${e}`:`${A.callback_url}?id_transaction=${e}`,window.location.href=A.callback_url}},3e3)):(a++,30===a&&(clearInterval(n),clearInterval(n)))},3e4)}).catch(e=>{console.log(e)}):""==A.reseau_card?m("Choisissez votre operateur"):console.log("error")}()},[A.numero_card,A.reseau_card,A.name_card,A.email_card,A.last_name_card,i,r]),t(a,{children:[p&&t("div",{children:[e(T,{}),t("div",{className:"choice_operator_card",children:[e("div",{className:"choice_operator_text",children:"Cartes Bancaires"}),t("div",{className:"choice_operator_img",children:[e("input",{ref:E,type:"radio",name:"operator_choice",id:"input_visa",onChange:()=>O()}),e("img",{className:"img_mtn",src:N,alt:"mtn",style:{marginRight:"1rem"},id:"mastercard_picture",onClick:()=>O()}),e("input",{ref:C,type:"radio",name:"operator_choice",id:"input_mastercard",onChange:()=>G()}),e("img",{className:"img_moov",src:v,alt:"moov",id:"visa_picture",onClick:()=>G()})]})]}),e("div",{className:"feexpay_title_error error_text_operator_input",style:{fontSize:"0.6rem",color:"crimson",marginTop:"0.1rem"},children:d}),e(j,{send_signal:r}),x?t(a,{children:[e(B,{}),e("div",{className:"button_container",children:e("button",{className:"button_pay",children:e("span",{className:"button_text",children:"En cours ..."})})})]}):e(P,{pay_func:()=>function(){if(!1===r&&l(!0),!0===r&&l(!1),""===c||""==A.reseau)m("Choisissez votre operateur"),F({type:"CHANGE/NAME_CARD",payload:{reseau_card:""}});else{if(b(!0),x)return;b(!0),m(""),F({type:"CHANGE/NAME_CARD",payload:{reseau_card:c}})}}()})]}),h&&e("iframe",{src:f,height:"600",width:"100%",style:{border:"none"},name:"demo"})]})},U=({changeVisibleChargementFunc:i,changeVisibleChargementExitFunc:r,cancel_modal_func:l})=>{const[c,s]=n.useState(!1);n.useState(""),n.useState(""),n.useState("");const[d,m]=n.useState("");n.useState(!1),n.useState(!1);const[p,u]=n.useState(!1),[h,g]=n.useState(""),{state:f,dispatch:y}=_();n.useState(!1);const[x,v]=n.useState(!0),[N,k]=n.useState(!1),[w,E]=n.useState(!1);n.useState(!1),n.useState(!0),n.useState(!1);const[C,F]=n.useState("choice_section"),[O,G]=n.useState(!1),[M,B]=n.useState(!1),[z,$]=n.useState(""),[P,D]=n.useState(!1),[V,j]=n.useState(!0);return n.useEffect(()=>{console.log(f.num_client.length>4&&f.operator_name.length>0&&f.full_name.length>0&&f.email.length>0&&f.country_code>0&&P),f.num_client.length>4&&f.operator_name.length>0&&f.full_name.length>0&&f.email.length>0&&f.country_code>0&&P&&(async()=>{i(),await o.post(`${S}/transactions/requesttopay/integration`,{phoneNumber:`${f.num_client}`,phoneNumberRight:`${f.num_client_without_code}`,amount:`${f.price}`,reseau:`${f.operator_name}`,token:`${f.token}`,shop:`${f.id}`,first_name:`${f.full_name}`,email:`${f.email}`,reference:`${f.custom_id}`,otp:`${f.code_otp}`,callback_info:`${f.callback_info}`,description:`${f.description}`}).then(e=>{let t=0,a="MOOV CI"==f.operator_name||"FREE SN"==f.operator_name||"ORANGE CI"==f.operator_name||"WAVE CI"==f.operator_name||"ORANGE BF"==f.operator_name||"MOOV BF"==f.operator_name?e.data.order_id:e.data.reference;"MOOV CI"!=f.operator_name&&"FREE SN"!=f.operator_name&&"ORANGE CI"!=f.operator_name&&"WAVE CI"!=f.operator_name&&"ORANGE BF"!=f.operator_name&&"MOOV BF"!=f.operator_name||(r(),$(e.data.payment_url),E(!1),j(!1),B(!0));const n=setInterval(async()=>{const i=await o.get(`${S}/transactions/getrequesttopay/integration/${a}`),l=i.data.status;"SUCCESSFUL"!==l&&"SUCCESS"!==l&&"Successful"!==l||(t+=1,t<2&&(clearInterval(n),y({type:"CHANGE/REQUESTTOPAYINFO",payload:{externalId:i.data.externalId,amount:i.data.amount,status:i.data.status,partyId:i.data.payer.partyId}}),y({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"Paiement effectué",stopchargement:!0}}),setTimeout(()=>{if(f.callback&&"function"==typeof f.callback)f.callback();else if(void 0!==f.callback_url){const t=new URL(f.callback_url);f.callback_url=t.searchParams&&t.searchParams.toString()?`${f.callback_url}&id_transaction=${e.data.reference}&status=SUCCESSFUL`:`${f.callback_url}?id_transaction=${e.data.reference}&status=SUCCESSFUL`,window.location.href=f.callback_url}},2e3))),"FAILED"===l&&(clearInterval(n),y({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"Veuillez verifier votre numero ou votre solde.",stopchargement:!0}}),setTimeout(()=>{if(r(),f.callback&&"function"==typeof f.callback)f.callback();else if(void 0!==f.callback_url){const e=new URL(f.callback_url);f.callback_url=e.searchParams&&e.searchParams.toString()?`${f.callback_url}&id_transaction=${a}&status=FAILED`:`${f.callback_url}?id_transaction=${a}&status=FAILED`,window.location.href=f.callback_url}},5e3))},5e3);setTimeout(async()=>{const e=(await o.get(`${S}/transactions/getrequesttopay/integration/${a}`)).data.status;"FAILED"!==e&&"INPROGRESS"!==e&&"ACCEPTED"!==e&&"INITIATED"!==e&&"PRE_INITIATED"!==e&&"PENDING"!==e&&"IN PENDING STATE"!==e||(y({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"Vous n'avez pas accepter la transaction",stopchargement:!0}}),setTimeout(()=>{if(r(),f.callback&&"function"==typeof f.callback)f.callback();else if(void 0!==f.callback_url){const e=new URL(f.callback_url);f.callback_url=e.searchParams&&e.searchParams.toString()?`${f.callback_url}&id_transaction=${a}&status=FAILED`:`${f.callback_url}?id_transaction=${a}&status=FAILED`,window.location.href=f.callback_url}},5e3)),clearInterval(n)},18e4)}).catch(e=>{"Token API invalid"===e.response.data.message&&y({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"Veuillez contacter l'administrateur du site.",stopchargement:!0}})})})()},[f.num_client,f.operator_name,f.full_name,f.email,f.country_code,P]),t(a,{children:["modal_section"===C&&t(a,{children:[e("div",{className:"pay_with",children:"PAYER AVEC :"}),e(b,{choice_local_func:()=>(k(!1),v(!1),void E(!0))}),e(A,{choice_cardBank_func:()=>(k(!0),v(!1),void E(!1))}),e(H,{onClickCancel:()=>l()})]}),N&&e(L,{}),w&&e(U,{changeVisibleChargementFunc:()=>{G(!0)},changeVisibleChargementExitFunc:()=>G(!1)}),"choice_section"===C&&V&&t(a,{children:[e(T,{}),e("div",{className:"error_text_operator",style:{display:p?"block":"none"},children:h}),e(R,{send_pay_form:c,setnum_exist_true:()=>{},setnum_exist_false:()=>{}}),e(I,{pay_func:()=>(!1===c&&s(!0),!0===c&&s(!1),void(""===f.operator_name?(u(!0),m("Choisissez un operateur mobile")):(u(!1),m(""),D(!0))))})]}),M&&e("iframe",{src:z,height:"600",width:"100%",style:{border:"none"},name:"demo"})]})};let q;const Y=r(q||(q=(e=>e)`
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


      
`)),Q=({isVisible:i})=>{const{state:r,dispatch:o}=_(),[l,c]=n.useState(!1);return n.useEffect(()=>{!0===i&&(c(!0),o({type:"CHANGE/REQUESTMESSAGE",payload:{paiement_request_verify_msg:"En attente du paiement.",stopchargement:!1}})),!1===i&&c(!1)},[i]),t(a,{children:[e(Y,{}),e("div",{className:"chargement_container",style:{display:l?"flex":"none"},children:t("div",{className:"message_container",style:{backgroundColor:"Paiement effectué"===r.paiement_request_verify_msg?"green":"#D45D00"},children:[e("div",{className:"loader",style:{display:r.stopchargement?"none":"block"}}),e("div",{className:"request_msg",children:r.paiement_request_verify_msg})]})})]})},J=({isOpen:i,cancel_modal:r,cancel_modal_func:o,name_marchand:l,reference_marchand:c})=>{const[s,d]=n.useState(!0),[m,p]=n.useState(!1),[u,h]=n.useState(!1),[g,y]=n.useState(!1);return _(),t(a,{children:[e(f,{}),e(Q,{isVisible:g}),e("div",{className:"modal_container",style:{position:"fixed !important",zIndex:"10000000000 !important",transition:"all 2s",transform:i&&!1===r?"scale(1)":"scale(0.6)",display:i&&!1===r?"flex":"none"},children:t("div",{className:"modal",children:[t("div",{className:"modal_header",children:[e("div",{className:"logo_container",children:e("img",{className:"logo",src:"https://api.feexpay.me/api/static/feexpay_logo-h.png",alt:"feexpay"})}),t("div",{className:"header_text",children:[e("div",{className:"feexpay_close_btn",onClick:()=>o()}),t("div",{className:"marchant_name",children:["MARCHAND : ",l]})," ",t("div",{className:"id_info",children:[" ID : ",c]})]})]}),t("div",{className:"padding_add",style:{paddingLeft:"2rem",paddingRight:"2rem",height:"94%",overflowY:"scroll"},children:[s&&t(a,{children:[e("div",{className:"pay_with",children:"PAYER AVEC :"}),e(b,{choice_local_func:()=>(p(!1),d(!1),void h(!0))}),e(A,{choice_cardBank_func:()=>(p(!0),d(!1),void h(!1))}),e(H,{onClickCancel:()=>o()})]}),m&&e(L,{}),u&&e(U,{changeVisibleChargementFunc:()=>{y(!0)},changeVisibleChargementExitFunc:()=>y(!1)})]}),t("div",{className:"secure_by_feexpay",children:[e("div",{className:"lock_line"}),e("div",{className:"img_lock_container",children:e("img",{className:"img_lock",src:"https://api.feexpay.me/api/static/svg/icons8-lock.svg",alt:"icon lock"})}),e("div",{className:"lock_text",children:"Sécurisé par FeexPay"})]}),e("div",{className:"secure_by_feexpay",style:{flexDirection:"column"},children:t("div",{className:"lock_text",children:["En payant via ce plugin, vous acceptez les ",e("a",{href:"https://feexpay.me/termesconditions",target:"_blank",style:{color:"#D45D00",textDecoration:"none"},children:"conditions générales d'utilisation"})," de FeexPay."]})}),e("div",{className:"footer_modal_container",children:e("div",{className:"footer_modal"})})]})})]})},W=({amount:i,token:r,id:l,callback:c,callback_url:s,description:d,callback_info:m,reference:u,fieldsToHide:_,buttonText:g,buttonStyles:f,buttonClass:y,defaultValueField:x})=>{const[b,v]=n.useState(!1),[N,k]=n.useState(!0),[w,E]=n.useState(!1),[C,A]=n.useState(""),[F,T]=n.useState(""),O=i;return n.useEffect(()=>{!async function(){await o.get(`${S}/shop/${l}/get_shop`).then(e=>{const t=e.data;t&&(A(t.name),T(t.reference),E(!0))}).catch(e=>{"Le format de l'id est"===e.response.data.message&&(A(""),T(""),E(!1))})}()},[]),e(a,{children:t(p,{amount:O,token:r,id:l,callback:c,callback_url:s,description:d,callback_info:m,reference:u,fieldsToHide:_,buttonText:g,buttonStyles:f,buttonClass:y,defaultValueField:x,children:[e(J,{isOpen:b,cancel_modal:N,cancel_modal_func:()=>(v(!1),void k(!0)),name_marchand:C,reference_marchand:F}),e(h,{open_modal:()=>(v(!0),void k(!1)),feexVisisbleBtn:w,buttonText:g,buttonStyles:f,buttonClass:y})]})})};export{W as default};
