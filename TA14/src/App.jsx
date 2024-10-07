import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import ThemedComponent from './ThemedComponent';

const App = () => {
  return (
    <ThemeProvider>
      <div className="app-container">
        <h1>Gestión de Tema en React</h1>
        <ThemeToggle />
        <ThemedComponent />
      </div>
    </ThemeProvider>
  );
};

export default App;
