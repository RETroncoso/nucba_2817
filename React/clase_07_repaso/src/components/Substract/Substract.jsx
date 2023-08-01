import { CounterButtonStyled } from "./Substract.styles";

import { AiOutlineMinusCircle } from "react-icons/ai";
import { FiDivideCircle } from "react-icons/fi";
import { RiNumber5 } from "react-icons/ri";
import { TYPES } from "../../actionsTypes/countActions";
import { useCountContext } from "../../context/CountContext";

const Substract = () => {
  const { dispatch } = useCountContext();

  const handleDecrement = () => dispatch({ type: TYPES.DECREMENT });

  const handleDecrement_5 = () => dispatch({ type: TYPES.DECREMENT_5 });

  const handleDivide = () => dispatch({ type: TYPES.DIVIDE });

  return (
    <>
      {/* Divide */}
      <CounterButtonStyled last onClick={handleDivide}>
        <FiDivideCircle size="32px" color="white" />
      </CounterButtonStyled>
      {/* Restar - 5 */}
      <CounterButtonStyled onClick={handleDecrement_5}>
        <p>
          -<RiNumber5 size="32px" color="white" />{" "}
        </p>
      </CounterButtonStyled>
      {/* Restar */}
      <CounterButtonStyled onClick={handleDecrement}>
        <AiOutlineMinusCircle size="32px" color="white" />
      </CounterButtonStyled>
    </>
  );
};
export default Substract;
