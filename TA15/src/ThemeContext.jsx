import React, { createContext, useState, useContext } from 'react';

// Crear el contexto del tema
const ThemeContext = createContext();

// Hook personalizado para usar el contexto del tema
export const useTheme = () => useContext(ThemeContext);

// Proveedor del contexto del tema
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Alternar entre tema claro y oscuro
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
