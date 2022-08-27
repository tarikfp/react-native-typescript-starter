import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import merge from "deepmerge";
import { DarkTheme as PaperDarkTheme } from "react-native-paper";
import { theme as CustomizedPaperDefaultTheme } from "./index";

export const CombinedDefaultTheme = merge(
  NavigationDefaultTheme,
  CustomizedPaperDefaultTheme,
);

export const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

/* const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};
const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
}; */
