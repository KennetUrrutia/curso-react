import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { increment } from "./store/slices/counter"
import { getPokemons } from "./store/slices/pokemon"

export const PokemonApp = () => {

  const { isLoading, pokemons, page } = useSelector(state => state.pokemons)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  return (
    <>
      <h1>Pokemon App</h1>
      <span>Page #{page}</span>
      <br />
      <span>Loading: {isLoading ? 'Cardando...' : 'Cargado correctamente'}</span>
      <hr />

      <ul>
        {pokemons.map(pokemon => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
      <button
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        Siguiente
      </button>
    </>
  )
}
