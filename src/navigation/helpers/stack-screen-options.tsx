import { theme } from "../../theme";
import { RouteNames } from "../route-names";
import {
  HomeStackParamList,
  ProfileStackParamList,
  StackNavigatorOptions,
} from "../types";

export const homeStackNavigatorOptions: Omit<
  StackNavigatorOptions<HomeStackParamList>,
  "children"
> = {
  initialRouteName: RouteNames.home,
  screenOptions: {
    headerStyle: {
      backgroundColor: theme.colors.primary,
    },
    headerTitleStyle: {
      ...theme.fonts.h3,
      color: theme.colors.paper,
    },
    headerTintColor: theme.colors.paper,
  },
};

export const profileStackNavigationOptions: Omit<
  StackNavigatorOptions<ProfileStackParamList>,
  "children"
> = {
  initialRouteName: RouteNames.profile,
  screenOptions: {
    headerStyle: {
      backgroundColor: theme.colors.primary,
    },
    headerTitleStyle: {
      ...theme.fonts.h3,
      color: theme.colors.paper,
    },
    headerTintColor: theme.colors.paper,
  },
};
