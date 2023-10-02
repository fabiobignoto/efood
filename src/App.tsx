import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import Rotas from './routes'
import store from './store'

import { EstilosGlobais } from './styles'

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
