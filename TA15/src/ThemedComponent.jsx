import React from 'react';
import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import './ThemedComponent.css';

const ThemedComponent = () => {
  const { theme } = useTheme();
  const { language, translations } = useLanguage();  // Accedemos a los textos según el idioma

  return (
    <div className={`themed-component ${theme}`}>
      <h1>{translations[language].header}</h1>
      <p>{translations[language].bodyText}</p>
      <ThemeToggle />
      <LanguageToggle />
    </div>
  );
};

export default ThemedComponent;
