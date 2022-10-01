import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { HomeScreen } from "~screens/home";
import { RouteNames } from "../route-names";
import { HomeStackParamList, StackRoutesType } from "../types";

const Stack = createStackNavigator<HomeStackParamList>();

const homeStackRoutes: StackRoutesType<HomeStackParamList> = [
  { name: RouteNames.home, component: HomeScreen },
];

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
