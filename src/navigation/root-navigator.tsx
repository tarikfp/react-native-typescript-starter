import * as React from "react";
import AuthStack from "./stacks/auth";
import { default as AppBottomBar } from "./tabbar";

function RootNavigator() {
  const isAuthUser = true;

  if (!isAuthUser) {
    return <AuthStack />;
  } else {
    return <AppBottomBar />;
  }
}

export default RootNavigator;
