import * as React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationEventMap,
} from "@react-navigation/stack";
import { RouteConfig, StackNavigationState } from "@react-navigation/native";
import { ProfileScreen } from "@/screens/profile";
import { ProfileStackParamList } from "../types";
import { RouteNames } from "../route-names";

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
