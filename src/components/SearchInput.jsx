import React, { useState } from "react";
import { FlagsContainer } from "./FlagsContainer";

function SearchInput({ func }) {
    let [word, setWord] = useState('');

    function getWord(e) {
        setWord(e.target.value);
    }

    return (
        <>
            <div className="input-container row-Y-center">
                <ion-icon name="search-outline"></ion-icon>
                <input
                    type="search"
                    placeholder="Search for a country..."
                    onChange={getWord}
                />
            </div>
            <FlagsContainer whatToRender={word} />
        </>
    );
}

export { SearchInput };
