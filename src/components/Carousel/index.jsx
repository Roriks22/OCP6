import React from 'react';
import { useState } from 'react';
import arrow_prev from '../../assets/images/vector_prev.png';
import arrow_next from '../../assets/images/vector_next.png';

// Création du composant Carousel et indication des props.
const Carousel = ({ pictures }) => {

  // Utilisation du hook useState 
const [imageIndex, setImageIndex]= useState(0);

// Création d'une fonction permettant d'aller à l'image précédente et utilisant le prevState qui permet de retourner à l'état précédent de ce composant.
const prevArrow = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? pictures.length -1 : prevIndex -1));
}

// Création d'une fonction permettant d'aller à l'image suivante et utilisant le prevState qui permet de retourner à l'état précédent de ce composant.
const nextArrow = () => {
    setImageIndex((prevIndex) => (prevIndex === pictures.length -1 ? 0 : prevIndex +1));
}

// Création d'une variable permettant de gérer le nombre de photo de la location.
const nbImage = pictures.length > 1 ? `${imageIndex + 1} / ${pictures.length}` : '';

// Utilisation des className et mis en place des arrow.
    return (
    <div className='carousel'>
        {pictures.length > 1 && (
          <>
            <img
              className="carousel_arrow_left"
              src={arrow_prev}
              alt="image_précédente"
              onClick={prevArrow}
            />
            <img
              className="carousel_arrow_right"
              src={arrow_next}
              alt="image_suivante"
              onClick={nextArrow}
            />
          </>
        )}

        {/* Utilisation des className pour gérer le style scss. */}
        <div className='carousel_image'>

          {/* Utilisation de map() pour gérer l'apparition ou non du nombre de photo en fonction de la location. */}
            {pictures.map((picture, index) => (
                <div key={index} style={{ display: index === imageIndex ? 'block' : 'none' }}>
                    <div className='carouselImage'>
                        <img className='imageCarousel' src={picture} alt={`carousel ${index +1}`} />
                        {nbImage && <p className='nbImage'>{nbImage}</p>}
                    </div>
                </div>
            ))}  
        </div>
    </div>
    );
};

export default Carousel;