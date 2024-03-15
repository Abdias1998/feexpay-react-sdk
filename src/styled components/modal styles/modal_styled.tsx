import {createGlobalStyle} from 'styled-components';

export const FeexPayModalStylesGlobal = createGlobalStyle`
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

    
`;
