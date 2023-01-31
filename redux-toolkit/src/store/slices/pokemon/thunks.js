import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemnos, stratLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
  return async (displatch, getState) => {
    displatch(stratLoadingPokemons())

    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${10}`)
    // const data = await resp.json()
    const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${page}`)

    //TODO: Realizar peticion http

    displatch(setPokemnos({
      pokemons: data.results,
      page: page + 1
    }))
  }
}

