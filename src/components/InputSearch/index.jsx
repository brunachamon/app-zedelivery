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
        const {
          formatted_address: fullAdress = '',
          geometry: {
            location
          } = {}
        } = searchBoxRef.current?.state?.searchBox?.getPlaces()?.[0] || {};

        const adress = {
          fullAdress,
          lat: location.lat() || null,
          lng: location.lng() || null
        }

        handlePlaceSelected && handlePlaceSelected(adress)
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
