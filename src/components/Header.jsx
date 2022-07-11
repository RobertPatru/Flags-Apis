import React from "react";

function Header() {
    return (
        <header className="aling-items-flex row-space-between ">
            <span>Where in the world?</span>
            <button>
            <ion-icon name="moon-outline"></ion-icon> Dark Mode
            </button> 
        </header>
    )
}

export default Header;
