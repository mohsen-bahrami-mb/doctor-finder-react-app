import { create } from "zustand";

const useTokenState = create((set) => ({
  isToken: localStorage.getItem("token") || null,
  isUser: localStorage.getItem("user") || null,
  onSetToken: (credential) => {
    set({ isToken: credential });
    localStorage.setItem("token", credential);
  },
  onSetUser: (userData) => {
    set({ isUser: userData });
    localStorage.setItem("user", userData);
  },
}));

export default useTokenState;
