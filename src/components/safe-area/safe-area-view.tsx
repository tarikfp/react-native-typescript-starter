import * as React from "react";
import {
  NativeSafeAreaViewProps,
  SafeAreaView,
} from "react-native-safe-area-context";

type Props = React.PropsWithChildren<NativeSafeAreaViewProps>;

/**
 * @description
 * Custom, overridable, app specific safe area provider component
 * Common props that will be used throughout the app
 * can be set in this custom component to prevent repetition
 */

function AppSafeAreaView({ children, ...props }: Props) {
  return <SafeAreaView {...props}>{children}</SafeAreaView>;
}

export default AppSafeAreaView;
