import React from 'react'

import estilos from "./EjemploModules2.module.css"

const EjemploModules2 = () => {
  return (
    <div className={estilos.contenedorModule} >
        <p className={estilos.parrafoModule} >
            Ejemplo con module
        </p>
    </div>
  )
}

export default EjemploModules2