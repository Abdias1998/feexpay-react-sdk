
import FeexPayButton from './components/FeexPayButton';
import { FeexPayProvider } from './context/FeexPayContext';

function App() {

  // const handlePaymentCallback = (response: { reference: string; status: string }) => {
  //   console.log('Payment response:', response);
   
    
  //   // You can perform additional operations based on the payment status
  //   switch(response.status) {
  //     case 'SUCCESSFUL':
  //     case 'SUCCESS':
  //       console.log('Payment was successful! Reference:', response);
  //       // You could update your database, show a success message, etc.
  //       break;
  //     case 'FAILED':
  //       console.log('Payment failed. Reference:', response);
  //       // You could show an error message, offer retry options, etc.
  //       break;
  //     case 'INSUFFICIENT_FUNDS':
  //       console.log('Insufficient funds. Reference:', response);
  //       // You could suggest alternative payment methods
  //       break;
  //     case 'TIMEOUT':
  //       console.log('Payment verification timed out. Reference:', response);
  //       // You could suggest checking status later
  //       break;
  //   }
  // };
  
  return (

      // <FeexPayProvider>
    
      //           <FeexPayButton 
      //             amount={100}
      //             description="Test Payment"
      //             // id="671a774c706593edb3dc4ab2"
      //             token="fp_HHNoQGt9Vn8KpZoLaBkG3uEeKpLUYBaHUZIZXJE3Xgv0OKG2tK3A7PtlytctikrJ"
                  
      //             id="679a12dedea4a0b5d416ea87"
      //             customId='23455'
      //             // error_callback_url='https://example.com/callback/error'
      //             // callback_url="https://example.com/callback"
      //             callback_info={{description:"Test Payment",fullname:"John Doe",email:"john.doe@example.com",phone:"12345678"}}
      //             mode="LIVE"
      //             // fields_to_hide={["email", "name"]}
      //             callback={(response)=>{
      //             console.log(response);

      //             }}
      //             // buttonText="Payer maintenant"
      //             // buttonClass="bg-primary-blue hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
      //           case='ALL'
      //           currency='XOF'
      //           />
      // </FeexPayProvider>


<FeexPayProvider>

<FeexPayButton 
  // Montant de la transaction en XOF
  amount={100}

  // Description affichée dans la modale de paiement
  description="Test Payment"

  // Clé API sécurisée : SANDBOX pour test, LIVE pour production
  token="fp_HHNoQGt9Vn8KpZoLaBkG3uEeKpLUYBaHUZIZXJE3Xgv0OKG2tK3A7PtlytctikrJ"
  
  // ID de la boutique 
  id="679a12dedea4a0b5d416ea87"

  // Référence personnalisée (chaîne aléatoire unique)
  customId='23455'

  // URL de redirection en cas d’échec du paiement (optionnel)
    error_callback_url='https://example.com/callback/error'

  // URL de redirection après succès du paiement (optionnel si callback utilisé)
    callback_url="https://example.com/callback"

  // Données supplémentaires à associer à la transaction(optionnel)
  callback_info={{
    description: "Test Payment",
    fullname: "Abdias ADINSI",
    email: "abdias.adinsi@gmail.com",
    phone: "12345678"
  }}

  // Mode de paiement : "SANDBOX" (test) ou "LIVE" (production)
  mode="LIVE"

  // Champs à cacher dans le formulaire de paiement (optionnel)
  // fields_to_hide={["email", "name"]}

  // Fonction appelée après le paiement (réussi ou échoué)
  callback={(response) => {
    console.log(response);
  }}

  // Texte du bouton (optionnel si tu veux un texte personnalisé)
  // buttonText="Payer maintenant"

  // Style personnalisé du bouton (CSS classes tailwind ou bootstrap)
  // buttonClass="bg-primary-blue hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"

  // Type de paiement : MOBILE, CARD, WALLET(Laisser vide pour afficher les trois)
  case=''

  // Devise utilisée pour la transaction (ex: XOF, USD, CAD, XAF)
  currency='XOF'
/>

</FeexPayProvider>
  );
}

export default App;