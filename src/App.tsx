import { BrowserRouter } from 'react-router-dom'

import { EstilosGlobais } from './styles'

import Rotas from './routes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <EstilosGlobais />
        <Rotas />
      </BrowserRouter>
    </div>
  )
}

export default App
