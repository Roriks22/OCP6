import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./assets/styles/index.css";
import "./assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Error from './pages/Error';
import Logement from './pages/Logement';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>

  {/* Utilisation du BrowserRouter pour garder l'interface utilisateur synchronisée avec l'URL. */}
  <BrowserRouter>

  {/* Utilisation du composant Header. */}
  <Header />

  {/* Utilisation du Routes qui permet de coupler segments URL aux composants. */}
  <Routes>

    {/* Utilisation du Route qui permet d'indiquer le composant qui est appélé en fonction de l'URL qui est indiqué. */}
    <Route path="/" element={<Home />} />
    <Route path="/apropos" element={<Apropos />} />
    <Route path="/logement/:id" element={<Logement />} />

    {/* Utilisation de "*" pour gérer toutes les URL qui ne sont pas encore indiquée et appeler composant Error. */}
    <Route path="*" element={<Error />} />
  </Routes>
  
  {/* Utilisaiton du composant Footer. */}
  <Footer />
  </BrowserRouter>
 </React.StrictMode>
);
