import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { SearchFormStyled, InputStyled, ButtonStyled } from "./SearchStyles";
import { useDispatch } from "react-redux";
import { fetchPokemon } from "../../helpers/pokemonActions";

const Search = ({handlerSubmit}) => {

  const [pokemon, setPokemon] = useState("")

  const dispatch = useDispatch()

  return (
    <SearchFormStyled
      onSubmit={(e) => {
        dispatch(fetchPokemon(e, pokemon))
        setPokemon("")
      }}
    >
      <InputStyled
        onChange={(e) => {
          setPokemon(e.target.value)
        }}
        value={pokemon}
      placeholder="Search" />

      <ButtonStyled disabled={!pokemon} type="submit">
        <ImSearch size="20" color="#c1c0c9" />
      </ButtonStyled>
    </SearchFormStyled>
  );
};

export default Search;
