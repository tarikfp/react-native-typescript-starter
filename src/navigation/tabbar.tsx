import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { BottomTabBarRoutes } from "./helpers/tabbar-routes";
import { RouteNames } from "./route-names";
import { BottomTabParamList } from "./types";

const Tab = createBottomTabNavigator<BottomTabParamList>();

function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={RouteNames.homeStack}>
      {BottomTabBarRoutes.map((routeParams) => (
        <Tab.Screen key={routeParams.name} {...routeParams} />
      ))}
    </Tab.Navigator>
  );
}

export default TabBar;
