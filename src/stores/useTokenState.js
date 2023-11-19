import { create } from "zustand";

const useTokenState = create((set) => ({
  isToken: localStorage.getItem("token") || null,
  isUser: JSON.parse(localStorage.getItem("user")) || null,
  onSetToken: (credential) => {
    set({ isToken: credential });
    localStorage.setItem("token", credential);
  },
  onSetUser: (userData) => {
    set({ isUser: userData });
    localStorage.setItem("user", JSON.stringify(userData));
  },
}));

export default useTokenState;
