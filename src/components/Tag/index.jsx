import React from 'react';

// Création du composant Tag et indication des props.
const Tag = ({ tagName }) => {
    return (
        
        // Utilisation du className pour gérer le style scss des tags.
        <p className="tag_name">{tagName}</p>
    );
};

export default Tag;