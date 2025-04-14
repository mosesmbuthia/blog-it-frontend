
import { create } from "zustand";
import { persist } from "zustand/middleware";

const userStore = (set) => ({
  user: null,

  setUserInformation: (userObj) => set({ user: userObj }),

  removeUserInformation: () => set({ user: null }),
});

const useUserStore = create(
  persist(userStore, {
    name: "user-storage", 
  })
);

export default useUserStore;
