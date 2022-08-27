import React from "react";
import {
  CombinedDarkTheme,
  CombinedDefaultTheme,
} from "../theme/combine-navigation-theme";

export default function useThemePreferenceValues() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsDarkTheme(!isDarkTheme);
  }, [isDarkTheme]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isDarkTheme,
    }),
    [toggleTheme, isDarkTheme],
  );

  return {
    theme,
    toggleTheme: preferences.toggleTheme,
    isDarkTheme: preferences.isDarkTheme,
  };
}
