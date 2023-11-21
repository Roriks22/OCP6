import React from 'react';
import Banner from '../../components/Banner';
import banner_home from '../../assets/images/banner_home.png';
import Card from '../../components/Card';
import { logements } from '../../datas/logements';

const Home = () => {
    return (
    <div id="home">
        <div id="banner_ChezVous">
            <Banner
            imgSrc={banner_home}
            imgText="Chez vous, partout et ailleurs"
            imgAlt="Paysage" />
        </div>
        <div id="logements">
            {logements.map((logement) => {
                return <Card key={logement.id} id={logement.id} title={logement.title} image={logement.cover} />
            })}
        </div>
    </div>
    )
};

export default Home;