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
        
        
    }

    .modal{
       display:flex;
       flex-direction:column;
       width:35%;
       height:92%;
       background-color:white;

       color:black;

      
    }

    .modal .modal_header{
        display:flex;
        flex-direction:row;
        width:100%;
        margin-bottom:4rem
    }

    .modal .header_text{
        font-size:0.6rem;
        color:black;
        width:50%;
        text-align:right;
        
        
    }
    .modal .logo_container{
        width:50%;
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
        background-image:url("http://localhost:40/motif_footer.svg");
        background-size:cover;
        background-position:center;
        

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
