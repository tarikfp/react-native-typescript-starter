import { text, withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react-native";
import React from "react";
import { View } from "react-native";
import { COMMON_STYLES } from "~theme/common-styles";
import Button from "./button";

storiesOf("Buttons", module)
  .addDecorator(withKnobs)
  .addDecorator((getStory) => (
    <View style={COMMON_STYLES.CENTER_CONTAINER}>{getStory()}</View>
  ))
  .add("Base Button", () => (
    <Button label={text("title", "Use KNOBS to change me!")} />
  ));
