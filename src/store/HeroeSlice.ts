import { StateCreator } from "zustand";
import { getHeroById, getSearchByName } from "../services/heroesServices";
import { Hero, Result, ResultHeroes, Search } from "../types/SuperHero";
import { FavoriteSliceType } from "./FavoriteSlice";

export type HeroeSliceType ={
    heroes: Result
    modal:boolean
    selectHeroe: Hero
    fetchHeroesBySearch: (filters:Search) => Promise<void>
    fetchHeroeById: (id:ResultHeroes['id']) => Promise<void>
    closeModal: () => void
}



export const CreateHeroeSlice: StateCreator<HeroeSliceType & FavoriteSliceType, [], [], HeroeSliceType> = (set) => ({
    heroes:{
        results:[]
    },
    selectHeroe:{} as Hero,
    modal:false,
    fetchHeroesBySearch: async (filters) => {
        const heroes = await getSearchByName(filters)
        set({
            heroes
        })
    },
    fetchHeroeById: async (id:Hero['id']) => {
        const selectHeroe = await getHeroById(id)
        set({
            selectHeroe,
            modal:true
        })
    },
    closeModal: () => {
        set({
            modal:false,
            selectHeroe:{} as Hero
        })
    },
})