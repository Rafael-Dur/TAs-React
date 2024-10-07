import React, { useState } from 'react';
import { UserProvider, useUser } from './UserContext';
import UserNameDisplay from './UserNameDisplay';
import './App.css';

const App = () => {
  return (
    <UserProvider>
      <div className="app-container">
        <h1>Aplicación de Usuario</h1>
        <UserNameInput />
        <UserNameDisplay />
      </div>
    </UserProvider>
  );
};

const UserNameInput = () => {
  const { setUserName } = useUser();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar el refresco de la página
    setUserName(inputValue); // Establecer el nombre del usuario en el contexto
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ingresa tu nombre"
        required
      />
      <button type="submit" className="button">Establecer Nombre</button>
    </form>
  );
};

export default App;
