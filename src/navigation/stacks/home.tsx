import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { TFunction, useTranslation } from "react-i18next";
import { HomeScreen } from "~screens/home";
import { homeStackNavigatorOptions } from "../helpers/stack-screen-options";
import { RouteNames } from "../route-names";
import { HomeStackParamList, StackRoutesType } from "../types";

const Stack = createStackNavigator<HomeStackParamList>();

const homeStackRoutes = (t: TFunction): StackRoutesType<HomeStackParamList> => [
  {
    name: RouteNames.home,
    component: HomeScreen,
    options: { title: t("pharmacies-on-duty") },
  },
];

function HomeStack() {
  const { t } = useTranslation();
  return (
    <Stack.Navigator {...homeStackNavigatorOptions}>
      {homeStackRoutes(t).map((routes) => (
        <Stack.Screen key={routes.name} {...routes} />
      ))}
    </Stack.Navigator>
  );
}

export default HomeStack;
