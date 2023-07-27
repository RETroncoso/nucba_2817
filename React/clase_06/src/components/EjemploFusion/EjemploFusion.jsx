import React, { useContext, useState } from 'react'
import { Contexto } from '../../context/MiContexto'
import { ReducerButton } from '../EjemploUseReducer/EjemploUseReducer';

const EjemploFusion = () => {

    const [inputValue, setInputValue] = useState("")

    const {state, dispatch} = useContext(Contexto);

    const onChangeHandler = (e) => {
        setInputValue(e.target.value)
    }

  return (
    <div>
        <h2>{state.data}</h2>
        {
            state.error && <h3>Hay un error</h3>
        }
        {
            state.loading && <h3>Estoy cargando</h3>
        }
        <input value={inputValue} onChange={onChangeHandler} type="text" />
        <ReducerButton onClick={() => dispatch({type: 'dataRecibida', payload: inputValue})} >
            Mandar data
        </ReducerButton>
        <ReducerButton onClick={() => dispatch({type: 'isError'})} >
            Trigger Error
        </ReducerButton>
    </div>
  )
}

export default EjemploFusion