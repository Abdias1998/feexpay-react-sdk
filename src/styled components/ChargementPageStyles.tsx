import {createGlobalStyle} from "styled-components"

export const ChargementPageStyles = createGlobalStyle`
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


      
`;
