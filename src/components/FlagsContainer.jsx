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
        } else {
            let newArrayOfCountries = [];

            countriesFromContext.forEach((country) => {
                if (wordToSearchFor.test(country.name.common.toLowerCase())) {
                    newArrayOfCountries.push(country);
                }
            });

            return (
                <div className="flags-container">
                    {newArrayOfCountries.map((country, index) => (
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
    } else {
        console.log("All Countries is empty!!!!");
    }
}

export { FlagsContainer };
