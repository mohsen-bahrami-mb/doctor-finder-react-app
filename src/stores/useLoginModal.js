import { create } from "zustand";

const useLoginModal = create((set) => ({
  isLoginOpen: false,
  onLoginOpen: () => set({ isLoginOpen: true }),
  onLoginClose: () => set({ isLoginOpen: false }),
}));

export default useLoginModal;
