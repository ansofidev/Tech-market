import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en.json';
import uk from '../locales/uk.json';

const savedLang = localStorage.getItem('lang') || 'en';

const resources = {
  en: {
    translation: en,
  },
  uk: {
    translation: uk,
  },
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: savedLang, // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
    compatibilityJSON: 'v4',
  });

export default i18n;
