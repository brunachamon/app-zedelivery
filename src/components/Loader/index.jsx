import React from 'react'
import PropTypes from 'prop-types'

import './style.scss'

const Loader = ({
  className = ''
}) => (
  <div className={`spinner-box ${className}`}>
    <div className="spinner-circle" role="status"></div>
    <div className="spinner-text">Carregando...</div>
  </div>
)

Loader.propTypes = {
  className: PropTypes.string
}

export default Loader
