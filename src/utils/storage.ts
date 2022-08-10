import { MMKV } from "react-native-mmkv";

export enum AppStorageKeys {
  TEST = "test-key",
  LANGUAGE = "language",
}

// Customization: https://github.com/mrousavy/react-native-mmkv#customize
export default new MMKV();
