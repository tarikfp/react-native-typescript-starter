import React from "react";

interface IThemePreferenceContext {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

export const ThemePreferenceContext = React.createContext<
  IThemePreferenceContext | undefined
>(undefined);

export const useThemePreferenceContext = () => {
  const themePreferenceContext = React.useContext(ThemePreferenceContext);

  if (!themePreferenceContext) {
    throw new Error("Make sure Theme Preference Context is in the tree");
  }

  return themePreferenceContext;
};
