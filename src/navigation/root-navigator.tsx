import * as React from "react";
import { useDetectUserLocation } from "../hooks";
import useUserStore from "../store/user";
import { getGeocodedPosition } from "../utils/location";
import { default as AppBottomBar } from "./tabbar";

function RootNavigator() {
  const { setInitialLocation, setSelectedLocation } = useUserStore((state) => ({
    setInitialLocation: state.setInitialLocation,
    setSelectedLocation: state.setSelectedLocation,
  }));

  const {
    initialPosition,
    watchPosition,
    initialPositionError,
    watchPositionError,
  } = useDetectUserLocation();

  const handleInitializeUserLocation = React.useCallback(async () => {
    if (typeof initialPositionError === "undefined") {
      const [geocodedPosition] = await getGeocodedPosition({
        latitude: initialPosition?.coords.latitude as number,
        longitude: initialPosition?.coords.longitude as number,
      });

      setInitialLocation(
        {
          latitude: initialPosition?.coords.latitude as number,
          longitude: initialPosition?.coords.longitude as number,
        },
        geocodedPosition,
      );
    }
  }, [
    initialPosition?.coords.latitude,
    initialPosition?.coords.longitude,
    initialPositionError,
    setInitialLocation,
  ]);

  React.useEffect(() => {
    handleInitializeUserLocation();
  }, [handleInitializeUserLocation]);

  return <AppBottomBar />;
}

export default RootNavigator;
