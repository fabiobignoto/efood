import { BrowserRouter } from 'react-router-dom'

import { EstilosGlobais } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <EstilosGlobais />
        <Rotas />
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
