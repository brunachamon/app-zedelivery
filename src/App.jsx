import { BrowserRouter } from 'react-router-dom'

import Loader from './components/Loader'
import Routes from './routes'
import './App.scss'

const App = () => {

  // console.log('>>', import.meta.env)

  return (
    <div className="App">
      <Loader />
      <p></p>

      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
