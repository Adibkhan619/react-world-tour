import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'



const Countries = () => {

    const [countries, setCountries] = useState([]);

    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[]);
    
    
    const handleVisitedCountry = country => {
        console.log(country);
        console.log('add this to your visited countries');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    return (
        <div>
            <h1>Countries: {countries.length}</h1>
            <h2>Visited Countries: {visitedCountries.length}</h2>
            <ul>
                {   
                    visitedCountries.map(country => <li key={country.cca3}>{country}</li>)
                }
            </ul>
            <div className="country-container">
                
                {
                countries.map(country => 
                <Country 
                    key = {country.cca3} 
                    country = {country}
                    handleVisitedCountry = {handleVisitedCountry}>                  
                    </Country>)
            }
            </div>
            
            
        </div>
    );
};

export default Countries;