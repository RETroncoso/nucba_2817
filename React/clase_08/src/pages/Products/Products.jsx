
import {Card, LinkItem, ProductContainer, Title } from './ProductsStyles';

import {productList} from "../../data/productsData"

function Products() {
  return (
    <>
      <Title>Puede ser pa?</Title>
      <ProductContainer>
        {
          productList?.map((product) => {
            const {id, name, year, src} = product;
            return <Card key={id}>
              <img src={src} alt={name} />
              <h2>{name}</h2>
              <span>{year}</span>
              <LinkItem to={name} >Ver mas</LinkItem>
            </Card>
          })
        }
      </ProductContainer>
    </>
  );
}

export default Products;
