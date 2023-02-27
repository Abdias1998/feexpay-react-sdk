import styled,{createGlobalStyle} from 'styled-components';

export const FeexPayCancelStyles = styled.div`
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
     

`;
