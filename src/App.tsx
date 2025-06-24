import React from 'react';
import FeexPayButton from './components/FeexPayButton';
import { FeexPayProvider } from './context/FeexPayContext';

function App() {

  const handlePaymentCallback = (response: { reference: string; status: string }) => {
    console.log('Payment response:', response);
   
    
    // You can perform additional operations based on the payment status
    switch(response.status) {
      case 'SUCCESSFUL':
        console.log('Payment was successful! Reference:', response);
        // You could update your database, show a success message, etc.
        break;
      case 'FAILED':
        console.log('Payment failed. Reference:', response);
        // You could show an error message, offer retry options, etc.
        break;
      case 'INSUFFICIENT_FUNDS':
        console.log('Insufficient funds. Reference:', response);
        // You could suggest alternative payment methods
        break;
      case 'TIMEOUT':
        console.log('Payment verification timed out. Reference:', response);
        // You could suggest checking status later
        break;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <FeexPayProvider>
      
            
            
          
            
            <div className="space-y-4">
             
            

              
              <div className="pt-4">
                <FeexPayButton 
                  amount={100}
                  description="Test Payment"
                  // shop="671a774c706593edb3dc4ab2"
                  apiToken="fp_HHNoQGt9Vn8KpZoLaBkG3uEeKpLUYBaHUZIZXJE3Xgv0OKG2tK3A7PtlytctikrJ"
                  
                  shop="679a12dedea4a0b5d416ea87"
               
                  // callbackUrl="https://example.com/callback"
                  mode="LIVE"
                  fields_to_hide={["email", "name"]}
                  callback={handlePaymentCallback}
                  // buttonText="Payer maintenant"
                  // buttonClass="bg-primary-blue hover:bg-blue-900 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
                case=""
                currency="XOF"
                callback_info={{description:"Test Payment",fullname:"John Doe",email:"john.doe@example.com",phone:"12345678"}}
                />
               
              </div>
            </div>
          
        
      </FeexPayProvider>
    </div>
  );
}

export default App;