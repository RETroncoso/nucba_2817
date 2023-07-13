import './App.css'
import EjemploCondicional from './components/EjemploCondicional'
import { EjemploRenderDinamico } from './components/EjemploRenderDinamico'
import { EjemploConJSX, EjemploSinJSX } from './components/EjemplosJSX'
import { SaludoPorProps } from './components/EjemplosProps'
import { EjemploClases, EjemploFuncional } from './components/EjemplosTiposComponentes'


function App() {

  return <>
    <EjemploSinJSX/>
    <EjemploConJSX/>
    <EjemploClases/>
    <EjemploFuncional/>
    <SaludoPorProps nombre="Facundo" apellido="Gonzalez" edad={23} pais="Uruguay" />
    <EjemploCondicional/>
    <EjemploRenderDinamico/>
  </>

}

export default App
