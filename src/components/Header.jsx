import React from 'react';
import Logo from '../images/LOGO.png';
import "../styles/Header/Header.css";

import { Link, useLocation } from "react-router-dom";


function Header() {
    const location = useLocation();
    return (  
        <nav className="header">
            <img src={Logo} alt="Kasa" className="header__logo"/>
            <div className="header__links">
                <Link to="/home" className={location.pathname === "/home" || location.pathname === "/" ? "header__link active" : "header__link"}>Accueil</Link>
                <Link to="/about" className={location.pathname === "/about" ? "header__link active" : "header__link"}>A propos</Link>
            </div>
        </nav>
    )
}

export default Header;