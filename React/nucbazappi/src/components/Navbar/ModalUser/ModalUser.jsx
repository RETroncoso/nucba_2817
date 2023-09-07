import { AnimatePresence } from "framer-motion";

import {
  HrStyled,
  LinkStyled,
  ModalContainerStyled,
  UsernameStyled,
} from "./ModelUserStyles";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, toggleHiddenMenu } from "../../../redux/user/userSlice";

const ModalUser = () => {
  const {hiddenMenu, currentUser} = useSelector((state) => state.user);

  const dispatch = useDispatch();

  return (
    <AnimatePresence>
      {!hiddenMenu && (
        <ModalContainerStyled
          initial={{ translateX: 600 }}
          animate={{ translateX: 0 }}
          exit={{ translateX: 600 }}
          transition={{ duration: 0.5 }}
          key="cart-user"
        >
          <UsernameStyled>{currentUser.nombre}</UsernameStyled>
          <HrStyled />
          <LinkStyled to="/mis-ordenes">Mis Ordenes</LinkStyled>
          <span onClick={() => {
            dispatch(setCurrentUser(null))
            dispatch(toggleHiddenMenu())
          }}>Cerrar Sesion</span>
        </ModalContainerStyled>
      )}
    </AnimatePresence>
  );
};

export default ModalUser;
