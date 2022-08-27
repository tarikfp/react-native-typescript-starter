import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { RouteNames } from "~navigation/route-names";

export const getBottomTabBarOptionByRouteName = (
  routeName: RouteNames,
): BottomTabNavigationOptions => {
  switch (routeName) {
    case RouteNames.homeStack:
      return {
        tabBarLabel: "Home",
        tabBarIcon: (props) => <FontAwesome5 name="home" {...props} />,
      };
    case RouteNames.profileStack:
      return {
        tabBarLabel: "Profile",
        tabBarIcon: (props) => <FontAwesome5 name="user" {...props} />,
      };
    default:
      throw new Error(
        `Unknown route name - getBottomTabBarOptionByRouteName ${routeName}`,
      );
  }
};
