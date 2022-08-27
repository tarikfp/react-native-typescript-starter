import { GeocodingObject } from "@timwangdev/react-native-geocoder";

export type UserLocation = {
  readonly latitude: number;
  readonly longitude: number;
};

export type User = {
  geocodedPosition: GeocodingObject | undefined;
  initialLocation: UserLocation | undefined;
  liveLocation: UserLocation | undefined;
  selectedLocation: UserLocation | undefined;
};
