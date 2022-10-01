import i18n, { LanguageDetectorAsyncModule } from "i18next";
import { initReactI18next } from "react-i18next";
import { appStorage, AppStorageKeys } from "~utils";
import { Languages } from "./constants/langauge";
import { getLastSelectedLanguage } from "./helpers/language";
import { languageResources } from "./helpers/language-resources";

const languageDetector: LanguageDetectorAsyncModule = {
  type: "languageDetector",
  async: true,
  detect: (callback: (lang: string) => void) => {
    const lastSelectedLang = getLastSelectedLanguage();
    callback(lastSelectedLang);
  },
  init: () => {},
  cacheUserLanguage: (lng: string) => {
    appStorage.set(AppStorageKeys.LANGUAGE, lng);
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    react: {
      useSuspense: false,
    },
    resources: languageResources,
    fallbackLng: Languages.en,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
