import {
  BottomTabNavigationEventMap,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import { RouteConfig, StackNavigationState } from "@react-navigation/native";
import { RouteNames } from "../route-names";
import HomeStack from "../stacks/home";
import ProfileStack from "../stacks/profile";
import { BottomTabParamList } from "../types";
import { getBottomTabBarOptionByRouteName } from "./tabbar-options";

export const BottomTabBarRoutes: Array<
  RouteConfig<
    BottomTabParamList,
    keyof BottomTabParamList,
    StackNavigationState<BottomTabParamList>,
    BottomTabNavigationOptions,
    BottomTabNavigationEventMap
  >
> = [
  {
    options: getBottomTabBarOptionByRouteName(RouteNames.homeStack),
    name: RouteNames.homeStack,
    component: HomeStack,
  },
  {
    options: getBottomTabBarOptionByRouteName(RouteNames.profileStack),
    name: RouteNames.profileStack,
    component: ProfileStack,
  },
];
