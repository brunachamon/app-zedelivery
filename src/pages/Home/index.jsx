import React, { useContext, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import InputSearch from '../../components/InputSearch'
import Loader from '../../components/Loader'
import { setLocation } from '../../slices/location'
import { googleMapsContext } from '../../App'

import './style.scss'

import useDistribuitors from '../../hooks/useDistribuitors'

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

  const results = useDistribuitors(params)


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
