import { Network, Country } from '../types/index';
interface NetworkSelectorProps {
    selectedNetwork: Network;
    onChange: (network: Network) => void;
    country: Country;
}
declare const NetworkSelector: React.FC<NetworkSelectorProps>;
export default NetworkSelector;
