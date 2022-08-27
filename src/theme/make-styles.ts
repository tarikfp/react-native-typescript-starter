import { useMemo } from "react";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { useTheme } from "react-native-paper";

type NamedStyles<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};

export function makeStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  styleArgs:
    | T
    | NamedStyles<T>
    | ((theme: ReactNativePaper.Theme, props: any) => T | NamedStyles<T>),
) {
  return function useStyles(props?: any): T {
    const theme = useTheme();

    let styles: any = null;

    if (typeof styleArgs === "function") {
      styles = styleArgs(theme, props);
    } else {
      styles = styleArgs as T | NamedStyles<T>;
    }

    return useMemo(() => StyleSheet.create(styles), [styles]);
  };
}
