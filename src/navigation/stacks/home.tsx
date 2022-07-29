import * as React from "react";
import {
  createStackNavigator,
  StackNavigationOptions,
  StackNavigationEventMap,
} from "@react-navigation/stack";
import { RouteConfig, StackNavigationState } from "@react-navigation/native";
import { HomeScreen } from "@/screens/home";
import { HomeStackParamList } from "../types";
import { RouteNames } from "../route-names";

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
