import React from 'react';
import { useTheme } from './ThemeContext';
import './ThemedComponent.css'; // Estilos para ambos temas

const ThemedComponent = () => {
  const { theme } = useTheme();

  return (
    <div className={`themed-component ${theme}`}>
      <h1>Este es el tema {theme === 'light' ? 'Claro' : 'Oscuro'}</h1>
      <p>
        Cambia el tema para ver cómo los estilos del componente cambian
        dinámicamente.
      </p>
    </div>
  );
};

export default ThemedComponent;
