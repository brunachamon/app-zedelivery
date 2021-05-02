import React from 'react'

import './style.scss'

const Loader = ({
  className = ''
}) => (
  <div className={`spinner-box ${className}`}>
    <div className="spinner-circle" role="status"></div>
    <div className="spinner-text">Carregando...</div>
  </div>
)

export default Loader
