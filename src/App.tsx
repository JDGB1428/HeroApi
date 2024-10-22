import ListHeroes from "./components/ListHeroes";
import Search from "./components/Search"
import { useSuperHeroes } from "./hooks/useSuperHeroes";

function App() {

  const { search, setSearch, heroes } = useSuperHeroes();

  return (
    <>
      <Search search={search} setSearch={setSearch} />
      <div className="container mx-auto">
        {
          heroes === undefined ? (
            <p>No hay personajes, Busca tu personaje favorito</p>
          ) : ( 
            
            heroes.map(heroes => (
              <ListHeroes heroes={heroes} key={heroes.id} />
            ))
          )
          
        }
      </div>
    </>
  )
}

export default App
