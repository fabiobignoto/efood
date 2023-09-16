import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { EstilosGlobais } from './styles'

import Rotas from './routes'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <EstilosGlobais />
          <Rotas />
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
