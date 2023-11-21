import React from 'react';
import etoile_rose from '../../assets/images/star-active.png';
import etoile_grise from '../../assets/images/star-inactive.png';

const Rating = ({ rating }) => {
const etoileImage = Array.from({ length : 5}).map((_,index) => (
    <img key={index} src={index < rating ? etoile_rose : etoile_grise} alt="etoile" />
));

return (
<div className='rating'>{etoileImage}</div>
);
}

export default Rating;