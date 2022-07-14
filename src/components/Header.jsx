import React, { useState } from "react";

function Header() {
    let [darkTheme, setDarkTheme] = useState(true);
    let [themeModeText, seThemeText] = useState('Dark Mode');
    let [modeIcon, setModeIcon] = useState(<ion-icon name="moon-outline"></ion-icon>);

    function switchTheme() {
        const root = document.querySelector(':root');

        if (darkTheme) {
            seThemeText('Light Mode');
            setModeIcon(<ion-icon name="sunny-outline"></ion-icon>);
            
            root.style.setProperty('--background-color', 'hsl(0, 0%, 98%)');
            root.style.setProperty('--secondary-background-color', 'hsl(0, 0%, 100%)');
            root.style.setProperty('--text-color', 'hsl(200, 15%, 8%)');

            setDarkTheme(false);
        } 
        else if(!darkTheme) {
            seThemeText('Dark Mode');
            setModeIcon(<ion-icon name="moon-outline"></ion-icon>);
            
            root.style.setProperty('--background-color', 'hsl(207, 26%, 17%)');
            root.style.setProperty('--secondary-background-color', 'hsl(209, 23%, 22%)');
            root.style.setProperty('--text-color', 'hsl(0, 0%, 100%)');
            
            setDarkTheme(true);
        }
    }


    return (
        <header className="aling-items-flex row-space-between ">
            <span>Where in the world?</span>
            <button onClick={switchTheme}>
            {modeIcon} {themeModeText}
            </button> 
        </header>
    )
}

export default Header;
