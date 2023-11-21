import React from 'react';
import { useState } from 'react';
import arrow from '../../assets/images/arrow_back.png';

const Collapse = ({ title, content }) => {

const [activeButton, setActiveButton] = useState(false);

const handleToggle = () => {
    setActiveButton((prevState) => !prevState);
};

    return (
        <div className='class_collapse'>
            <h3 className='collapse_title' onClick={handleToggle}>
                {title} 
                <img src={arrow} alt="image_arrow" className={`collapse_image ${activeButton ? "open" : ""}`} />
            </h3>
            <div className={`collapse_description ${activeButton ? "active" : "none"}`}>{content}</div>
        </div>
    )
};

export default Collapse;