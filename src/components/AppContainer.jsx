import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import { SearchInput } from "./SearchInput";
import Filter from "./Filter";
import { FlagsContainer } from "./FlagsContainer";

// CONTEXTS:
import { AllCountriesContext } from "../context/AllCountriesContext";

function AppContainer() {
    const [allCountries, setAllCountries] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const { data } = await axios.get("https://restcountries.com/v3.1/all");

        setAllCountries(data);
    }

    return (
        <div className="App">
            <Header />
            <AllCountriesContext.Provider value={allCountries}>
                <SearchInput />
            </AllCountriesContext.Provider>
        </div>
    );
}

export default AppContainer;
