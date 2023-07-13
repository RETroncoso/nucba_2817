import React from 'react'

export const SaludoPorProps = ({nombre, apellido, edad, pais}) => {
  return (
    <h1>Hola! Mi nombre es {nombre} {apellido}, tengo {edad} y vivo en {pais}</h1>
  )
}

SaludoPorProps.defaultProps = {
    pais: "Argentina"
}