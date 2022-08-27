import { Resource } from "i18next";
import { LanguageCodes, Languages } from "../constants/langauge";
import deJSON from "../locales/de_DE.json";
import enJSON from "../locales/en_US.json";
import trJSON from "../locales/tr_TR.json";

export const languageResources: Resource = {
  [Languages.en]: {
    translation: enJSON,
  },
  [Languages.de]: {
    translation: deJSON,
  },
  [Languages.tr]: {
    translation: trJSON,
  },
};

export const languageFromLanguageCode = {
  [LanguageCodes.en]: Languages.en,
  [LanguageCodes.de]: Languages.de,
  [LanguageCodes.tr]: Languages.tr,
};

export const languageCodeFromLanguage = {
  [Languages.en]: LanguageCodes.en,
  [Languages.de]: LanguageCodes.de,
  [Languages.tr]: LanguageCodes.tr,
};
