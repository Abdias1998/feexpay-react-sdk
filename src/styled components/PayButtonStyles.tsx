import styled,{createGlobalStyle} from "styled-components"

export const PayButtonStyles = createGlobalStyle`
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
        width:60%;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:row;
        cursor:pointer;
        border-radius:10px;

      }
      .button_text{
         font-size:1.2rem;
         font-weight:500;
        
      }
      .secure_by_feexpay{
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        margin-top:2rem;
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
      @media screen and (max-width:960px) {
      
        .button_pay{
          width:100%;
         }

   
    }
      
`;
