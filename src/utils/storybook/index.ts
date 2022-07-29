import { select } from "@storybook/addon-knobs";
import type { IconType } from "@tarikfp/react-native-utils";

/**
 * @returns storybook selectable addons in order to pick font family
 */

export const selectFontFamily = (defaultFamily?: IconType) =>
  select(
    "Select Icon type",
    {
      AntDesign: "AntDesign",
      MaterialIcons: "MaterialIcons",
      EvilIcons: "EvilIcons",
      Entypo: "Entypo",
      FontAwesome: "FontAwesome",
      Foundation: "Foundation",
      Ionicons: "Ionicons",
      MaterialCommunityIcons: "MaterialCommunityIcons",
      Zocial: "Zocial",
      Octicons: "Octicons",
      SimpleLineIcons: "SimpleLineIcons",
      Fontisto: "Fontisto",
      Feather: "Feather",
      FontAwesome5: "FontAwesome5",
    },
    defaultFamily ?? "MaterialCommunityIcons",
  );
