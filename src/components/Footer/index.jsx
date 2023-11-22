import React from 'react';
import logo_footer from '../../assets/images/logo_footer.png';

// Création du composant Footer.
const Footer = () => {
    return (
        <footer>
            
            {/* Mis en place de l'image du footer, du alt et de la description */}
            <img src={logo_footer} alt="logo footer Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
};

export default Footer;