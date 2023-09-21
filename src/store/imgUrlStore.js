import { create } from "zustand";

export const useImgUrlStore = create((set) => ({
    imgUrl: "",
    setImgUrl: (url) => set(({imgUrl: url}))
}))