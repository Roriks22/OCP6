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

// Utilisation du hook useParams pour faciliter l'accès aux paramètres d'une URL d'un route.
  const { id } = useParams();

// Utilisation de find pour renvoyer la valeur du premier élément qui réussit un test.
  const data = logements.find((item) => item.id === id);

// Mettre un if pour importer le composant Error si l'URL n'est pas correct.
  if (!data) {
    return <Error />
  }

// Regroupement de tous les éléments qui représentent la data.
    const { pictures, title, location, tags, host, rating, description, equipments } = data;
    

    return (
      <main>
        {/* Utilisation des composants enfants, props ainsi que la data des éléments. */}
          <Carousel pictures={pictures} />

          {/* Utilisation des className pour gérer le style avec le scss. */}
          <div className="info">
            <div className="infoLocation">
              <h3 className="infoLocationTitle">{title}</h3>
              <h6 className="infoLocationVille">{location}</h6>
              <div className="infoLocationTags">

                {/* Utilisation de map() pour gérer chaque élément du Tag. */}
                {tags.map((tag, index) => (
                  <Tag key={index} tagName={tag} />
                ))}
              </div>
            </div>

            {/* Utilisation des className pour gérer le style avec le scss. */}
            <div className="infoLocationNote">
            <div className="infoLocationHost">

              {/* Utilisation du composant enfant Host, ainsi que les props et la data. */}
              <Host image={host.picture} text={host.name} />
            </div>

            {/* Utilisation des className pour gérer le style avec le scss. */}
              <div className="ratingHost"> 

              {/* Utilisation du composant enfant Rating, ainsi que les props et la data. */}
              <Rating rating={rating} /></div>
            </div>
          </div>

          {/* Utilisation des className pour gérer le style avec le scss. */}
          <div className="collapse-container">
            <div className="collapse-description">

              {/* Utilisation du composant enfant Collapse, ainsi que les props et la data. */}
              <Collapse title={"Description"}
              content={description}>
              </Collapse>
            </div>

            {/* Utilisation des className pour gérer le style avec le scss. */}
            <div className="collapse-equipement">
              
              {/* Utilisation du composant enfant Equipment, ainsi que les props et la data. */}
              {/* Utilisation de map() pour pouvoir gérer chaque élement de la data équipments. */}
              <Equipment title={"Équipements"} content={equipments.map((data, index) => (
                <p key={index}>{data}</p>
              ))} />
            </div>
          </div>
      </main>
    );
}

export default Logement;