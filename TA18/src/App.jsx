import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Product from './Product'; 
import ProtectedRoute from './ProtectedRoute'; // Importar la ruta protegida
import { AuthProvider, useAuth } from './AuthContext'; // Importar el contexto de autenticación
import './App.css';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="container">
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
                            <li>
                                <AuthButton /> {/* Botón de autenticación */}
                            </li>
                        </ul>
                    </nav>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/product/:id" element={<Product />} />
                        {/* Rutas protegidas */}
                        <ProtectedRoute path="/protected" element={<ProtectedPage />} />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

// Componente para manejar el inicio y cierre de sesión
const AuthButton = () => {
    const { isAuthenticated, login, logout } = useAuth();

    return isAuthenticated ? (
        <button onClick={logout}>Logout</button>
    ) : (
        <button onClick={login}>Login</button>
    );
};

// Componente de página protegida
const ProtectedPage = () => {
    return <h2>Esta es una página protegida</h2>;
};

export default App;
