import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageDisplay = () => {
  const { language } = useLanguage();
  return <p>Idioma actual: {language === 'es' ? 'Español' : 'Inglés'}</p>;
};

export default LanguageDisplay;
