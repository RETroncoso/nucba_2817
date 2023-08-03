import { useParams } from "react-router-dom";

function Product() {

  const {product} = useParams();

  return (
    <div>
      <h2>Sección de {product}</h2>
    </div>
  );
}

export default Product;
