import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Importa el hook de autenticación

const ProtectedRoute = ({ element, ...rest }) => {
    const { isAuthenticated } = useAuth(); // Obtener el estado de autenticación

    return (
        <Route
            {...rest}
            element={isAuthenticated ? element : <Navigate to="/" />} // Redirigir si no está autenticado
        />
    );
};

export default ProtectedRoute;
