import { RouteConfig, StackNavigationState } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationEventMap,
  StackNavigationOptions,
} from "@react-navigation/stack";
import * as React from "react";
import { HomeScreen } from "~screens/home";
import { RouteNames } from "../route-names";
import { HomeStackParamList } from "../types";

const Stack = createStackNavigator<HomeStackParamList>();

const homeStackRoutes: Array<
  RouteConfig<
    HomeStackParamList,
    keyof HomeStackParamList,
    StackNavigationState<HomeStackParamList>,
    StackNavigationOptions,
    StackNavigationEventMap
  >
> = [{ name: RouteNames.home, component: HomeScreen }];

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={RouteNames.home}>
      {homeStackRoutes.map((routes) => (
        <Stack.Screen key={routes.name} {...routes} />
      ))}
    </Stack.Navigator>
  );
}

export default HomeStack;
