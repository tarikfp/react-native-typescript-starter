import { TextStyle } from "react-native";

export type Font = Partial<
  Pick<TextStyle, "fontSize" | "fontFamily" | "fontWeight" | "lineHeight">
>;
