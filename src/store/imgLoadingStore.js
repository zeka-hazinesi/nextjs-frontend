import { create } from "zustand";

export const useImgLoadingStore = create((set) => ({
    imgLoading: false,
    setImgLoading: (state) => set(({imgLoading: state}))
}))