import Geolocation, {
  GeolocationResponse,
} from "@react-native-community/geolocation";
import Geocoder from "@timwangdev/react-native-geocoder";
import { Alert, Platform } from "react-native";
import RNAndroidLocationEnabler from "react-native-android-location-enabler";
import { GOOGLE_API_KEY } from "react-native-dotenv";
import { UserTypes } from "../lib/user";

Geolocation.setRNConfiguration({
  authorizationLevel: "whenInUse",
  skipPermissionRequests: false,
});

export const requestGeolocationPermission = async () => {
  try {
    if (Platform.OS === "android") {
      await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
        interval: 10000,
        fastInterval: 5000,
      });
    } else {
      Geolocation.requestAuthorization();
    }
    return true;
  } catch (err) {
    Alert.alert("Error", JSON.stringify(err));
    return false;
  }
};

export const getGeocodedPosition = async (position: UserTypes.UserLocation) =>
  Geocoder.geocodePosition(
    {
      lat: Number(position.latitude),
      lng: Number(position.longitude),
    },
    { apiKey: GOOGLE_API_KEY },
  );

export const extractLatLongFromGeolocationResponse = (
  resp: GeolocationResponse,
): UserTypes.UserLocation => {
  return {
    latitude: resp.coords.latitude,
    longitude: resp.coords.longitude,
  };
};
