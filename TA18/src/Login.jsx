// Login.jsx
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Usuarios hardcodeados
    const admin = { username: 'admin', password: 'Admin1234' };
    const user = { username: 'user', password: '' };

    if (
      (username === admin.username && password === admin.password) ||
      (username === user.username && password === user.password)
    ) {
      setUser(username); // Establecer el usuario autenticado
      setIsAuthenticated(true); // Marcar como autenticado
    } else {
      alert('Credenciales incorrectas');
    }
  };

  // Redirigir si está autenticado
  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
