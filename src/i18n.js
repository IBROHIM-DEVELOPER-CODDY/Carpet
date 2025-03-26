import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import enTranslation from "./locales/en.json";
import uzTranslation from "./locales/uz.json";
import ruTranslation from "./locales/ru.json"; // Import Russian translation

// Configure i18next
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslation,
    },
    uz: {
      translation: uzTranslation,
    },
    ru: {
      translation: ruTranslation,
    },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
