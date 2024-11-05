import ListHeroes from "./components/ListHeroes";
import Search from "./components/Search"
import Spinner from "./components/Spinner";
import { useSuperHeroes } from "./hooks/useSuperHeroes";

function App() {

  const { search, setSearch, heroes, loading } = useSuperHeroes();

  return (

    <div className="container mx-auto mt-10">
      <Search search={search} setSearch={setSearch} />
      <div className="flex flex-wrap justify-center gap-10">
        {loading && <Spinner/>}
      {
        heroes === undefined ? (
          <h2 className="mt-10 text-4xl font-bold">Busca tu personaje favorito</h2>
        ) : (
          heroes.map(heroes => (
            <ListHeroes heroes={heroes} key={heroes.id} />
          ))
        )

      }
      </div>
      
    </div>
  )
}

export default App
