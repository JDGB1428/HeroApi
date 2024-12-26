import { ResultHeroes } from "../types/SuperHero"
import { useAppStore } from "../store/useAppStore"

type CardHeroesProps = {
    heroes: ResultHeroes
}


const CardHeroes = ({ heroes }: CardHeroesProps) => {
    const fetchHeroesId = useAppStore(state => state.fetchHeroeById)
    return (
        <div className="p-5 mt-10 bg-indigo-800 rounded-md shadow-md">
            <img src={heroes.image.url} alt="imagen de heroes" />
            <div className="my-2 space-y-5">
                <h1 className="text-3xl font-bold text-white">{heroes.name}</h1>
                <button className="w-full p-2 font-bold text-white bg-indigo-400 rounded-md" onClick={() => fetchHeroesId(heroes.id)}> Ver más</button>
            </div>
        </div>

    )
}

export default CardHeroes
