import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'



const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

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
    const handleVisitedFlags = flag => {
        console.log(' adding flags ');
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
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
            <div className="flag-container">
                {
                    visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                }
            </div>
            <div className="country-container">
                
                {
                countries.map(country => 
                <Country 
                    key = {country.cca3} 
                    country = {country}
                    handleVisitedCountry = {handleVisitedCountry}
                    handleVisitedFlags = {handleVisitedFlags}>                  
                    </Country>)
            }
            </div>
            
            
        </div>
    );
};

export default Countries;