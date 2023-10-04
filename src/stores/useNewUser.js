import { create } from "zustand";

const useNewUser = create((set) => ({
  isUserOpen: false,
  onUserOpen: () => set({ isUserOpen: true }),
  onUserClose: () => set({ isUserOpen: false }),
}));

export default useNewUser;
