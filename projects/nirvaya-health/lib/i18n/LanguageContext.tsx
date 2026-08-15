'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TRANSLATIONS } from './translations';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: keyof typeof TRANSLATIONS['en']) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('nirvaya_lang') as Language;
    if (saved && (saved === 'en' || saved === 'bn')) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('nirvaya_lang', newLang);
  };

  const t = (key: keyof typeof TRANSLATIONS['en']): string => {
    return TRANSLATIONS[lang][key] || TRANSLATIONS['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
