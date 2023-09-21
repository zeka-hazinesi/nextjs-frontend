import { create } from "zustand";

export const useOptionStore = create((set) => ({
  option: "modern",
  setOption: (newOption: string) => set({ option: newOption }),
}));
