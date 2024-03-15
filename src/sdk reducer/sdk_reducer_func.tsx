import React from "react";

export function reducer(state: any, action: any) {
  try {
    switch (action.type) {
      case "CHANGE/OPERATOR":
        return { ...state, ...action.payload };
        break;


      case "CHANGE/COUNTRY_CODE":
        console.log("COUNTRY_CODE")
        console.log(action.payload)
        return {
          ...state,
          country_code: action.payload.country_code
        };
        break;


      case "CHANGE/OPERATOR_NAME":
        console.log("OPERATOR_NAME")
        console.log(action.payload)
        return {
          ...state,
          operator_name: action.payload.operator_name
        };
        break;

      // case "CHANGE/NUMERO":
      //   let num_client_state = ``;
      //   switch (action.payload.country) {
      //     case 1:
      //       if (Number.isNaN(parseInt(action.payload.num_client))) {
      //         return { ...state, ...action.payload };
      //       } else {
      //         num_client_state = `229${action.payload.num_client}`;
      //
      //         return {
      //           ...state,
      //           num_client_without_code: action.payload.num_client,
      //           num_client: num_client_state,
      //         };
      //       }
      //
      //       break;
      //     case 2:
      //       num_client_state = `228${action.payload.num_client}`;
      //
      //       return { ...state, num_client: num_client_state };
      //       break;
      //     case 3:
      //       num_client_state = `225${action.payload.num_client}`;
      //
      //       return { ...state, num_client: num_client_state };
      //       break;
      //     case 4:
      //       num_client_state = `250${action.payload.num_client}`;
      //
      //       return { ...state, num_client: num_client_state };
      //       break;
      //     default:
      //       return { ...state, ...action.payload };
      //       break;
      //   }
      //
      //   break;


      case "CHANGE/NUMERO_CLIENT":
        let num_client_state = ``;
        num_client_state = `${state.country_code}${action.payload.num_client}`;
        // console.log(num_client_state)
        // num_client_state = `229${action.payload.num_client}`;

        return {
          ...state,
          num_client_without_code: action.payload.num_client,
          num_client: num_client_state,
        };
        // break;

        // switch (action.payload.country) {
        //   case 1:
        //     if (Number.isNaN(parseInt(action.payload.num_client))) {
        //       return { ...state, ...action.payload };
        //     } else {
        //       num_client_state = `229${action.payload.num_client}`;
        //
        //       return {
        //         ...state,
        //         num_client_without_code: action.payload.num_client,
        //         num_client: num_client_state,
        //       };
        //     }
        //
        //     break;
        //   case 2:
        //     num_client_state = `228${action.payload.num_client}`;
        //
        //     return { ...state, num_client: num_client_state };
        //     break;
        //   case 3:
        //     num_client_state = `225${action.payload.num_client}`;
        //
        //     return { ...state, num_client: num_client_state };
        //     break;
        //   case 4:
        //     num_client_state = `250${action.payload.num_client}`;
        //
        //     return { ...state, num_client: num_client_state };
        //     break;
        //   default:
        //     return { ...state, ...action.payload };
        //     break;
        // }
        break;

      case "CHANGE/CODE_OTP":
        return {
          ...state,
          code_otp: action.payload.code_otp,
        };
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
        // console.log('"rfnjhfvhfdnvfghbn')
        return { ...state, ...action.payload };
        break;

      case "CHANGE/FULLNAME":
        // console.log('je me suis gtht')
        return { ...state, ...action.payload };
        break;

      case "CHANGE/NAME_CARD":
        return { ...state, ...action.payload };
        break;

      default:
        // console.log("je suis coincé ici")
        throw new Error("Message");
    }
  } catch (error) {
    console.error('Une erreur est survenue dans le reducer :', error);
    // Vous pouvez gérer l'erreur ici ou la propager vers le composant pour affichage
    // Vous pouvez également choisir de ne rien faire et simplement laisser l'erreur se propager
    // aux composants qui utilisent le reducer.
    return state; // Renvoyer l'état actuel en cas d'erreur
  }
}
