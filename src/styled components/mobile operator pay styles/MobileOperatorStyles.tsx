import {createGlobalStyle} from 'styled-components';

export const MobileOperatorSectionStyles = createGlobalStyle`
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
`;
