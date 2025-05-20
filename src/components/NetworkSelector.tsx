import React, { useEffect } from 'react';
import { Network, Country } from '../types/index';
import { getNetworksForCountry } from '../utils/paymentUtils';

interface NetworkSelectorProps {
  selectedNetwork: Network;
  onChange: (network: Network) => void;
  country: Country;
}

const NetworkSelector: React.FC<NetworkSelectorProps> = ({ 
  selectedNetwork, 
  onChange,
  country 
}) => {
  const availableNetworks = getNetworksForCountry(country);
  
  // Update the network if the current selection is not available for the selected country
  useEffect(() => {
    if (availableNetworks.length > 0 && !availableNetworks.includes(selectedNetwork)) {
      onChange(availableNetworks[0]);
    }
  }, [country, selectedNetwork, availableNetworks, onChange]);

  return (
    <div className="relative">
      <select
        value={selectedNetwork}
        onChange={(e) => onChange(e.target.value as Network)}
        className="block w-full px-4 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        {availableNetworks.map((network) => (
          <option key={network} value={network}>
            {network.replace('_', ' ')}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
};

export default NetworkSelector;