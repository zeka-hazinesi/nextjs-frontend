import { create } from "zustand";

export const useSketchStore = create((set) => ({
    sketch: null,
    setSketch: (newSketch) => set({sketch: newSketch})
}))