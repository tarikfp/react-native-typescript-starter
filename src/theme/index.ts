import { DefaultTheme } from "react-native-paper";
import { ms } from "react-native-size-matters";

export const theme: ReactNativePaper.Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#0075E1",
    background: "rgba(247, 249, 253, 1)",
    surface: "rgba(23, 37, 86, 0.4)",
    placeholder: "#F6F6F6",
    error: "#EE3F6C",
    paper: "#FFFFFF",
    textLight: "#8B92AB",
    text: "rgba(38, 40, 60, 1)",
    disabled: "rgba(119, 161, 243, 0.1)",
  },
  fonts: {
    ...DefaultTheme.fonts,
    h1: {
      fontFamily: "Poppins-Medium",
      fontSize: ms(40),
      lineHeight: ms(60),
      fontWeight: "500",
    },
    h2: {
      fontFamily: "Poppins-Medium",
      fontSize: ms(22),
      lineHeight: ms(32),
      fontWeight: "500",
    },
    h3: {
      fontFamily: "Poppins-Medium",
      fontSize: ms(16),
      lineHeight: ms(26),
      fontWeight: "500",
    },
    h4: {
      fontFamily: "Poppins-Medium",
      fontSize: ms(14),
      lineHeight: ms(20),
      fontWeight: "500",
    },
    p1: {
      fontFamily: "Poppins-Light",
      fontSize: ms(14),
      lineHeight: ms(24),
      fontWeight: "400",
    },
    p2: {
      fontFamily: "Poppins-Light",
      fontSize: ms(12),
      lineHeight: ms(16),
      fontWeight: "400",
    },
    p3: {
      fontFamily: "Poppins-Light",
      fontSize: ms(8),
      lineHeight: ms(14),
      fontWeight: "400",
    },
  },
};
