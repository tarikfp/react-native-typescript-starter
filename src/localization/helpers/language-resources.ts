import { Resource } from "i18next";
import { LanguageCodes, Languages } from "../constants/langauge";
import enJSON from "../locales/en_US.json";
import deJSON from "../locales/de_DE.json";

export const languageResources: Resource = {
  [Languages.en]: {
    translation: enJSON,
  },
  [Languages.de]: {
    translation: deJSON,
  },
};

export const languageFromLanguageCode = {
  [LanguageCodes.en]: Languages.en,
  [LanguageCodes.de]: Languages.de,
};

export const languageCodeFromLanguage = {
  [Languages.en]: LanguageCodes.en,
  [Languages.de]: LanguageCodes.de,
};
