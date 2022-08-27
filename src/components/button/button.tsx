import * as React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type Props = TouchableOpacityProps & {
  label: string;
};

export default function Button({
  label,
  style,
  ...touchableOpacityProps
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.touchableOpacity, style]}
      {...touchableOpacityProps}>
      <Text style={styles.labelText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableOpacity: {
    backgroundColor: "orange",
    minWidth: 120,
    minHeight: 35,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  labelText: {
    fontSize: 18,
    color: "#ffff",
  },
});
