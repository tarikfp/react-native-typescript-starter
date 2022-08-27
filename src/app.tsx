import {
  NavigationContainer,
  NavigationContainerRef,
} from "@react-navigation/native";
import React, { useRef } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import "~localization/i18n";
import { AppSafeAreaProvider } from "./components/safe-area";
import useThemePreferenceValues from "./hooks/useToggleTheme";
import { default as RootNavigator } from "./navigation/root-navigator";
import { MainErrorBoundary } from "./screens/error";
import { ThemePreferenceContext } from "./theme/context";
import "./utils/ignore-logs";

function App() {
  const navigationRef = useRef<NavigationContainerRef<any>>(null);
  const { theme, ...preferences } = useThemePreferenceValues();

  return (
    <ThemePreferenceContext.Provider value={preferences}>
      <PaperProvider theme={theme as any}>
        <NavigationContainer theme={theme} ref={navigationRef}>
          <AppSafeAreaProvider>
            <MainErrorBoundary>
              <RootNavigator />
            </MainErrorBoundary>
          </AppSafeAreaProvider>
        </NavigationContainer>
      </PaperProvider>
    </ThemePreferenceContext.Provider>
  );
}

export default App;
