import React, { useContext, useEffect, useState } from "react";

import FlagCard from "./FlagCard";

import { AllCountriesContext } from "../context/AllCountriesContext";

function FlagsContainer({ whatToRender }) {
    const countriesFromContext = useContext(AllCountriesContext);
    let wordToSearchFor = new RegExp(whatToRender.toLowerCase());

    if (countriesFromContext !== []) {
        if (wordToSearchFor == "/(?:)/") {
            return (
                <div className="flags-container">
                    {countriesFromContext.map((country, index) => (
                        <FlagCard
                            key={index}
                            name={country.name.common}
                            capital={country.capital}
                            image={country.flags.svg}
                            population={country.population}
                        />
                    ))}
                </div>
            );
        } 
        else {
            return countriesFromContext.forEach((country, index) => {
                if (wordToSearchFor.test(country.name.common.toLowerCase())) {
                    console.log(country.name.common);
                    <FlagCard
                        key={index}
                        name={country.name.common}
                        capital={country.capital}
                        image={country.flags.svg}
                        population={country.population}
                    />;
                }
            });
        }
    } else {
        console.log("All Countries is empty!!!!");
    }
}

export { FlagsContainer };
