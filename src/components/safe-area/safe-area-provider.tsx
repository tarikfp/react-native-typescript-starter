import * as React from "react";
import {
  SafeAreaInsetsContext,
  SafeAreaProvider,
  SafeAreaProviderProps,
} from "react-native-safe-area-context";

type Props = React.PropsWithChildren<SafeAreaProviderProps>;

/**
 * @description
 * Custom, overridable, app specific safe area provider component
 * Common props that will be used throughout the app
 * can be set in this custom component to prevent repetition
 */

function AppSafeAreaProvider({ children, ...props }: Props) {
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => {
        if (insets) {
          return children;
        }
        return <SafeAreaProvider {...props}>{children}</SafeAreaProvider>;
      }}
    </SafeAreaInsetsContext.Consumer>
  );
}

export default AppSafeAreaProvider;
