import { BrowserRouter } from 'react-router-dom'

import Routes from './routes'
import './App.scss'

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </div>
)

export default App
