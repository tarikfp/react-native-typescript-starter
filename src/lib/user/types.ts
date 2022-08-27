export type UserLocation = {
  readonly latitude: string;
  readonly longitude: string;
};

export type User = {
  location: UserLocation;
  selectedLocation: UserLocation;
};
