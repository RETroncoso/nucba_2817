import React, { useEffect, useState } from 'react'
import { ClickButton } from '../EjemploUseState/EjemploUseState'

const EjemploUseEffect = () => {

    const [click, setClick] = useState(false)


    useEffect(() => {
        console.log("Fase de montaje");
    }, []);

    useEffect(() => {
        console.log("El estado cambio");
    }, [click]);
    

  return (
    <div>
        <span>
            {
                click ? "True" : "False"
            }
        </span>
        <ClickButton onClick={() => setClick(!click)} >Click</ClickButton>
    </div>
  )
}

export default EjemploUseEffect