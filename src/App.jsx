import { Provider } from "react-redux"
import store from "./store"
import Teste from "./components/teste/Teste"

function App() {
  return (
    <Provider store={store}>
      <Teste/>
    </Provider>
  )
}

export default App
