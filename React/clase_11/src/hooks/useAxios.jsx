import React, { useState } from 'react'
import { initialPokemon } from '../data/initialPokemon';
import axios from "axios"

export const useAxios = () => {
  const [data, setData] = useState(initialPokemon);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const handlerSubmit = async (e, pokemon) => {
    e.preventDefault();

    setData(null)
    setIsLoading(true)
    setError(false)

    try {
      let selectedPokemon = pokemon.toLowerCase().trim();
      const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
      setData(data)
    } catch(error){
      setError("Pokemon no encontrado. Busca bien, pa")
      console.log(error);
    }
    setIsLoading(false)
  }

  return {
    data,
    isLoading,
    error,
    handlerSubmit
  }
  
}
