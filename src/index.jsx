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
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/apropos" element={<Apropos />} />
    <Route path="/logement/:id" element={<Logement />} />
    <Route path="*" element={<Error />} />
  </Routes>
  <Footer />
  </BrowserRouter>
 </React.StrictMode>
);
