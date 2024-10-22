import { Result } from "../types/SuperHero"

type ListHeroes = {
    heroes:Result
}

const ListHeroes = ({heroes}:ListHeroes) => {
    return (
        <div>
            <img src={heroes.image.url} alt="imagen de heroes" />
            <p>{heroes.name}</p>
        </div>
    )
}

export default ListHeroes
