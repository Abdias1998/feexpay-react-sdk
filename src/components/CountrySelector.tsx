
import { Country } from '../types/index';

interface CountrySelectorProps {
  selectedCountry: Country;
  onChange: (country: Country) => void;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({ selectedCountry, onChange }) => {
  return (
    <div className="relative">
      <select
        value={selectedCountry}
        onChange={(e) => onChange(e.target.value as Country)}
        className="block w-full px-2 py-2 pr-8 border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-primary-orange text-xs" 
      >
        <option value="BENIN">
          🇧🇯 Benin
        </option>
        <option value="BURKINA_FASO">
          🇧🇫 Burkina Faso
        </option>
        <option value="CONGO_BRAZZAVILLE">
          🇨🇬 Congo Brazzaville
        </option>
        <option value="COTE_D_IVOIRE">
          🇨🇮 Côte d'Ivoire
        </option>
        <option value="SENEGAL">
          🇸🇳 Sénégal
        </option>
        <option value="TOGO">
          🇹🇬 Togo
        </option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
};

export default CountrySelector;