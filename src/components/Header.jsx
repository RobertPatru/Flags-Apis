import React, { useState } from "react";

function Header() {
    let darkTheme = true;
    let [themeMode, seThemeText] = useState('Dark Mode');

    function switchTheme() {
        const root = document.querySelector(':root');

        if (darkTheme) {
            darkTheme = false;
            seThemeText('Light Mode');
            
            root.style.setProperty('--background-color', 'hsl(0, 0%, 98%)');
            root.style.setProperty('--secondary-background-color', 'hsl(0, 0%, 100%)');
            root.style.setProperty('--text-color', 'hsl(200, 15%, 8%)');
        } 
        else if(!darkTheme) {
            darkTheme = true;
            seThemeText('Dark Mode');

            root.style.setProperty('--background-color', 'hsl(207, 26%, 17%)');
            root.style.setProperty('--secondary-background-color', 'hsl(209, 23%, 22%)');
            root.style.setProperty('--text-color', 'hsl(0, 0%, 100%)');
        }

        console.log(darkTheme);
    }


    return (
        <header className="aling-items-flex row-space-between ">
            <span>Where in the world?</span>
            <button onClick={switchTheme}>
            <ion-icon name="moon-outline"></ion-icon> {themeMode}
            </button> 
        </header>
    )
}

export default Header;
