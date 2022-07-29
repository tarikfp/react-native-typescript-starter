import * as React from "react";
import { COMMON_STYLES } from "@/theme/common-styles";
import { View } from "react-native";
import { Banner } from "@/components/shared/banner";
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
    </View>
  );
}

export default HomeScreen;
