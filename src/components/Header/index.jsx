import React from 'react';
import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';

// Création du composant Header.
const Header = () => {
    return (
        <header>

            {/* Utilisation du Link utilisable avec react-router-dom pour gérer le lien ainsi que des className pour gérer le style scss du logo. */}
            <Link to="/">
                <img className='logo_header' src={logo} alt="logo Kasa" />
            </Link>
            <nav>
                <ul>
                    
                    {/* Utilisation du NavLink utilisable avec react-router-dom qui permet de créer des liens et qui permet également de gérer l'état des liens. */}
                    <li><NavLink className="style_header" to="/" style={({ isActive}) => ({textDecoration: isActive ? "underline" : "none" })}>Accueil</NavLink></li>
                    <li><NavLink className="style_header" to="apropos" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })}>A Propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;