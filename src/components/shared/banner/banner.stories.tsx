import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import { COMMON_STYLES } from "~theme/common-styles";
import Banner from "./banner";

storiesOf("Shared", module)
  .addDecorator(withKnobs)
  .addDecorator((getStory) => (
    <View style={COMMON_STYLES.CENTER_CONTAINER}>{getStory()}</View>
  ))
  .add("App banner", () => (
    <Banner
      onPress={() => null}
      buttonLabel={text("Button label", "Button label")}
      title={text("title", "Banner title")}
      subtitle={text("subtitle", "Banner subtitle")}
    />
  ));
