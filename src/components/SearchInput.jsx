import React from "react";

function SearchInput({ func }) {
    function getWord(e) {
        console.log(e.target.value);
    }

    return (
        <div className="input-container row-Y-center">
            <ion-icon name="search-outline"></ion-icon>
            <input
                type="search"
                placeholder="Search for a country..."
                onChange={getWord}
            />
        </div>
    );
}

export { SearchInput };
