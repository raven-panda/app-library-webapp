import i18next from 'i18next';
import resources from './I18nResources';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

export default function I18nextInit() {
  i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
      // the translations
      // (tip move them in a JSON file and import them,
      // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
      resources,
      fallbackLng: 'en-US',
      detection: {
        order: ['localStorage', 'navigator', 'sessionStorage'],
        caches: ['localStorage'],
      },
      interpolation: {
        escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
      },
    });
}
