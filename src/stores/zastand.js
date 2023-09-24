import { create } from "zustand";

const simpleSetter = (set, data, target) => (set((state) => ({ [target]: (state[target] = data) })));

export const userAuthState = create((set) => (
    {
        any: "",
        setAny: (data) => simpleSetter(set, data, "any"),
    }
));