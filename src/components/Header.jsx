import React from 'react';
import Logo from '../images/LOGO.png';

function Header() {
    return (
        
        <nav className="header">
            <img src={Logo} alt={Logo} className="header__logo"/>
            <div className="header__links">
                <p>Accueil</p>
                <p>A propos</p>
            </div>
        </nav>
    )
}

export default Header;