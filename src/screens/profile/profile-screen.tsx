/* eslint-disable @typescript-eslint/no-unused-vars */
import { useNavigation, useRoute } from "@react-navigation/native";
import * as React from "react";
import { Text, View } from "react-native";
import { RouteNames } from "~navigation/route-names";
import { ProfileStackScreenProp } from "~navigation/types";
import { COMMON_STYLES } from "~theme/common-styles";

function ProfileScreen() {
  // navigation/route initializer with typed hooks
  const navigation =
    useNavigation<ProfileStackScreenProp<RouteNames.profile>["navigation"]>();

  const route = useRoute<ProfileStackScreenProp<RouteNames.profile>["route"]>();

  return (
    <View style={COMMON_STYLES.CENTER_CONTAINER}>
      <Text>Profile screen</Text>
    </View>
  );
}

export default ProfileScreen;
