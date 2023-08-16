import { formatPrice } from "../../../utils";

import CardProductCheckout from "../../CardProductCheckout/CardProductCheckout";

import {
  CardsWrapperStyled,
  EnvioStyled,
  HrStyled,
  PriceContainerStyled,
  PriceTotalStyled,
  ProductosContainerStyled,
  ProductsTitleStyled,
  SubtotalStyled,
  TotalStyled,
} from "./ProductsCheckoutStyles";

const ProductsCheckout = () => {
  return (
    <ProductosContainerStyled>
      <ProductsTitleStyled>Tu pedido</ProductsTitleStyled>
      <CardsWrapperStyled>
        <CardProductCheckout />
      </CardsWrapperStyled>
      <PriceContainerStyled>
        <SubtotalStyled>
          <p>Subtotal</p>
          <span>{formatPrice(9000)}</span>
        </SubtotalStyled>
        <EnvioStyled>
          <p>Envío:</p>
          <span>{formatPrice(500)}</span>
        </EnvioStyled>
        <HrStyled />
        <TotalStyled>
          <p>Total:</p>
          <PriceTotalStyled>{formatPrice(9000 + 500)}</PriceTotalStyled>
        </TotalStyled>
      </PriceContainerStyled>
    </ProductosContainerStyled>
  );
};

export default ProductsCheckout;
