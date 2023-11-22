import React from 'react';
import Banner from '../../components/Banner';
import banner_apropos from '../../assets/images/banner_apropos.png';
import Collapse from '../../components/Collapse';

// Création du composant Apropos.
const Apropos = () => {
    return (
    <main>

        {/* Utilisation du className pour gérer le style avec le scss. */}
        <div className='banner_apropos'>

            {/* Utilisation du composant enfant Banner pour gérer l'image et le alt grâce aux props. */}
            <Banner
            imgSrc={banner_apropos} imgAlt="Banniere paysage" />
        </div>

        {/* Utilisation du className pour gérer le style avec le scss. */}
            <div className='apropos_main'>
                
                {/* Utilisation du composant enfant Collapse pour gérer le titre et le contenu avec les props. */}
                <Collapse 
                title="Fiabilité"
                content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
                />
                <Collapse 
                title="Respect"
                content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
                />
                <Collapse
                title="Service"
                content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme."
                />
                <Collapse
                title="Sécurité"
                content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
    </main>
);
};

export default Apropos;