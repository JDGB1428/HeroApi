import { Result } from "../types/SuperHero"

type ListHeroes = {
    heroes: Result
}

const ListHeroes = ({ heroes }: ListHeroes) => {
    return (
        <div className="p-5 mt-10 rounded-md shadow-md w-72">
            <img src={heroes.image.url} alt="imagen de heroes" />
            <div className="mt-4">
                <p><span className="font-bold">Nombre: </span>{heroes.name}</p>
                <h1><span className="font-bold">Primer aparición: </span>{heroes.biography["first-appearance"]}</h1>
                <div className="p-5">
                    <h2 className="font-bold">Estadistica de poderes</h2>
                    <p><span className="font-bold">Combate: </span>{heroes.powerstats.combat}</p>
                    <p><span className="font-bold">Durabilidad: </span>{heroes.powerstats.durability}</p>
                    <p><span className="font-bold">Inteligencia: </span>{heroes.powerstats.intelligence}</p>
                    <p><span className="font-bold">Poder: </span>{heroes.powerstats.power}</p>
                    <p><span className="font-bold">Velocidad: </span>{heroes.powerstats.speed}</p>
                    <p><span className="font-bold">Fuerza: </span>{heroes.powerstats.strength}</p>
                </div>
            </div>
        </div>

    )
}

export default ListHeroes
