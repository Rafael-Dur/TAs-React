import React from 'react';
import ReactDOM from 'react-dom/client'; // o 'react-dom' dependiendo de tu versión
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import App from './App'; // Asegúrate de que la ruta sea correcta

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App /> {/* Envolver tu App en BrowserRouter */}
  </BrowserRouter>
);
