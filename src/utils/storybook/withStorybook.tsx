import React from "react";
import { Button, Platform, View, ViewStyle } from "react-native";
import { Subtract } from "utility-types";
import { COMMON_STYLES } from "~theme/common-styles";
import StorybookUIRoot from "../../../.storybook/storybook";

export interface WithStorybookUIProps {
  showStorybookUI: boolean;
  setShowStorybookUI: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function withStorybookUI<T extends WithStorybookUIProps>(
  WrappedComponent: React.ComponentType<T>,
) {
  const EnhancedComponent = (props: Subtract<T, WithStorybookUIProps>) => {
    const [showStorybookUI, setShowStorybookUI] =
      React.useState<boolean>(false);

    const injectedProps: WithStorybookUIProps = {
      setShowStorybookUI,
      showStorybookUI,
    };

    return (
      <View style={COMMON_STYLES.FLEX}>
        {showStorybookUI ? (
          <StorybookUIRoot />
        ) : (
          <WrappedComponent {...injectedProps} {...(props as T)} />
        )}

        {__DEV__ && (
          <View style={buttonContainer}>
            <Button
              onPress={() => setShowStorybookUI((prev) => !prev)}
              title="Toggle storybook"
            />
          </View>
        )}
      </View>
    );
  };

  return EnhancedComponent;
}

const buttonContainer: ViewStyle = {
  // approximate bottom safe area inset for ios
  marginBottom: Platform.select({
    android: 0,
    ios: 15,
  }),
};
