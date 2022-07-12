import React from "react";

function FlagCard({image, name, population, region, capital, id}) {
    return (
        <div className="card">
            <img src={image} alt={name} className="country-flag-img" />
            <div>
                <h1 className="country-name">{name}</h1>
                <h3 className="population">Population: <span> {population} </span></h3>
                <h3 className="region">Region: <span> {region} </span></h3>
                <h3 className="capital">Capital: <span> {capital} </span></h3>
                <span style={{display:"none"}}> {id} </span>
            </div>
        </div>
    )
}

FlagCard.defaultProps = {
    image: "https://flagcdn.com/w320/pe.png",
    name: "Peru",
    population: "32971846",
    region: "America",
    capital: "Lima",
    id: 1
}

export default FlagCard;