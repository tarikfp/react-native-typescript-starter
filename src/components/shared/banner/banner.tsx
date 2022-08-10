import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "~components/button";

type Props = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  onPress: () => void;
};

export default function Banner({
  title,
  subtitle,
  buttonLabel,
  onPress,
}: Props) {
  return (
    <View style={styles.container}>
      <Text testID="counter" style={styles.title}>
        {title}
      </Text>

      <Text style={styles.subtitle}>{subtitle}</Text>

      <View style={styles.spacing} />

      <Button testID="tap-me" onPress={onPress} label={buttonLabel} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 24,
    height: 200,
    backgroundColor: "#ffff",
  },
  title: {
    fontSize: 26,
  },
  subtitle: {
    fontSize: 18,
  },
  spacing: {
    marginVertical: 8,
  },
});
