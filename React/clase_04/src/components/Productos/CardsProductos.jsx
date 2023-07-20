import React from 'react'
import { ButtonContainerStyled, ProductosContainer, ProductosWrapper } from './CardsProductosStyles'
import { products } from '../../data/Products'
import CardProducto from './CardProducto'
import Button from '../UI/Button/Button'

const CardsProductos = () => {
  return (
    <ProductosWrapper>
        <h2>Nuestros Productos</h2>
        <ProductosContainer>
            {
                products.map((food) => {
                    return <CardProducto key={food.id} {...food} />
                })
            }
        </ProductosContainer>
        <ButtonContainerStyled>
            <Button>
                Ver menos
            </Button>
            <Button disabled>
                Ver mas
            </Button>
        </ButtonContainerStyled>
    </ProductosWrapper>
  )
}

export default CardsProductos