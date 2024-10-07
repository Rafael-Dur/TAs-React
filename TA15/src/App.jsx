import React from 'react';
import { ThemeProvider } from './ThemeContext';
import { LanguageProvider } from './LanguageContext';
import ThemedComponent from './ThemedComponent';
import './ThemedComponent.css';

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div id="root">
          <ThemedComponent />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
