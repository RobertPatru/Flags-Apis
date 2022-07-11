import React from "react";

function FlagCard({image, name, population, region, capital}) {
    return (
        <div className="card">
            <img src={image} alt={name} />
        </div>
    )
}

FlagCard.defaultProps = {
    image: "https://flagcdn.com/w320/pe.png",
    name: "Peru",
    population: "32971846",
    region: "America",
    capital: "Lima"
}

export default FlagCard;


TREBUIE SA FACI TARA, POPULATIA, REGIUENA, CONTAINER