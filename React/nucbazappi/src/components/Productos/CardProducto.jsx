import { formatPrice } from "../../utils/index";
import {useDispatch} from "react-redux"
import {addToCart} from "../../redux/cart/cartSlice"

import Button from "../UI/Button/Button";

import {
  CardPrice,
  ContainerPrice,
  ProductosCard,
} from "./CardsProductosStyles";

const CardProducto = ({img, title, desc, price, id}) => {

  const dispatch = useDispatch();

  return (
    <ProductosCard>
      <img
        src={img}
        alt={title}
      />
      <h2>{title}</h2>
      <p>{desc}</p>
      <ContainerPrice>
        <CardPrice>{formatPrice(price)}</CardPrice>
        <Button onClick={() => dispatch(addToCart({img, title, desc, price, id}))}>Agregar</Button>
      </ContainerPrice>
    </ProductosCard>
  );
};

export default CardProducto;
