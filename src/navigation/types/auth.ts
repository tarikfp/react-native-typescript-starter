import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteNames } from "../route-names";

// Auth stack
export type AuthStackParamList = {
  [RouteNames.signUp]: undefined;
  [RouteNames.login]: undefined;
  [RouteNames.launch]: undefined;
};

// Auth stack navigation prop
export type AuthStackNavigationProp<T extends keyof AuthStackParamList> =
  StackNavigationProp<AuthStackParamList, T>;

// Auth stack route prop
export type AuthStackRouteProp<T extends keyof AuthStackParamList> = RouteProp<
  AuthStackParamList,
  T
>;
