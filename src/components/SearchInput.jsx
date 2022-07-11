import React from "react";

function SearchInput() {
    return (
        <div className="input-container row-Y-center">
            <ion-icon name="search-outline"></ion-icon>
            <input type="search" placeholder="Search for a country..." />
        </div>
    )
}

export default SearchInput;
