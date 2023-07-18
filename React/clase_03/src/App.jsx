import AppWrapper from './components/AppWrapper/AppWrapper'
import EjemploEnLinea from './components/EjemploEnLinea/EjemploEnLinea'
import EjemploMaterialUI from './components/EjemploMaterialUI/EjemploMaterialUI'
import EjemploModules from './components/EjemploModules/EjemploModules'
import EjemploModules2 from './components/EjemploModules2/EjemploModules2'
import EjemploObjeto from './components/EjemploObjeto/EjemploObjeto'
import EjemplosStyled from './components/EjemploStyled/EjemplosStyled'
import { GlobalStyles } from './styles/GlobalStyles'

function App() {
  return (
    // <>
    //   <AppWrapper>
    //     <h1>HOLA!!!!!!!</h1>
    //     <EjemploEnLinea/>
    //     <EjemploObjeto/>
    //     <EjemploModules/>
    //     <EjemploModules2/>
    //     <EjemplosStyled/>
    //   </AppWrapper>
    //   <GlobalStyles/>
    // </>
    <AppWrapper>
      <EjemploMaterialUI/>
    </AppWrapper>
    
  )
}

export default App
