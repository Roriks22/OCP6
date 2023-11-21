import React from 'react';
import { useState } from 'react';
import arrow from '../../assets/images/arrow_back.png';

const Equipment = ({ title, content }) => {

const [activeButton, setActiveButton] = useState(false);

const handleToggle = () => {
    setActiveButton((prevState) => !prevState);
};

    return (
        <div className='class_collapse_equipment'>
            <h3 className='collapse_title_equipment' onClick={handleToggle}>
                {title} 
                <img src={arrow} alt="image_arrow" className={`collapse_image_equipment ${activeButton ? "open" : ""}`} />
            </h3>
            <div className={`collapse_description_equipment ${activeButton ? "active" : "none"}`}>{content}</div>
        </div>
    )
};

export default Equipment;