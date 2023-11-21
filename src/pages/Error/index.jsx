import React from 'react';
import error_404 from '../../assets/images/404.png';

const Error = () => {
    return (
        <div className='error'>
            <h1>
                <img src={error_404} alt="image_404"></img>
            </h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <a href="/">Retourner sur la page d'accueil</a>
        </div>
    );
};

export default Error;