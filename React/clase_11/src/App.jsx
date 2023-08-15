import GlobalStyles from "./Styles/GlobalStyles";
import { MyAppStyled } from "./AppStyles";
import Loader from "./components/loader/Loader"

import Search from "./components/search/Search";
import Pokemon from "./components/PokemonCard/card/Card";
import { useAxios } from "./hooks/useAxios";
import { useSelector } from "react-redux";

function App() {
  
  // const {data, isLoading, error, handlerSubmit} = useAxios();

  const state = useSelector((state) => state.pokemon)

  console.log(state);

  return (
    <>
      <MyAppStyled>
        <Search />
        {state.data && <Pokemon {...state.data} />}
        {state.isLoading && <Loader/>}
        {state.error && <h2>{state.error}</h2>}
      </MyAppStyled>
      <GlobalStyles />
    </>
  );
}

export default App;
