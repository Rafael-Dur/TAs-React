import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { LanguageProvider } from './LanguageContext';
import ThemedComponent from './ThemedComponent';
import ThemeDisplay from './ThemeDisplay'; // Asegúrate de que la ruta sea correcta
import './ThemedComponent.css';

const App = () => {
  return (
    <ThemeProvider>
      <ThemeDisplay />
      <LanguageProvider>
        <div id="root">
          <ThemedComponent />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
