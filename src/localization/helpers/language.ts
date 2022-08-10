import { getDeviceNativeLanguage } from "@tarikfp/react-native-utils";
import { LanguageCodes, Languages } from "~localization/constants/langauge";
import { appStorage, AppStorageKeys } from "~utils";
import { languageFromLanguageCode } from "./language-resources";

export const isLanguageCode = (data: unknown): data is LanguageCodes => {
  return !(data as string).includes("_");
};

export const getLastSelectedLanguage = (): Languages => {
  const storageLanguage = appStorage.getString(AppStorageKeys.LANGUAGE);

  if (storageLanguage) {
    return storageLanguage as Languages;
  }

  const deviceNativeLang = getDeviceNativeLanguage();

  if (isLanguageCode(deviceNativeLang)) {
    return languageFromLanguageCode[deviceNativeLang];
  } else {
    return deviceNativeLang as Languages;
  }
};
