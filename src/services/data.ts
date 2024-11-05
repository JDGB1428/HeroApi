import { Result, SuperHero } from "../types/SuperHero";
import { Dispatch, SetStateAction } from "react";
import axios from "axios";

const API_URL = "https://superheroapi.com/api.php";

export const DataByName = async (state: Dispatch<SetStateAction<SuperHero["results"]>>, name: string) => {
    const access_token = import.meta.env.VITE_API_KEY;
    try {
        const {data:hero_name} = await axios(`${API_URL}/${access_token}/search/${name}`);    
        state(hero_name.results)
    } catch (error) {
        console.log(error);
    }
};

export const DataById = async (state: Dispatch<SetStateAction<Result[]>>, id: number) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        state(data.results);
    } catch (error) {
        console.log(error)
    }
}
