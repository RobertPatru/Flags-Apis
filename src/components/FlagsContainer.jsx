import React, { useContext, useEffect, useState } from "react";

import FlagCard from "./FlagCard";

import { AllCountriesContext } from "../context/AllCountriesContext";

function FlagsContainer({ whatToRender }) {
    const countriesFromContext = useContext(AllCountriesContext);
    let wordToSearchFor = new RegExp(whatToRender.toLowerCase());

    console.log(wordToSearchFor);

    if (countriesFromContext !== []) {
        if (wordToSearchFor === "") {
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
            let a = ["guam", "romania", "nimic"];
            // WOK IN HERE
            // WOK IN HERE
            // WOK IN HERE
            // WOK IN HERE
            // WOK IN HERE
            // WOK IN HERE
            // WOK IN HERE
            // let ceva = countriesFromContext.filter( country => {
                //     wordToSearchFor.test(country.name.common.toLowerCase());
                //     console.log(country.name.common.toLowerCase());
                // } )
            let ceva = a.filter((word) => {
                wordToSearchFor.test(word.toLowerCase());
            });
            console.log(ceva);
        }
    } else {
        console.log("All Countries is empty!!!!");
    }
}

export { FlagsContainer };
