import i18n, { Module } from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json'
import es from './locales/es.json'
import { languageDetector } from './i18n/lenguajeDetector';

const resources = {
  en: { translation: en },
  es: { translation: es },
}

i18n
  .use(LanguageDetector)
  .use(languageDetector as Module)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV !== 'prod' || true,
    resources,
    lng: 'es',
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false
    },
  });
