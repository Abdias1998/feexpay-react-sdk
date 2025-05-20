import React, { useState } from 'react';
import FeexPayButton from './components/FeexPayButton';
import { FeexPayProvider } from './context/FeexPayContext';

function App() {
  const [paymentResult, setPaymentResult] = useState<{ reference: string; status: string } | null>(null);
  
  const handlePaymentCallback = (response: { reference: string; status: string }) => {
    console.log('Payment response:', response);
    setPaymentResult(response);
    
    // You can perform additional operations based on the payment status
    switch(response.status) {
      case 'SUCCESSFUL':
        console.log('Payment was successful! Reference:', response.reference);
        // You could update your database, show a success message, etc.
        break;
      case 'FAILED':
        console.log('Payment failed. Reference:', response.reference);
        // You could show an error message, offer retry options, etc.
        break;
      case 'INSUFFICIENT_FUNDS':
        console.log('Insufficient funds. Reference:', response.reference);
        // You could suggest alternative payment methods
        break;
      case 'TIMEOUT':
        console.log('Payment verification timed out. Reference:', response.reference);
        // You could suggest checking status later
        break;
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <FeexPayProvider>
        <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="flex justify-center mb-6">
              <div className="flex items-center">
                <div className="h-6 w-6 bg-orange-500 rounded mr-2"></div>
                <span className="text-xl font-bold text-blue-900">FeexPay</span>
              </div>
            </div>
            
            <h1 className="text-xl font-bold text-center text-gray-800 mb-8">
              Payment Integration Demo
            </h1>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                This demo showcases the FeexPay payment integration with:
              </p>
            

              
              <div className="pt-4">
                <FeexPayButton 
                  amount={10000}
                  description="Test Payment"
                  // shop="671a774c706593edb3dc4ab2"
        
                  shop="67039ee09a5a46e953703504"
                  // apiToken="fp_HHNoQGt9Vn8KpZoLaBkG3uEeKpLUYBaHUZIZXJE3Xgv0OKG2tK3A7PtlytctikrJ"
                  apiToken="fp_uJsZXJz75CZ0OtJ0RTPKsIK5ivz9XwT2kuobGV0AzU1IfCqU9e4jCRYDzfvVA9te"
                  callbackUrl="https://example.com/callback"
                  mode="LIVE"
                  fields_to_hide={["email", "name"]}
                  callback={handlePaymentCallback}
                  // buttonText="Payer maintenant"
                  // buttonClass="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
                />
                
               
              </div>
            </div>
          </div>
        </div>
      </FeexPayProvider>
    </div>
  );
}

export default App;