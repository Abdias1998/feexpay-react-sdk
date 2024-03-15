import {createGlobalStyle} from "styled-components"

export const NumInputStyles = createGlobalStyle` 
    .margin{
        margin-top:1.5rem;
        margin-bottom:1.5rem;
    }

    .feexpay_input_simple{
        border: 1px solid #ced4da;
        border-radius: 5px;
        outline:none;
        /*border-bottom: solid 1.5px #00000071;*/
        padding-bottom:10px;
        padding-top:10px;
        padding-left:10px;
        width: -webkit-fill-available;
        margin-bottom: 1.5rem;
        margin-top: 5px;
        background-color: transparent;
    }
    
    
    .num_operator_card{
        width:100%;
        display:flex;
        flex-direction:column;

    }
    .num_input_container{
        width:100%;
        display:flex;
        flex-direction:row;
        align-items:center;
        border: 1px solid #ced4da;
        border-radius: 5px;
        /*border-bottom:solid 2px black;*/
    }
    .flag{
        width:10%;
        text-align: center !important;
    }
    .input_num{
        border:none !important;
        outline:none !important;
        background-color: transparent;
        padding:10px !important;
        width: -webkit-fill-available;
    }
    .flag .img_flag{
        width:25px !important;
        text-align: center;
    }

    .num_flag_container{
        width:30%;
        padding:0px;
        background-color:white;
        box-shadow:1px 1px 20px 0.2px lightgrey;
        display:flex;
        flex-direction:column;
        transform:translateY(40%);
        position:absolute;
        
    }
    .flag_info_container{
        transition:all 1s;
        display:flex;
        justify-content:center;
        align-items:center;
        padding:3px;
        padding-left:0px;
        cursor:pointer;

    }
    .flag_info_container:hover{
        transition:all 1s;
        background-color:whitesmoke;

    }

    .flag_container img{
        width:25px;
    }
    .flag_conyainer{
        width:10%;
        padding-top:5px;
    }
    .flag_name{
        width:90%;
        text-align:right;
        padding-right:1rem;
        font-size:0.8rem;
    }
    .error_text_operator_input{
        font-size:0.6rem;
        color:crimson;
        margin-top:0.5rem;
    }
    @media screen and (max-width:700px) {
         .num_flag_container{
             width:85%;
        }

    }
`