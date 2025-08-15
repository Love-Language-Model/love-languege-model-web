import { useTranslation } from 'react-i18next';

import { SupportedLanguage } from '@/types/i18n';

export const useTranslations = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: SupportedLanguage) => {
    i18n.changeLanguage(language);
  };

  const currentLanguage = i18n.language as SupportedLanguage;

  return {
    t,
    changeLanguage,
    currentLanguage,
    isEnglish: currentLanguage === 'en-US',
    isPortuguese: currentLanguage === 'pt-BR',
  };
};
