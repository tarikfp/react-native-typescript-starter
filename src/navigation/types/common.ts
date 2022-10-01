import {
  DefaultNavigatorOptions,
  ParamListBase,
  RouteConfig,
  StackNavigationState,
} from "@react-navigation/native";
import {
  StackNavigationEventMap,
  StackNavigationOptions,
} from "@react-navigation/stack";

// Stack navigator options
export type StackNavigatorOptions<ParamList extends ParamListBase> =
  DefaultNavigatorOptions<
    ParamList,
    StackNavigationState<ParamList>,
    StackNavigationOptions,
    StackNavigationEventMap
  >;

// Stack routes type
export type StackRoutesType<ParamList extends ParamListBase> = Array<
  RouteConfig<
    ParamList,
    keyof ParamList,
    StackNavigationState<ParamList>,
    StackNavigationOptions,
    StackNavigationEventMap
  >
>;
