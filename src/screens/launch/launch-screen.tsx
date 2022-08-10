import * as React from "react";
import { Button, Text, View } from "react-native";
import { COMMON_STYLES } from "~theme/common-styles";

function LaunchScreen() {
  const [count, setCount] = React.useState(0);

  return (
    <View testID="WelcomeScreen" style={COMMON_STYLES.CENTER_CONTAINER}>
      <Text>Launch screen</Text>
      <Button
        testID="tap-me"
        title="tap me"
        onPress={() => setCount((prevCount) => prevCount + 1)}
      />
      <Text testID="counter">{count}</Text>
    </View>
  );
}

export default LaunchScreen;
