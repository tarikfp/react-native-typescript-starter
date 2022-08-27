import * as React from "react";
import { appStorage, AppStorageKeys } from "~utils";
import { default as AppBottomBar } from "./tabbar";

function RootNavigator() {
  React.useEffect(() => {
    appStorage.set(AppStorageKeys.TEST, "Test Value");
  }, []);

  return <AppBottomBar />;
}

export default RootNavigator;
