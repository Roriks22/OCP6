import React from 'react';

// Création du composant Banner et création des props.
const Banner = ({imgSrc, imgText, imgAlt}) => {
    return (

        // Ajout d'un className pour gérer le style scss.
        <div className='banner'>

            {/* Ajout d'un titre et d'une img que l'on gèrera plus tard grâce aux props. */}
            <h2>{imgText}</h2>
            <img src={imgSrc} alt={imgAlt} />
        </div>    
    )
};

export default Banner;