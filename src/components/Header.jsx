import React from "react";

function Header() {
    let darkTheme = true;

    function switchTheme() {
        const root = document.querySelector(':root');
        
        if (darkTheme) {
            darkTheme = false;
            
        } else {
            darkTheme = true;
        }

        console.log(darkTheme);
    }


    return (
        <header className="aling-items-flex row-space-between ">
            <span>Where in the world?</span>
            <button onClick={switchTheme}>
            <ion-icon name="moon-outline"></ion-icon> Dark Mode
            </button> 
        </header>
    )
}

export default Header;
