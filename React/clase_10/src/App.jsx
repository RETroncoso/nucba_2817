import Counter from "./components/counter/Counter"
import GlobalStyles from "./styles/GlobalStyles"
import Logo from "./components/logo/Logo"

import {Provider} from "react-redux"
import store from "./redux"

function App() {
  return (<>
    <Provider store={store} >
      <Counter/>
    </Provider>
    
    <Logo/>
    <GlobalStyles />
  </>
    
  )
}

export default App
