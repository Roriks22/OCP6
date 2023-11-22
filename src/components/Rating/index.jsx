import React from 'react';
import etoile_rose from '../../assets/images/star-active.png';
import etoile_grise from '../../assets/images/star-inactive.png';

// Création du composant Rating et indication des props.
const Rating = ({ rating }) => {
    
    // Utilisation d'un Array pour gérer le nombre d'étoiles possible et l'utilisation d'un map() pour gérer l'apparation des étoiles roses et/ou grises.
const etoileImage = Array.from({ length : 5}).map((_,index) => (
    <img key={index} src={index < rating ? etoile_rose : etoile_grise} alt="etoile" />
));

return (

    // Utilisation du className pour gérer le style en scss du rating.
<div className='rating'>{etoileImage}</div>
);
}

export default Rating;