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
    const[loading,setLoading] = useState(false);

    useEffect(()=>{
        Isloading();
    },[search])

    const Isloading = async() => {
        try {
            setLoading(true)
            DataByName(setHeroes, search)
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    return{
        search,
        setSearch,
        heroes,
        loading
    }
}