import { useMemo } from "react"
import { useAppStore } from "../store/useAppStore"
import CardHeroes from "../components/CardHeroes"


export default function FavoritePages() {
    const favoriteHeroe = useAppStore(state => state.favorite)
    const hasFavorite = useMemo(() => favoriteHeroe.length,[favoriteHeroe])
    return (
        <>
            <h1 className="text-6xl font-extrabold">Favoritos</h1>
            {
                hasFavorite ? (
                <div className="grid grid-cols-1 gap-10 my-10 md:grid-cols-2 2xl:grid-cols-3">
                    {
                        favoriteHeroe.map(heroes => (
                            <CardHeroes key={heroes.id} heroes={heroes}/>
                        ))
                    }
                </div>

                ) : (
                    <p className="my-10 text-2xl text-center">No hay resultado, Aqui aparecerán tu heroes favoritos</p>
                )
            }
        </>
    )
}
