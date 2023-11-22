import React from 'react';
import error_404 from '../../assets/images/404.png';

// Création du composant Error.
const Error = () => {
    return (

        // Utilisation du className pour gérer le style avec le scss.
        <div className='error'>
            <h1>

                {/* Utilisation de l'img pour mettre l'image error 404. */}
                <img src={error_404} alt="image_404"></img>
            </h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>

            {/* Faire un lien pour retourner à la page Home. */}
            <a href="/">Retourner sur la page d'accueil</a>
        </div>
    );
};

export default Error;