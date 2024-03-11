import './Country.css'

const Country = ({ country }) => {
    console.log(country);
    const { name, flags, capital, population
    } = country;

    return (
        <div className="country">
            <div>
                <h2>Name: {name?.common}</h2>
                <h3>Capital: {capital} </h3>
                <h3>Population: {population} </h3>
            </div>
            
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;