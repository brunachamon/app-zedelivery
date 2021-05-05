import React, { useRef } from 'react'
import { StandaloneSearchBox } from '@react-google-maps/api'
import PropTypes from 'prop-types'

const InputSearch = ({
  handlePlaceSelected,
  className = '',
  placeholder = 'Digite um endereço'
}) => {
  const searchBoxRef = useRef()

  return (
    <StandaloneSearchBox
      ref={searchBoxRef}
      onPlacesChanged={() => {
        const place = searchBoxRef.current.state.searchBox.getPlaces() || {};

        handlePlaceSelected && handlePlaceSelected(place)
      }}>
      <input
        type="text"
        placeholder={placeholder}
        className={className}
      />
    </StandaloneSearchBox>
  )
}

InputSearch.propTypes = {
  handlePlaceSelected: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string
}

export default InputSearch
