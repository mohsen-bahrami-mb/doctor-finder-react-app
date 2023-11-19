import { create } from "zustand";

const useSearchResult = create((set) => ({
  result: null,
  onSetResult: (setResult) => {
    set({ result: setResult });
  }
}));

export default useSearchResult;
