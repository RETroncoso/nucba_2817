import Counter from "./components/Counter/Counter";
import { CountContextProvider } from "./context/CountContext";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <CountContextProvider>
        <Counter />
        {/* Pueden crear nuevos componentes que van a tener acceso a lo que haya en el contexto*/}
      </CountContextProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
