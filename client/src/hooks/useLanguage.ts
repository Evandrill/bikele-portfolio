import { useEffect, useState } from 'react';
import type { Language } from '@shared/portfolio-content';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');
  const [isLoading, setIsLoading] = useState(true);

  // Initialize language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as Language | null;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguage(savedLanguage);
    }
    setIsLoading(false);
  }, []);

  // Update localStorage when language changes
  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);
  };

  return { language, changeLanguage, isLoading };
}
