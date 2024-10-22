import { Dispatch, SetStateAction } from "react"

type SearchProps = {
    search:string,
    setSearch: Dispatch<SetStateAction<string>>
}

const Search = ({search, setSearch}:SearchProps) => {
    
    return (
        <div>
            <input type="text" placeholder="Heroes" onChange={e => setSearch(e.target.value)} value={search}/>
        </div>
    )
}

export default Search
