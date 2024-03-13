import styled,{createGlobalStyle} from "styled-components"

export const FeexButtonPayStyles = createGlobalStyle`
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
`;
