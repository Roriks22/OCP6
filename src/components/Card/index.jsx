import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({title, image, id}) => {
    return (
        <Link to={"/logement/" + id}>
            <div className="card" style={{
                backgroundImage: `url(${image})`
            }}>
                <h3 style={{
                    zIndex: "2"
                }}>{title}</h3>
                </div>
        </Link>
    );
};

export default Card;