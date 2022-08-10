import { RouteConfig, StackNavigationState } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationEventMap,
  StackNavigationOptions,
} from "@react-navigation/stack";
import * as React from "react";
import { LaunchScreen } from "~screens/launch";
import { LoginScreen } from "~screens/login";
import { SignUpScreen } from "~screens/sign-up";
import { RouteNames } from "../route-names";
import { AuthStackParamList } from "../types";

const Stack = createStackNavigator<AuthStackParamList>();

const authStackRoutes: Array<
  RouteConfig<
    AuthStackParamList,
    keyof AuthStackParamList,
    StackNavigationState<AuthStackParamList>,
    StackNavigationOptions,
    StackNavigationEventMap
  >
> = [
  { name: RouteNames.login, component: LoginScreen },
  { name: RouteNames.signUp, component: SignUpScreen },
  { name: RouteNames.launch, component: LaunchScreen },
];

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={RouteNames.launch}>
      {authStackRoutes.map((routes) => (
        <Stack.Screen key={routes.name} {...routes} />
      ))}
    </Stack.Navigator>
  );
}

export default AuthStack;
