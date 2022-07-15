import React from "react";
import { Link } from 'react-router-dom';

function FlagCard({image, name, population, region, capital}) {
    function sendDetails(event) {
        console.log(event.target);
        console.log("click");
    }

    return (
        <div className="card" onClick={sendDetails}>
            {/* <Link to='/details'> */}
            <img src={image} alt={name} className="country-flag-img" />
            <div>
                <h1 className="country-name">{name}</h1>
                <h3 className="population">Population: <span> {population} </span></h3>
                <h3 className="region">Region: <span> {region} </span></h3>
                <h3 className="capital">Capital: <span> {capital} </span></h3>
            </div>
            {/* </Link> */}
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