import { Result, SuperHero } from "../types/SuperHero";
import { Dispatch, SetStateAction } from "react";

const API_URL = "https://superheroapi.com/api.php/a351cd630422caa56c975b8636b91b20";

export const DataByName = async (state: Dispatch<SetStateAction<SuperHero["results"]>>, name: string) => {
    try {
        const response = await fetch(`${API_URL}/search/${name}`);
        const data = await response.json();
        state(data.results)
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
