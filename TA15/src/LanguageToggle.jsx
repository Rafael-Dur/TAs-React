import React from 'react';
import { useLanguage } from './LanguageContext';

const LanguageToggle = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div>
      <button onClick={() => changeLanguage(language === 'en' ? 'es' : 'en')}>
        {language === 'en' ? 'Change to Spanish' : 'Cambiar a Inglés'}
      </button>
    </div>
  );
};

export default LanguageToggle;
