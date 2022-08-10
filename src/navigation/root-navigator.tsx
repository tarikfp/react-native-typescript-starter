import * as React from "react";
import { appStorage, AppStorageKeys } from "~utils";
import AuthStack from "./stacks/auth";
import { default as AppBottomBar } from "./tabbar";

function RootNavigator() {
  React.useEffect(() => {
    appStorage.set(AppStorageKeys.TEST, "Test Value");
  }, []);

  const isAuthUser = true;

  if (!isAuthUser) {
    return <AuthStack />;
  } else {
    return <AppBottomBar />;
  }
}

export default RootNavigator;
