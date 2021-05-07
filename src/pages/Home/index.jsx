import React, { useContext, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../../components/Loader'
import InputSearch from '../../components/InputSearch'
import useDistribuitors from '../../hooks/useDistribuitors'
import { googleMapsContext } from '../../App'
import { setLocation } from '../../slices/location'

import './style.scss'

const Home = () => {
  const dispatch = useDispatch()
  const { location } = useSelector(state => state.location)
  const { isLoaded: isGoogleMapsLoaded = false } = useContext(googleMapsContext);

  const now = Date.now()

  const params = useMemo(() => ({
    now: '2021-05-06T21:49:00.000Z',
    lat: location ? location.lat?.toString() : '',
    long: location ? location.lng?.toString() : '',
    algorithm: 'NEAREST'
  }), [location])

  const {
    data: {
      pocSearch: results = []
    } = {},
    errors = {}
  } = useDistribuitors(params)

  console.log('Parceiros encontrados >>>', results, errors)

  const handlePlaceSelected = (place) => {
    dispatch(setLocation(place))
    // dispatch(fetchDistribuitors({ lat: place.lat, lng: place.lng }))
  }

  return (
    <div className="places">
      <div className="places-image"></div>

      {isGoogleMapsLoaded ? (
        <div className="places-box p-3">
          <div>
            <h2>Digite seu endereço para pesquisar distribuidores</h2>
          </div>

          <InputSearch handlePlaceSelected={handlePlaceSelected} className="places-input" />
        </div>
      ) : (
        <Loader />
      )}

    </div>
  )
}

export default Home
