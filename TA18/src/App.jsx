// App.jsx
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; 
import './App.css';

import About from './About';
import Contact from './Contact';
import Home from './Home';
import Product from './Product';
import Login from './Login';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const [user, setUser] = useState(null); // Estado para almacenar la información del usuario

  return (
    <Routes>
      {/* Rutas públicas */}
      <Route path="/login" element={<Login setUser={setUser} />} />

      <Route
        path="/home"
        element={user ? <Home /> : <Navigate to="/home" />}
      />
      <Route path="/about" element={user ? <About /> : <Navigate to="/login" />} />
      <Route path="/contact" element={user ? <Contact /> : <Navigate to="/login" />} />
      <Route path="/product/:id" element={user ? <Product /> : <Navigate to="/login" />} />

      {/* Rutas protegidas */}
      <Route
        path="/about-protected"
        element={
          <PrivateRoute user={user}>
            <About />
          </PrivateRoute>
        }
      />
      <Route
        path="/contact-protected"
        element={
          <PrivateRoute user={user}>
            <Contact />
          </PrivateRoute>
        }
      />
      {/* Redirigir a la página de login si la ruta no existe */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
