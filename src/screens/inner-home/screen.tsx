import * as React from "react";
import { Text, View } from "react-native";
import { COMMON_STYLES } from "~theme/common-styles";

function InnerHomeScreen() {
  return (
    <View style={COMMON_STYLES.CENTER_CONTAINER}>
      <Text>Inner Home screen</Text>
    </View>
  );
}

export default InnerHomeScreen;
