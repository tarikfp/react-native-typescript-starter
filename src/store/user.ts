import { GeocodingObject } from "@timwangdev/react-native-geocoder";
import create from "zustand";
import { UserTypes } from "../lib/user";
import { UserLocation } from "../lib/user/types";

export interface UserStore {
  user: UserTypes.User;
  setInitialLocation: (
    initialLocation: UserLocation,
    geocodedPosition: GeocodingObject,
  ) => void;
  setLiveLocation: (initialLocation: UserLocation) => void;
  setSelectedLocation: (initialLocation: UserLocation) => void;
  initializeUserStore: (user: UserTypes.User) => void;
  resetUserStore: () => void;
}

const emptyUser: UserTypes.User = {
  geocodedPosition: undefined,
  initialLocation: undefined,
  liveLocation: undefined,
  selectedLocation: undefined,
};

const useUserStore = create<UserStore>((set) => ({
  user: emptyUser,

  setInitialLocation: (
    initialLocation: UserLocation,
    geocodedPosition: GeocodingObject,
  ) =>
    set(({ user: stateUser }) => ({
      user: { ...stateUser, initialLocation, geocodedPosition },
    })),

  setLiveLocation: (liveLocation: UserLocation) =>
    set(({ user: stateUser }) => ({ user: { ...stateUser, liveLocation } })),

  setSelectedLocation: (selectedLocation: UserLocation) =>
    set(({ user: stateUser }) => ({
      user: { ...stateUser, selectedLocation },
    })),

  initializeUserStore: (user: UserTypes.User) => set({ user }),

  resetUserStore: () =>
    set({
      user: emptyUser,
    }),
}));

export function initializeUserStore(user: UserTypes.User) {
  useUserStore.setState({ user });
}

export function resetUserStore() {
  useUserStore.setState({
    user: emptyUser,
  });
}

export default useUserStore;
