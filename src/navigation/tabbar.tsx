import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "./types";
import { RouteNames } from "./route-names";
import { BottomTabBarRoutes } from "./helpers/tabbar-routes";

const Tab = createBottomTabNavigator<BottomTabParamList>();

function TabBar() {
  return (
    <Tab.Navigator initialRouteName={RouteNames.homeStack}>
      {BottomTabBarRoutes.map((routeParams) => (
        <Tab.Screen key={routeParams.name} {...routeParams} />
      ))}
    </Tab.Navigator>
  );
}

export default TabBar;
