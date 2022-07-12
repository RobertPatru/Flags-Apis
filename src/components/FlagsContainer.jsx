import React, { useEffect, useState } from 'react'
import axios from 'axios';
import FlagCard from './FlagCard';

function FlagsContainer() {
    const [allCountries, setAllCountries] = useState([]);

    useEffect( () => {
        fetchData();
    }, []);
    
    async function fetchData() {
        const {data} = await axios.get("https://restcountries.com/v3.1/all");
        
        // HELP HERE, PLEASE
        setAllCountries(data);    
    }

    if (allCountries !== []) {
        return (
            <div className='flags-container'>
                {
                    allCountries.map( (country, index) => (
                        <FlagCard key={index} name={country.name.common} capital={country.capital} image={country.flags.svg} population={country.population} />
                     ) )
                }
            </div>
        )
    }
    else {
        console.log('All Countries is empty!!!!');
    }

}

export default FlagsContainer