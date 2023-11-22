import React from 'react';

// Création du composant Host.
const Host = (host) => {
    return (
      // Utilisation des className et structure de la fonction Host.
        <div className='hostInfo'>
      <h6>{host.text}</h6>
      <img
        src={host.image}
        alt={`location host ${host.text}`}
        className="infoLocationPictureHost"
      />
      </div>
  );
}

export default Host;