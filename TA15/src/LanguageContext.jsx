import React, { createContext, useContext, useState } from 'react';

// Definimos el contexto
const LanguageContext = createContext();

const translations = {
  en: {
    header: 'Theme and Language Management in React',
    themeButton: 'Change Theme',
    languageButton: 'Change Language',
    bodyText: 'This is the body text in English. Here you can see the changes based on the current language.',
  },
  es: {
    header: 'Gestión de Tema e Idioma en React',
    themeButton: 'Cambiar Tema',
    languageButton: 'Cambiar Idioma',
    bodyText: 'Este es el texto del cuerpo en español. Aquí puedes ver los cambios según el idioma actual.',
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
