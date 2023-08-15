import { createSlice } from "@reduxjs/toolkit";
import { initialPokemon } from "../../data/initialPokemon";

const INITIAL_STATE = {
    data: initialPokemon,
    isLoading: false,
    error: false
}

export const pokemonSlice = createSlice({
    name: "pokemon",
    initialState: INITIAL_STATE,
    reducers: {
        isFetching: (estado) => {
            return {
                ...estado,
                isLoading: true,
                data: null
            }
        },
        success: (estado, action) => {
            return {
                ...estado,
                isLoading: false,
                error: false,
                data: action.payload
            }
        },
        isError: (estado) => {
            return {
                ...estado,
                isLoading: false,
                error: "Pokemon no encontrado. Busca bien, pa"
            }
        }
    }
})

export const {
    isFetching,
    success,
    isError
} = pokemonSlice.actions

export default pokemonSlice.reducer;