import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const Card = ({ children, className = '' }) => <div data-testid="card-component" className={`card ${className}`}>{children}</div>

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Card
