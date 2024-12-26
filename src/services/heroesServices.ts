import axios from "axios";
import { ResultHeroes, Search} from "../types/SuperHero";
import { HeroApiSchema, ResultsHeroeApiSchema } from "../utils/heroes-schema";

const API_URL = "https://superheroapi.com/api.php";

export const getSearchByName = async (filters:Search) => {
    try {
        const access_token = import.meta.env.VITE_API_KEY;
        const {data:search} = await axios(`${API_URL}/${access_token}/search/${filters.name}`)
        const results = ResultsHeroeApiSchema.safeParse(search)

        if (results.success) return results.data

    } catch (error) {
        console.log(error)
    }
};

export const getHeroById = async (id:ResultHeroes['id']) => {
    try {
        const access_token = import.meta.env.VITE_API_KEY;
        const {data:heroe} = await axios(`${API_URL}/${access_token}/${id}`)
        const result = HeroApiSchema.safeParse(heroe);
        
        if (result.success) return result.data
    } catch (error) {
        console.log(error)
    }
}


