import { ChangeEvent, Dispatch, SetStateAction } from "react"

type SearchProps = {
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
}

const Search = ({ search, setSearch }: SearchProps) => {

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <div>
            <input className="w-full p-3 border border-gray-500 rounded-md" type="text" placeholder="Heroes..." onChange={handleChange} value={search} />
        </div>
    )
}

export default Search
