import { ChangeEvent, FormEvent, useState } from "react"
import { useAppStore } from "../store/useAppStore"


const Search = () => {

    const[searchFilters, setSearchFilters] = useState({
        name:''
    })

    const search = useAppStore(state => state.fetchHeroesBySearch)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchFilters({
            ...searchFilters,
            [e.target.name] : e.target.value
        })
    }
    
    const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(Object.values(searchFilters).includes('')){
            console.log('todos los campos son obligatorio')
            return
        }
        search(searchFilters)
    }

    return (
        <form onSubmit={handleSubmit} className="p-10 my-5 bg-indigo-800 rounded md:w-1/2 2xl:w-1/3">
            <div className="mb-5">
                <label htmlFor="name" className="text-3xl font-extrabold text-white">Busca tu super heroes</label>
                <input className="w-full p-3 border border-gray-500 rounded-md" 
                        type="text" placeholder="Heroes..."
                        name="name" 
                        onChange={handleChange} 
                        value={searchFilters.name}/>
            </div>
            <input type="submit" className="w-full p-3 font-bold uppercase bg-indigo-400 rounded-md cursor-pointer" value='Buscar' />
        </form>
        
    )
}

export default Search
