import { Font } from "./types";

declare global {
  namespace ReactNativePaper {
    interface ThemeFonts {
      h1: Font;
      h2: Font;
      h3: Font;
      h4: Font;
      p1: Font;
      p2: Font;
      p3: Font;
    }
    interface ThemeColors {
      paper: string;
      textLight: string;
      border: string;
      primaryLight: string;
      primaryDisabled: string;
      secondary: string;
    }
  }
}
