import i18n from "i18next"
import XHR from "i18next-xhr-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { reactI18nextModule } from "react-i18next"

i18n
  .use(XHR)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    backend: {
    fallbackLng: "en",
    loadPath: '/locales/{{lng}}/translations.json',
            allowMultiLoading: true,
    },
    fallbackLng: {
    'en': ['en'],
    'fr': ['fr'],
    default: ['en'],
    },
    detection: {
      order: ["navigator"]
    },

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    debug: false,

    react: {
      wait: true,
    },
  })

export default i18n
