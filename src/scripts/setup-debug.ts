import { NativeModules, Platform } from "react-native";

if (__DEV__) {
  if (Platform.OS === "ios") {
    NativeModules.DevSettings.setIsDebuggingRemotely(true);
  } else {
    import("../config/reactotron").then(() =>
      // eslint-disable-next-line no-console
      console.log("Reactotron Configured"),
    );
  }
}
