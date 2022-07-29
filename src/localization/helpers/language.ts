import { AsyncStorageKeys } from "@/lib/async-storage";
import { LanguageCodes, Languages } from "@/localization/constants/langauge";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getDeviceNativeLanguage } from "@tarikfp/react-native-utils";
import { languageFromLanguageCode } from "./language-resources";

export const isLanguageCode = (data: unknown): data is LanguageCodes => {
  return !(data as string).includes("_");
};

export const getLastSelectedLanguage = async (): Promise<Languages> => {
  const storedLang = await AsyncStorage.getItem(AsyncStorageKeys.LANGUAGE);

  if (storedLang) {
    return storedLang as Languages;
  }

  const deviceNativeLang = getDeviceNativeLanguage();

  if (isLanguageCode(deviceNativeLang)) {
    return languageFromLanguageCode[deviceNativeLang];
  } else {
    return deviceNativeLang as Languages;
  }
};
