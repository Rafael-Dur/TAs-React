import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeDisplay = () => {
  const { theme } = useTheme();
  return <p>Tema actual: {theme === 'light' ? 'Claro' : 'Oscuro'}</p>;
};

export default ThemeDisplay;
