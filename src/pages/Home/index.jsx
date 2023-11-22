import React from 'react';
import Banner from '../../components/Banner';
import banner_home from '../../assets/images/banner_home.png';
import Card from '../../components/Card';
import { logements } from '../../datas/logements';

const Home = () => {
    return (
        // Utilisation de l'id pour gérer avec le style scss.
    <div id="home">
        <div id="banner_ChezVous">

            {/* Utilisation du composant Banner avec les props pour pouvoir mettre l'image, le text et le alt. */}
            <Banner
            imgSrc={banner_home}
            imgText="Chez vous, partout et ailleurs"
            imgAlt="Paysage" />
        </div>

        {/* Utilisation de l'id pour gérer le style des logements et utilisation de map() pour pouvoir gérer chaque élement de la data des logements. */}
        <div id="logements">
            {logements.map((logement) => {
                
                // Utilisation du composant enfant Card pour pour pouvoir gérer avec les props et la data Logements.
                return <Card key={logement.id} id={logement.id} title={logement.title} image={logement.cover} />
            })}
        </div>
    </div>
    )
};

export default Home;