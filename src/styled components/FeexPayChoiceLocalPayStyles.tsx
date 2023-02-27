import styled,{createGlobalStyle} from 'styled-components';

export const FeexPayChoiceLocalPayStyles = styled.div`
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

 
   

`;
