import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Loader from './components/Loader'
import Routes from './routes'
import './App.scss'

const App = () => {

  // console.log('>>', import.meta.env)

  return (
    <div>
      <header className="header">
        <Loader />
        <p></p>
        {/* <Modal>
          <Modal.Header>oaifhiahfe</Modal.Header>
          <Modal.Body>dfnsfnsifn</Modal.Body>
        </Modal> */}

        {/* <a href="#modal" className="btn btn-big">Modal!</a> */}

      </header>

      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
