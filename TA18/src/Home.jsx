// Home.jsx
import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Product from './Product'; // Importa el nuevo componente
import PrivateRoute from './PrivateRoute'; // Asegúrate de importar PrivateRoute
import './Home.css'; // Importa estilos específicos para Home

const Home = ({ user }) => {
  const isAdmin = user === 'admin'; // Verifica si el usuario es admin

  return (
    <div className="home-container">
      <h1>Home Page</h1>
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
          {isAdmin && (
            <li>
              <Link to="/private-route">Private Route</Link>
            </li>
          )}
        </ul>
      </nav>

      {/* Definir las rutas dentro de Home */}
      <Routes>
        <Route path="/" element={<h2>Bienvenido a la página de inicio!</h2>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route
          path="/private-route"
          element={isAdmin ? <PrivateRoute user={user} /> : <Navigate to="/private-route" />}
        />
      </Routes>
    </div>
  );
};

export default Home;
