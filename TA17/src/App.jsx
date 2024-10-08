import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Product from './Product'; // Importa el nuevo componente
import './App.css'; // Asegúrate de importar los estilos

const App = () => {
  return (
    <Router>
      <div className="container"> {/* Agrega la clase container aquí */}
        {/* Barra de navegación */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/product/1">Producto 1</Link>
            </li>
            <li>
              <Link to="/product/2">Producto 2</Link>
            </li>
            <li>
              <Link to="/product/3">Producto 3</Link>
            </li>
          </ul>
        </nav>

        {/* Definir las rutas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product />} /> {/* Nueva ruta para el producto */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
