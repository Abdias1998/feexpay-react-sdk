import {createGlobalStyle} from "styled-components"

export const NumInputStyles = createGlobalStyle` 
    .margin{
        margin-top:1rem;
        margin-bottom:1rem;
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
    
    .custom-select {
      display: inline-block;
      width: 100%;
      height: calc(1.5em + 0.75rem + 2px);
      padding: 0.375rem 1.75rem 0.375rem 0.75rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #495057;
      vertical-align: middle;
      background: #fff url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") right 0.75rem center/8px 10px no-repeat;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    
    .custom-select:focus {
      border-color: #80bdff;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
    
    .custom-select:focus::-ms-value {
      color: #495057;
      background-color: #fff;
    }
    
    .custom-select[multiple], .custom-select[size]:not([size="1"]) {
      height: auto;
      padding-right: 0.75rem;
      background-image: none;
    }
    
    .custom-select:disabled {
      color: #6c757d;
      background-color: #e9ecef;
    }
    
    .custom-select::-ms-expand {
      display: none;
    }
    
    .custom-select:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 #495057;
    }
    
    .custom-select-sm {
      height: calc(1.5em + 0.5rem + 2px);
      padding-top: 0.25rem;
      padding-bottom: 0.25rem;
      padding-left: 0.5rem;
      font-size: 0.875rem;
    }
    
    .custom-select-lg {
      height: calc(1.5em + 1rem + 2px);
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      padding-left: 1rem;
      font-size: 1.25rem;
    }
    
    @media screen and (max-width:700px) {
         .num_flag_container{
             width:85%;
        }

    }
`