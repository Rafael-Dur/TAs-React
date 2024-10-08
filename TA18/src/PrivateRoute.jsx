// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, user }) => {
  // Aquí puedes establecer la condición para verificar si el usuario tiene acceso
  const isAdmin = user === 'admin';

  return isAdmin ? children : <Navigate to="/" />; // Redirige a Home si no es admin
};

export default PrivateRoute;
