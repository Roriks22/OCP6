import React from 'react';
import { useParams } from 'react-router-dom';
import { logements } from '../../datas/logements';
import Error from '../Error';
import Carousel from '../../components/Carousel';
import Rating from '../../components/Rating';
import Tag from '../../components/Tag';
import Collapse from '../../components/Collapse';
import Host from '../../components/Host';
import Equipment from '../../components/Equipment';

const Logement = () => {
  const { id } = useParams();
  const data = logements.find((item) => item.id === id);

  if (!data) {
    return <Error />
  }

    const { pictures, title, location, tags, host, rating, description, equipments } = data;
    

    return (
      <main>
          <Carousel pictures={pictures} />
          <div className="info">
            <div className="infoLocation">
              <h3 className="infoLocationTitle">{title}</h3>
              <h6 className="infoLocationVille">{location}</h6>
              <div className="infoLocationTags">
                {tags.map((tag, index) => (
                  <Tag key={index} tagName={tag} />
                ))}
              </div>
            </div>
            <div className="infoLocationNote">
            <div className="infoLocationHost">
              <Host image={host.picture} text={host.name} />
            </div>
              <div className="ratingHost"> 
              <Rating rating={rating} /></div>
            </div>
          </div>
          <div className="collapse-container">
            <div className="collapse-description">
              <Collapse title={"Description"}
              content={description}>
              </Collapse>
            </div>
            <div className="collapse-equipement">
              <Equipment title={"Équipements"} content={equipments.map((data, index) => (
                <p key={index}>{data}</p>
              ))} />
            </div>
          </div>
      </main>
    );
}

export default Logement;