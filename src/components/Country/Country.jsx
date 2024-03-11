import { useState } from 'react';
import './Country.css'

const Country = ({country , handleVisitedCountry}) => {
    // console.log(country);
    const { name, flags, capital, population, cca3
    } = country;

    const [visited, setVisited] = useState(false);


    const handleClick = () => {
        setVisited(!visited);
    }

    // console.log(handleVisitedCountry);

    return (
        <div className={`country ${visited? 'visited': 'not-visited'}`}>
   
            <img src={flags.png} alt="" />
                <h2 style={{color: visited? 'red': 'black'}}>Name: {name.common}</h2>
                <h3>Capital: {capital} </h3>
                <h3>Population: {population} </h3>
                <p><small>Code: {cca3}</small></p>
                <button onClick={() => handleVisitedCountry(country.name.common)}>Mark Visited</button>
                <button onClick={handleClick}>{visited ? 'Visited':'Going'}</button>
                <br />
                <p>{visited ? ' I have visited this country': 'I want to go there'}</p>
                
            

            


        </div>
    );
};

export default Country;