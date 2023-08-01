import {
  CounterButtonContainerStyled,
  CounterContainerStyled,
  CounterSpanStyled,
} from "./Counter.styles";

import { useCountContext } from "../../context/CountContext";
import Add from "../Add/Add";
import Reset from "../Reset/Reset";
import Substract from "../Substract/Substract";

const Counter = () => {
  // USESTATE
  // const [count, setCount] = useState(0);

  // const handleDecrement = () => {
  //   setCount(count - 1);
  // };

  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };

  // Reducer
  // const [state, dispatch] = useReducer(countReducer, counterInitialState);

  // const handleIncrement = () => dispatch({ type: TYPES.INCREMENT });

  // const handleDecrement = () => dispatch({ type: TYPES.DECREMENT });

  // const handleIncrement_5 = () => dispatch({ type: TYPES.INCREMENT_5 });

  // const handleDecrement_5 = () => dispatch({ type: TYPES.DECREMENT_5 });

  // const handleDivide = () => dispatch({ type: TYPES.DIVIDE });

  // const handleMultiply = () => dispatch({ type: TYPES.MULTIPLY });

  // const handleReset = () => dispatch({ type: TYPES.RESET });

  // Context
  const { state } = useCountContext();

  return (
    <CounterContainerStyled>
      <CounterButtonContainerStyled>
        <Substract />
        {/* Contador */}
        <CounterSpanStyled>{state.count}</CounterSpanStyled>
        <Add />
      </CounterButtonContainerStyled>
      <Reset />
    </CounterContainerStyled>
  );
};
export default Counter;
