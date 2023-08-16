import { formatPrice } from "../../utils";

import {
  PriceContainerStyled,
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
} from "./CardResumenStyles";

const CardResumen = () => {
  return (
    <ProductStyled>
      <ProductLeftStyled>
        <img
          src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648456/coding/NucbaZappi/Productos/muzza-mentolada_fmh9at.png"
          alt="La Aco"
        />
        <div>
          <h3>La Aco</h3>
          <p>Cheta la gorra</p>
        </div>
      </ProductLeftStyled>
      <PriceContainerStyled>
        <p>3U</p>
        <ProductPriceStyled>{formatPrice(3000 * 3)}</ProductPriceStyled>
      </PriceContainerStyled>
    </ProductStyled>
  );
};

export default CardResumen;
