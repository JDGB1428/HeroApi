import { StateCreator } from "zustand"
import { CreateHeroeSlice, HeroeSliceType } from "./HeroeSlice"
import { Hero } from "../types/SuperHero"
import { CreateNotificationSlice, NotificationSliceType } from "./NotificationSlice"

export type FavoriteSliceType = {
    favorite: Hero[]
    handleClickFavorite:(select:Hero) => void,
    favoriteHeroeExits:(id:Hero['id']) => boolean
    load_from_storage: () => void
}

export const CreateFavoriteSlice: StateCreator<FavoriteSliceType & HeroeSliceType & NotificationSliceType, [], [], FavoriteSliceType> = (set,get,api) => ({
    favorite:[],
    handleClickFavorite: (select) => {
        if(get().favoriteHeroeExits(select.id)){
            set((state)=>({
                favorite: state.favorite.filter((hero) => hero.id !== select.id)
            }))
            CreateNotificationSlice(set,get,api).ShowNotification({
                text:'Se ha eliminado de favoritos',
                error:true
            })
        }else{
            set((state)=>({
                favorite:[...state.favorite, select]
            }))
            CreateNotificationSlice(set,get,api).ShowNotification({
                text:'Se ha agregado a favoritos',
                error:false
            })
        }
        CreateHeroeSlice(set,get,api).closeModal()
        localStorage.setItem('favorite', JSON.stringify(get().favorite))
    },
    favoriteHeroeExits: (id) => {
        return get().favorite.some((hero) => hero.id === id)
    },
    load_from_storage: () => {
        const storeFavorite = localStorage.getItem('favorite')
        if(storeFavorite){
            set({
                favorite: JSON.parse(storeFavorite)
            })
        }
    }
})