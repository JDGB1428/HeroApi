import { create } from "zustand";
import { CreateHeroeSlice, HeroeSliceType } from "./HeroeSlice";
import { devtools } from "zustand/middleware";
import { CreateFavoriteSlice, FavoriteSliceType } from "./FavoriteSlice";
import { CreateNotificationSlice, NotificationSliceType } from "./NotificationSlice";


export const useAppStore = create<HeroeSliceType & FavoriteSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...CreateHeroeSlice(...a),
    ...CreateFavoriteSlice(...a),
    ...CreateNotificationSlice(...a)
})))