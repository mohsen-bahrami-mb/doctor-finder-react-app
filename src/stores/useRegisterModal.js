import { create } from "zustand";

const useRegisterModal = create((set) => ({
  isRegisterOpen: false,
  onRegisterOpen: () => set({ isRegisterOpen: true }),
  onRegisterClose: () => set({ isRegisterOpen: false }),
}));

export default useRegisterModal;
