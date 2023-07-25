import React, { useRef } from 'react'
import {ClickButton} from "../EjemploUseState/EjemploUseState"

const EjemploUseRef = () => {

    const title = useRef();

    const handleTitle = () => {
        console.dir(title.current);
        title.current.style.color = "crimson"
    }

  return (
    <>
        <h2 ref={title} >Holu</h2>
        <ClickButton onClick={handleTitle} >Boton</ClickButton>
    </>
  )
}

export default EjemploUseRef