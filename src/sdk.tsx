import { createRoot } from 'react-dom/client';
import { createElement } from 'react';
import { FeexPayProvider } from './context/FeexPayContext';
import FeexPayButton from './components/FeexPayButton';
import { PaymentConfig } from './types';

interface FeexPaySDKConfig extends Omit<PaymentConfig, 'shop' | 'apiToken'> {
  id: string; // shop id
  custom_button?: boolean;
  id_custom_button?: string;
  error_callback_url?: string;
  token: string; // apiToken
  callback_url?: string; // alias for callbackUrl
  currency?: string;
  case?: string;
  callback_info?: Record<string, unknown>;
  custom_id?: string; // customId alias
}

const FeexPaySDK = {
  init: (targetElementId: string, config: FeexPaySDKConfig) => {
    const targetElement = document.getElementById(targetElementId);
    
    if (!targetElement) {
      // console.error(`FeexPay: Target element with ID "${targetElementId}" not found`);
      return;
    }

    // Map SDK config to component props
    const componentConfig = {
      amount: config.amount,
      description: config.description || '',
      shop: config.id, // map id to shop
      apiToken: config.token, // map token to apiToken
      callbackUrl: config.callback_url,
      mode: config.mode || 'LIVE',
      customId: config.custom_id || config.customId,
      fields_to_hide: config.fields_to_hide,
      currency: config.currency,
      case: config.case ,
      callback_info: config.callback_info,
      error_callback_url: config.error_callback_url,
      custom_button: config.custom_button,
      id_custom_button: config.id_custom_button
    };

    // Create a container for the React app
    const root = createRoot(targetElement);
    
    // Render the FeexPayButton component
    root.render(
      createElement(FeexPayProvider, null, 
        createElement(FeexPayButton, componentConfig)
      )
    );

    // If a custom button is specified, attach event listener
    if (config.custom_button && config.id_custom_button) {
      const customButton = document.getElementById(config.id_custom_button);
      if (customButton) {
        customButton.addEventListener('click', () => {
          // Trigger the payment flow
          const event = new CustomEvent('feexpay:trigger');
          targetElement.dispatchEvent(event);
        });
      } else {
        // console.error(`FeexPay: Custom button with ID "${config.id_custom_button}" not found`);
      }
    }

    // Return public API
    return {
      trigger: () => {
        const event = new CustomEvent('feexpay:trigger');
        targetElement.dispatchEvent(event);
      }
    };
  }
};

// Export for module usage
export default FeexPaySDK;

// Expose to global scope for script tag usage
declare global {
  interface Window {
    FeexPayButton: typeof FeexPaySDK;
  }
}

window.FeexPayButton = FeexPaySDK;
