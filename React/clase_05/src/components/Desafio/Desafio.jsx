import React, { useEffect, useRef, useState } from 'react'
import { ClickButton } from '../EjemploUseState/EjemploUseState'

const Desafio = () => {

    const [counter, setCounter] = useState(0)

    let id = useRef();


    useEffect(() => {
      id.current = setInterval(() => {
                setCounter((prev) => prev + 1)
            }, 2000)
        console.log(id);
    }, [])


    const stopIncrement = () => {
        clearInterval(id.current)
        console.log(id);
    };
    

  return (<>
    <span>{counter}</span>
    <ClickButton onClick={stopIncrement}>Stop</ClickButton>
    </>
  )
}

export default Desafio