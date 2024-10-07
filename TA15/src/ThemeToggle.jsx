import React from 'react';
import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();
  const { language, translations } = useLanguage();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {translations[language].themeButton}
    </button>
  );
};

export default ThemeToggle;
