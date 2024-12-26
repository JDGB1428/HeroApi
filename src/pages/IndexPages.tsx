import { useMemo } from "react"
import CardHeroes from "../components/CardHeroes"
import { useAppStore } from "../store/useAppStore"



export default function IndexPages() {

    const heroes = useAppStore(state => state.heroes)
    const hasHeroes = useMemo(() => heroes.results.length, [heroes])
    
    return (
        <>
            <h1 className="text-6xl font-extrabold">Super Heroes</h1>
            { hasHeroes ? (
                <div className="grid grid-cols-1 gap-10 my-10 md:grid-cols-2 2xl:grid-cols-3">
                    {
                        heroes.results.map((heroes) => (
                            <CardHeroes heroes={heroes} key={heroes.id}/>
                        ))
                    }
                </div>
            ) : (
                <p className="my-10 text-2xl text-center">No hay resultado, Utiliza el formulario para buscar heroes</p>
            )
            }
        </>
    )
}
