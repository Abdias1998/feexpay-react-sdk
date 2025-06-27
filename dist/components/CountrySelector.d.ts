import React from 'react';
import { Country } from '../types/index';
interface CountrySelectorProps {
    selectedCountry: Country;
    onChange: (country: Country) => void;
}
declare const CountrySelector: React.FC<CountrySelectorProps>;
export default CountrySelector;
