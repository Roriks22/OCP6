import React from 'react';
import logo from '../../assets/images/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img className='logo_header' src={logo} alt="logo" />
            </Link>
            <nav>
                <ul>
                    <li> <NavLink className="style_header" to="/" style={({ isActive}) => ({textDecoration: isActive ? "underline" : "none" })}>Accueil</NavLink></li>
                    <li> <NavLink className="style_header" to="apropos" style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })}>A Propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;