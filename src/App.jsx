import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useJsApiLoader } from '@react-google-maps/api'

import Routes from './routes'
import './App.scss'

const libraries = ['places']

const App = () => {
  useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBLIAn2H8RDjWQIw3cmq01eL2GLp-fYMGk',
    libraries
  })

  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  )
}

export default App
