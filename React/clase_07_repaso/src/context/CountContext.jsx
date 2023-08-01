import { createContext, useContext, useReducer } from "react";

import { counterInitialState, countReducer } from "../reducers/countReducer";

const CountContext = createContext();

export const useCountContext = () => useContext(CountContext);

// eslint-disable-next-line react/prop-types
const CountContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, counterInitialState);

  const data = { state, dispatch };

  return <CountContext.Provider value={data}>{children}</CountContext.Provider>;
};

export { CountContextProvider };
