import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button className="theme-toggle" onClick={toggleTheme}>
        Cambiar a {theme === 'light' ? 'Tema Oscuro' : 'Tema Claro'}
      </button>
    </div>
  );
};

export default ThemeToggle;
