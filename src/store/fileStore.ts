import { create } from "zustand";

export const useFileStore = create((set) => ({
  file: null,
  setFile: (file: File) => set({ file: file }),
}));
