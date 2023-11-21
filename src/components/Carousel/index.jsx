import React from 'react';
import { useState } from 'react';
import arrow_prev from '../../assets/images/vector_prev.png';
import arrow_next from '../../assets/images/vector_next.png';

const Carousel = ({ pictures }) => {
const [imageIndex, setImageIndex]= useState(0);

const prevArrow = () => {
    setImageIndex((prevIndex) => (prevIndex === 0 ? pictures.length -1 : prevIndex -1));
}

const nextArrow = () => {
    setImageIndex((prevIndex) => (prevIndex === pictures.length -1 ? 0 : prevIndex +1));
}

const nbImage = pictures.length > 1 ? `${imageIndex + 1} / ${pictures.length}` : '';

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
        <div className='carousel_image'>
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