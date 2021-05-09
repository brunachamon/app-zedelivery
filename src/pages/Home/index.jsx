import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../../components/Loader'
import InputSearch from '../../components/InputSearch'
import CardEmptyState from '../../components/CardEmptyState'
import useDistribuitorProducts from '../../hooks/useDistribuitorProducts'
import { Paths } from '../../utils/constants'
import { setLocation } from '../../slices/location'
import { setProducts } from '../../slices/products'
import { googleMapsContext } from '../../App'

import './style.scss'

const Home = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { location = {} } = useSelector(state => state.location)
  const { isLoaded: isGoogleMapsLoaded = false } = useContext(googleMapsContext);

  const { products } = useDistribuitorProducts(location)

  const hasAdressFilled = location.lat && location.lng;

  if (hasAdressFilled && products.length > 0) {
    dispatch(setProducts(products))

    history.push(`${Paths.products}${Paths.list}`)
  }

  const renderEmptyState = () => {
    if (hasAdressFilled) {
      return products.length === 0 && <CardEmptyState />
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
