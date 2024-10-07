import React from 'react';
import { UserProvider } from './UserContext';
import UserNameDisplay from './UserNameDisplay';
import UserNameUpdater from './UserNameUpdater';
import './App.css';

const App = () => {
  return (
    <UserProvider>
      <div className="app-container">
        <h1>Aplicación de Usuario</h1>
        <UserNameDisplay /> {}
        <UserNameUpdater /> {}
      </div>
    </UserProvider>
  );
};

export default App;
