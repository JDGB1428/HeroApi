import { useEffect, useState } from "react";
import { DataByName } from "../services/data";
import { SuperHero } from "../types/SuperHero";

type SearchState = {
    ApiState : SuperHero['results']
    ApiStateSearch : SuperHero['results-for']
}

export  const useSuperHeroes = () =>{
    const[heroes, setHeroes] = useState<SearchState['ApiState']>([]);
    const[search, setSearch] = useState<SearchState['ApiStateSearch']>("");

    useEffect(()=>{
        DataByName(setHeroes, search)
    },[search])

    return{
        search,
        setSearch,
        heroes
    }
}