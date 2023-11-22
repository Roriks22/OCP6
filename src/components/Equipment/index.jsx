import React from 'react';
import { useState } from 'react';
import arrow from '../../assets/images/arrow_back.png';

// Création du composant Equipment et indication des props.
const Equipment = ({ title, content }) => {

// Utilisation du hook useState.
const [activeButton, setActiveButton] = useState(false);

// Création d'une fonction permettant avec prevState de retourner à l'état précédent.
const handleToggle = () => {
    setActiveButton((prevState) => !prevState);
};

    return (

        // Utilisation des className pour gérer le style avec le scss et utilisation de la fonction handleToggle avec le onClick.
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