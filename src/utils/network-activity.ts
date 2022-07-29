import * as React from "react";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { showNativeAlert } from "@tarikfp/react-native-utils";

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
    showNativeAlert({
      content: "No internet",
      buttonOneText: "Ok",
    });
  }
};
