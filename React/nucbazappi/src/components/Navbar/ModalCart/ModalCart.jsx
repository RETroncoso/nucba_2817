import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { IoMdTrash } from "react-icons/io";
import { MdOutlineClose } from "react-icons/md";
import { formatPrice } from "../../../utils";

import Increase from "../../UI/Increase/Increase";
import Submit from "../../UI/Submit/Submit";
import ModalCartCard from "./ModalCartCard";

import { ModalOverlayStyled } from "../NavbarStyles";
import {
  ButtonContainerStyled,
  CloseButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  EnvioStyled,
  MainContainerStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductsWrapperStyled,
  SubtotalStyled,
  TitleStyled,
  TotalStyled,
} from "./ModalCartStyles";

const ModalCart = ({ hiddenCart, setHiddenCart }) => {
  const navigate = useNavigate();

  return (
    <>
      {!hiddenCart && (
        <ModalOverlayStyled
          onClick={() => setHiddenCart(!hiddenCart)}
          isHidden={hiddenCart}
        />
      )}
      <AnimatePresence>
        {!hiddenCart && (
          <ContainerStyled
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 600 }}
            transition={{ type: "spring", damping: 27 }}
            key="cart-modal"
          >
            <CloseButtonContainerStyled>
              <CloseButtonStyled
                className="close__modal "
                whileTap={{ scale: 0.95 }}
                onClick={() => setHiddenCart(!hiddenCart)}
              >
                <MdOutlineClose size="24px" />
              </CloseButtonStyled>
            </CloseButtonContainerStyled>

            <MainContainerStyled>
              <TitleStyled>
                <h1>Tus Productos</h1>
                <Increase
                  onClick={(e) => e.preventDefault()}
                  bgColor="var(--magenta)"
                  disabled="true"
                >
                  <IoMdTrash />
                </Increase>
              </TitleStyled>

              <ProductsWrapperStyled>
                <ModalCartCard />
              </ProductsWrapperStyled>
            </MainContainerStyled>

            <PriceContainerStyled>
              <SubtotalStyled>
                <p>Subtotal:</p>
                <span>{formatPrice(9000)}</span>
              </SubtotalStyled>
              <EnvioStyled>
                <p>Envio</p>
                <span>{formatPrice(500)}</span>
              </EnvioStyled>
              <hr />
              <TotalStyled>
                <p>Total:</p>
                <PriceStyled>{formatPrice(9000 + 500)}</PriceStyled>
              </TotalStyled>
              <ButtonContainerStyled>
                <Submit onClick={() => navigate("/checkout")}>
                  Iniciar pedido
                </Submit>
              </ButtonContainerStyled>
            </PriceContainerStyled>
          </ContainerStyled>
        )}
      </AnimatePresence>
    </>
  );
};

export default ModalCart;
