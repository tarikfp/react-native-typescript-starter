import * as React from "react";
import { Text, View } from "react-native";
import { COMMON_STYLES } from "~theme/common-styles";

function LoginScreen() {
  return (
    <View style={COMMON_STYLES.CENTER_CONTAINER}>
      <Text>Login screen</Text>
    </View>
  );
}

export default LoginScreen;
