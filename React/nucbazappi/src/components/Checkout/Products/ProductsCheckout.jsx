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

const ProductsCheckout = ({cartItems, shippingCost, price}) => {
  return (
    <ProductosContainerStyled>
      <ProductsTitleStyled>Tu pedido</ProductsTitleStyled>
      <CardsWrapperStyled>

        {
          cartItems.length ? (
            cartItems.map((item) => {
              return <CardProductCheckout key={item.id} {...item} />
            })
          ) : (
            <p>Dale amiguero, comprá algo</p>
          )
        }
      </CardsWrapperStyled>
      <PriceContainerStyled>
        <SubtotalStyled>
          <p>Subtotal</p>
          <span>{formatPrice(price)}</span>
        </SubtotalStyled>
        <EnvioStyled>
          <p>Envío:</p>
          <span>{formatPrice(shippingCost)}</span>
        </EnvioStyled>
        <HrStyled />
        <TotalStyled>
          <p>Total:</p>
          <PriceTotalStyled>{formatPrice(price + shippingCost)}</PriceTotalStyled>
        </TotalStyled>
      </PriceContainerStyled>
    </ProductosContainerStyled>
  );
};

export default ProductsCheckout;
