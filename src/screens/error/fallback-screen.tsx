import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

interface Props {
  resetState: () => void;
}

function FallbackScreen({ resetState }: Props) {
  return (
    <View style={styles.container}>
      <Text>Fallback screen</Text>
      <Button title="Go home" onPress={resetState} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FallbackScreen;
