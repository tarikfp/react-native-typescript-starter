import * as React from "react";
import { Text, View } from "react-native";
import { COMMON_STYLES } from "~theme/common-styles";

function ProfileScreen() {
  return (
    <View style={COMMON_STYLES.CENTER_CONTAINER}>
      <Text>Profile screen</Text>
    </View>
  );
}

export default ProfileScreen;
