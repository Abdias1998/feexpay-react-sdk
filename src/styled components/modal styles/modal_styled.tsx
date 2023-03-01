import {createGlobalStyle} from 'styled-components';

export const FeexPayModalStylesGlobal = createGlobalStyle`
    
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

    
`;
