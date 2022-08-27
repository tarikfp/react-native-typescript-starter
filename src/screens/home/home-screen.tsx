import * as React from "react";
import { Text, View } from "react-native";
import { Banner } from "~components/shared/banner";
import { COMMON_STYLES } from "~theme/common-styles";
import { appStorage, AppStorageKeys } from "~utils";
import { countToStr } from "./helpers";

function HomeScreen() {
  const [count, setCount] = React.useState<number>(0);

  return (
    <View testID="WelcomeScreen" style={COMMON_STYLES.CENTER_CONTAINER}>
      <Banner
        buttonLabel="Tap me"
        onPress={() => setCount((prev) => prev + 1)}
        title={countToStr(count)}
        subtitle="Count"
      />
      <Text>
        I am the value from mmkv storage{" "}
        {appStorage.getString(AppStorageKeys.TEST)}
      </Text>
    </View>
  );
}

export default HomeScreen;
