import React, { createContext, useContext } from 'react';
import type { Language } from '@shared/portfolio-content';

interface LanguageContextType {
  language: Language;
  changeLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, language, changeLanguage }: {
  children: React.ReactNode;
  language: Language;
  changeLanguage: (language: Language) => void;
}) {
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguageContext() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within LanguageProvider');
  }
  return context;
}
