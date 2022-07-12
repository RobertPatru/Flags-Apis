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
        setAllCountries(data)
        console.log(allCountries);  
    }

    return (
        <div className='flags-container'>
            {
                allCountries.map( (country) => {
                    <FlagCard />
                } )
            }
        </div>
    )
}

export default FlagsContainer