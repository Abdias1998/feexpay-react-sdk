import React from "react";

export function reducer(state: any, action: any) {
  switch (action.type) {
    case "CHANGE/OPERATOR":
      return { ...state, ...action.payload };
      break;

    case "CHANGE/NUMERO":
      let num_client_state = ``;
      switch (action.payload.country) {
        case 1:
          if (Number.isNaN(parseInt(action.payload.num_client))) {
            return { ...state, ...action.payload };
          } else {
            num_client_state = `229${action.payload.num_client}`;

            return {
              ...state,
              num_client_without_code: action.payload.num_client,
              num_client: num_client_state,
            };
          }

          break;

        case 2:
          num_client_state = `228${action.payload.num_client}`;

          return { ...state, num_client: num_client_state };
          break;
        case 3:
          num_client_state = `225${action.payload.num_client}`;

          return { ...state, num_client: num_client_state };
          break;
        case 4:
          num_client_state = `250${action.payload.num_client}`;

          return { ...state, num_client: num_client_state };
          break;

        default:
          return { ...state, ...action.payload };
          break;
      }

      break;

    case "CHANGE/NUMWITHOUTCODE":
      return {
        ...state,
        num_client_without_code: action.payload.num_client_without_code,
      };
      break;

    case "CHANGE/REQUESTMESSAGE":
      return {
        ...state,
        paiement_request_verify_msg: action.payload.paiement_request_verify_msg,
        stopchargement: action.payload.stopchargement,
      };
      break;

    case "CHANGE/REQUESTTOPAYINFO":
      return { ...state, requesttopayinfo: { ...action.payload } };
      break;

    
    case "CHANGE/EMAIL":
     
      return {...state,...action.payload};
      break;
    
    case "CHANGE/FULLNAME":
     
      return {...state,...action.payload};
      break;
    
      case "CHANGE/NAME_CARD":
     
        return {...state,...action.payload};
      break;
      
    default:
      throw new Error("Message");
  }
}
