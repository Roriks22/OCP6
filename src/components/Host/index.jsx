import React from 'react';

const Host = (host) => {
    return (
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