import { create } from "zustand";

export const useImgUrlStore = create((set) => ({
    imgUrl: "",
    setImgUrl: (url: string) => set(({imgUrl: url}))
}))