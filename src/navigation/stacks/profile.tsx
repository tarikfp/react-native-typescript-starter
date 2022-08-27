import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { ProfileScreen } from "~screens/profile";
import { profileStackNavigationOptions } from "../helpers/stack-screen-options";
import { RouteNames } from "../route-names";
import { ProfileStackParamList, StackRoutesType } from "../types";

const Stack = createStackNavigator<ProfileStackParamList>();

const profileStackRoutes: StackRoutesType<ProfileStackParamList> = [
  { name: RouteNames.profile, component: ProfileScreen },
];

function ProfileStack() {
  return (
    <Stack.Navigator {...profileStackNavigationOptions}>
      {profileStackRoutes.map((routes) => (
        <Stack.Screen key={routes.name} {...routes} />
      ))}
    </Stack.Navigator>
  );
}

export default ProfileStack;
