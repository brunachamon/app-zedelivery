import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../../components/Loader'
import InputSearch from '../../components/InputSearch'
import useDistribuitorProducts from '../../hooks/useDistribuitorProducts'
import { setLocation } from '../../slices/location'
import { googleMapsContext } from '../../App'

import './style.scss'

const Home = () => {
  const dispatch = useDispatch()
  const { location = {} } = useSelector(state => state.location)
  const { isLoaded: isGoogleMapsLoaded = false } = useContext(googleMapsContext);

  const { products } = useDistribuitorProducts(location)

  const hasAdressFilled = location.lat && location.lng;

  const renderEmptyState = () => {
    if (hasAdressFilled) {
      return products.length === 0 && <div className="py-2">Nenhum parceiro disponível encontrado =(</div>
    }

    return null
  }

  const handlePlaceSelected = (place) => {
    dispatch(setLocation(place))
  }

  return (
    <div className="places">
      <div className="places-image"></div>

      {isGoogleMapsLoaded ? (
        <div className="places-box p-3">
          <div>
            <h2>Digite seu endereço para pesquisar distribuidores próximos a você</h2>
          </div>

          <InputSearch handlePlaceSelected={handlePlaceSelected} className="places-input" />

          {renderEmptyState()}
        </div>
      ) : (
        <Loader />
      )}

    </div>
  )
}

export default Home
