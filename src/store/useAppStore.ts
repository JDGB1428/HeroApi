import { create } from "zustand";
import { CreateHeroeSlice, HeroeSliceType } from "./HeroeSlice";
import { devtools } from "zustand/middleware";


export const useAppStore = create<HeroeSliceType>()(devtools((...a) => ({
    ...CreateHeroeSlice(...a)
})))