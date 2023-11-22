import React from 'react';
import { Link } from 'react-router-dom';

// Création du composant Card et indication des props.
const Card = ({title, image, id}) => {
    return (

        // Utilisation du Link utilisable avec react-router-dom qui permet de gérer les liens accessibles autour de l'application.
        <Link to={"/logement/" + id}>

            {/* Utilisation du className pour gérer le style des card avec le scss et mis en place des props. */}
            <div className="card" style={{
                backgroundImage: `url(${image})`
            }}>

                {/* Utilisation du className pour gérer le style du titre des card et mis en place des props. */}
                <h3 style={{
                    zIndex: "2"
                }}>{title}</h3>
                </div>
        </Link>
    );
};

export default Card;