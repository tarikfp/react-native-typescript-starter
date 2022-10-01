import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import * as React from "react";
import { Alert } from "react-native";

export const useNetInfoListener = (
  callback: (netState: NetInfoState) => void,
): void => {
  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      callback(state);
    });
    return () => {
      unsubscribe();
    };
  }, [callback]);
};

export const handleCheckNetworkActivity = async (): Promise<void> => {
  const netInfo = await NetInfo.fetch();
  if (!netInfo.isConnected) {
    Alert.alert("Warning", "No internet", [{ text: "Ok" }]);
  }
};
