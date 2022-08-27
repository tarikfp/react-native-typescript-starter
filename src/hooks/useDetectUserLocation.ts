import Geolocation, {
  GeolocationError,
  GeolocationResponse,
} from "@react-native-community/geolocation";
import React from "react";
import { Alert } from "react-native";

Geolocation.setRNConfiguration({
  authorizationLevel: "whenInUse",
  skipPermissionRequests: false,
});

export default function useDetectUserLocation() {
  const watchID = React.useRef<number | null>(null);

  const [watchPosition, setWatchPosition] = React.useState<
    GeolocationResponse | undefined
  >(undefined);

  const [initialPosition, setInitialPosition] = React.useState<
    GeolocationResponse | undefined
  >(undefined);

  const [initialPositionError, setInitialPositionError] = React.useState<
    GeolocationError | undefined
  >(undefined);

  const [watchPositionError, setWatchPositionError] = React.useState<
    GeolocationError | undefined
  >(undefined);

  React.useEffect(() => {
    Geolocation.getCurrentPosition(
      setInitialPosition,
      (err) => {
        Alert.alert("Error", JSON.stringify(err));
        setInitialPositionError(err);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );

    watchID.current = Geolocation.watchPosition(setWatchPosition, (err) => {
      Alert.alert("Error", JSON.stringify(err));
      setWatchPositionError(err);
    });

    return () => {
      Geolocation.stopObserving();

      if (watchID.current !== null) {
        Geolocation.clearWatch(watchID.current);
      }
    };
  }, []);

  return {
    initialPosition,
    initialPositionError,
    watchPosition,
    watchPositionError,
  };
}
