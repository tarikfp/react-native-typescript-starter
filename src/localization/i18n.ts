import { initReactI18next } from "react-i18next";
import i18n, { LanguageDetectorAsyncModule } from "i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AsyncStorageKeys } from "../lib/async-storage";
import { Languages } from "./constants/langauge";
import { languageResources } from "./helpers/language-resources";
import { getLastSelectedLanguage } from "./helpers/language";

const languageDetector: LanguageDetectorAsyncModule = {
  type: "languageDetector",
  async: true,
  detect: async (callback: (lang: string) => void) => {
    const lastSelectedLang = await getLastSelectedLanguage();
    callback(lastSelectedLang);
  },
  init: () => {},
  cacheUserLanguage: (lng: string) => {
    AsyncStorage.setItem(AsyncStorageKeys.LANGUAGE, lng);
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
      prefix: "{",
      suffix: "}",
      escapeValue: false,
    },
  });

export default i18n;
