import create from "zustand";

export interface AppStore {
  appLaunchLoading: boolean;
  setAppLaunchLoading: (val: boolean) => void;
}

const useAppStore = create<AppStore>((set) => ({
  appLaunchLoading: true,
  setAppLaunchLoading: (val: boolean) => set({ appLaunchLoading: val }),
}));

export default useAppStore;
