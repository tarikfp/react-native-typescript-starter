import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp, RouteProp } from "@react-navigation/native";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RouteNames } from "../route-names";
import { BottomTabParamList } from "./tabbar";

// Profile bottom tab
export type ProfileStackParamList = {
  [RouteNames.profile]: undefined;
};

// Profile stack navigation prop
export type ProfileStackNavigationProp<
  RouteName extends keyof ProfileStackParamList,
> = CompositeNavigationProp<
  StackNavigationProp<ProfileStackParamList, RouteName>,
  BottomTabNavigationProp<BottomTabParamList>
>;

// Profile stack route prop

export type ProfileStackRouteProp<
  RouteName extends keyof ProfileStackParamList,
> = RouteProp<ProfileStackParamList, RouteName>;

// Profile stack screen props
export type ProfileStackScreenProp<
  RouteName extends keyof ProfileStackParamList,
> = StackScreenProps<ProfileStackParamList, RouteName>;
