import React from 'react';
import { createRoot } from 'react-dom/client';
import { FeexPayButton, FeexPayProvider } from '../node_modules/@feexpay/react-sdk/dist/index.js';
import { feexpayConfig } from './config';

// Fonction de callback pour gérer la réponse du paiement
const handlePaymentCallback = (response) => {
  console.log('Réponse du paiement:', response);
  
  switch(response.status) {
    case 'SUCCESSFUL':
    case 'SUCCESS':
      console.log('Paiement réussi ! Référence:', response.reference);
      alert('Paiement réussi !');
      break;
    case 'FAILED':
      console.log('Paiement échoué. Référence:', response.reference);
      alert('Paiement échoué');
      break;
    case 'INSUFFICIENT_FUNDS':
      console.log('Fonds insuffisants. Référence:', response.reference);
      alert('Fonds insuffisants');
      break;
    case 'TIMEOUT':
      console.log('Timeout. Référence:', response.reference);
      alert('Timeout');
      break;
  }
};

// Création de l'application React sans JSX
function App() {
  return React.createElement(
    FeexPayProvider,
    feexpayConfig,
    React.createElement(
      FeexPayButton,
      {
        id: feexpayConfig.id,
        token: feexpayConfig.token,
        callback_url :"h",
        amount: 100,
        description: 'Test de paiement avec FeexPay',
        buttonText: "Payer maintenant",
        buttonClass: "bg-blue-500 hover:bg-blue-700 text-red font-bold py-2 px-4 rounded",
        mode :'LIVE',
        // currency:"CAD",
        // case : "CARD",

      }
    )
  );
}

// Rendu de l'application
const root = createRoot(document.getElementById('root'));
root.render(React.createElement(App));
