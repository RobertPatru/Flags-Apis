import React from "react";

function Filter() {
    return (
        <div className="filter">
            <label htmlFor="region">Filter by Region</label>

            <select name="region">
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default Filter;
