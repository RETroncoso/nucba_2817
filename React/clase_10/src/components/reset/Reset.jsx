import { BiReset } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { reset } from "../../redux/counterSlice/counterSlice";

const Reset = () => {

  const dispatch = useDispatch()

  return (
    <BiReset
      onClick={() => dispatch(reset())}
      cursor="pointer"
      size="38px"
      color="#F24C4C"
    />
  );
};

export default Reset;
