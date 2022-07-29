import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteNames } from "../route-names";
import { BottomTabParamList } from "./tabbar";

// Home bottom tab
export type HomeStackParamList = {
  [RouteNames.home]: undefined;
};

// Home stack navigation prop
export type HomeStackNavigationProp<
  RouteName extends keyof HomeStackParamList,
> = CompositeNavigationProp<
  StackNavigationProp<HomeStackParamList, RouteName>,
  BottomTabNavigationProp<BottomTabParamList>
>;

// Home stack route prop
export type HomeStackRouteProp<RouteName extends keyof HomeStackParamList> =
  RouteProp<HomeStackParamList, RouteName>;
