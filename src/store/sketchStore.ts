import { create } from "zustand";

export const useSketchStore = create((set) => ({
    sketch: null,
    setSketch: (newSketch: File) => set({sketch: newSketch})
}))