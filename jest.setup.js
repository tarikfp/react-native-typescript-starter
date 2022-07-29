require("reflect-metadata");
import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";
import SafeAreaContextMock from "react-native-safe-area-context/jest/mock";
import mockRNCNetInfo from "@react-native-community/netinfo/jest/netinfo-mock.js";

jest.useFakeTimers();
jest.mock("reactotron-react-native", () =>
  require("./__mocks__/reactotron/reactotron"),
);
jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");
jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});
jest.mock("@react-native-community/netinfo", () => mockRNCNetInfo);

jest.mock("@react-native-community/datetimepicker", () => jest.fn());

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.mock("react-i18next", () => ({
  initReactI18next: { type: "3rdParty", init: jest.fn() },
  useTranslation: () => {
    return {
      t: (str) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

jest.mock("@tarikfp/react-native-utils", () => {
  return {
    useGoBackHandler: jest.fn(() => true),
    getDeviceNativeLanguage: jest.fn(() => "en"),
    getWindowWidth: jest.fn(() => 100),
    getWindowHeight: jest.fn(() => 100),
  };
});

jest.mock("react-native-safe-area-context", () => SafeAreaContextMock);
