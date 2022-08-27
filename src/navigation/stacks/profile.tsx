import { RouteConfig, StackNavigationState } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationEventMap,
  StackNavigationOptions,
} from "@react-navigation/stack";
import * as React from "react";
import { ProfileScreen } from "~screens/profile";
import { RouteNames } from "../route-names";
import { ProfileStackParamList } from "../types";

const Stack = createStackNavigator<ProfileStackParamList>();

const profileStackRoutes: Array<
  RouteConfig<
    ProfileStackParamList,
    keyof ProfileStackParamList,
    StackNavigationState<ProfileStackParamList>,
    StackNavigationOptions,
    StackNavigationEventMap
  >
> = [{ name: RouteNames.profile, component: ProfileScreen }];

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={RouteNames.profile}>
      {profileStackRoutes.map((routes) => (
        <Stack.Screen key={routes.name} {...routes} />
      ))}
    </Stack.Navigator>
  );
}

export default ProfileStack;
