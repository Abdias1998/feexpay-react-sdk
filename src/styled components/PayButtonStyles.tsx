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
      
`;
