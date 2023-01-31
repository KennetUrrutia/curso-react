import { createSlice } from '@reduxjs/toolkit'

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false
  },
  reducers: {
    stratLoadingPokemons: (state) => {
      state.isLoading = true
    },
    setPokemnos: (state, action) => {
      state.isLoading = false
      state.page = action.payload.page
      state.pokemons = action.payload.pokemons
    },
  }
})

export const { stratLoadingPokemons, setPokemnos, incrementPage } = pokemonSlice.actions