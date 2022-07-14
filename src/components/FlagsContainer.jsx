import React, { useContext, useEffect, useState } from 'react'

import FlagCard from './FlagCard';

import { AllCountriesContext } from '../context/AllCountriesContext';

function FlagsContainer() {
    const cointriesFromContext = useContext(AllCountriesContext);

    if (cointriesFromContext !== []) {
        return (
            <div className='flags-container'>
                {
                    cointriesFromContext.map( (country, index) => (
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

export { FlagsContainer };