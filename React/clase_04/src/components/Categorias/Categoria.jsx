import React from 'react'
import { BorderDecoration, CardCategoria } from './CategoriasStyles'

const Categoria = ({img, title, category}) => {
  return (
    <CardCategoria
        whileTap={{scale: 0.95}}
    >
        <img src={img} alt={category} />
        <h2>{title}</h2>
        <BorderDecoration/>
    </CardCategoria>
  )
}

export default Categoria