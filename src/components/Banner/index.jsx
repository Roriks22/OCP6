import React from 'react';

const Banner = ({imgSrc, imgText, imgAlt}) => {
    return (
        <div className='banner'>
            <h2>{imgText}</h2>
            <img src={imgSrc} alt={imgAlt} />
        </div>    
    )
};

export default Banner;