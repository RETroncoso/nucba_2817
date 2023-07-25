import React from 'react'
import { ClickButton } from '../EjemploUseState/EjemploUseState'

const EjemploOnSubmit = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulario enviado");
    }

  return (
        <form onSubmit={handleSubmit} >
            <input type="text" />
            <ClickButton>Enviar</ClickButton>
        </form>
    )
}

export default EjemploOnSubmit