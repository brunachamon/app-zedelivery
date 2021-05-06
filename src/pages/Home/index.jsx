import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'

import InputSearch from '../../components/InputSearch'
import Loader from '../../components/Loader'
import { setLocation } from '../../slices/location'
import { googleMapsContext } from '../../App'

import './style.scss'

const Home = () => {
  const dispatch = useDispatch()
  const { isLoaded: isGoogleMapsLoaded = false } = useContext(googleMapsContext);

  const handlePlaceSelected = (place) => dispatch(setLocation(place))

  return (
    <div className="places">
      <div className="places-image"></div>

      {isGoogleMapsLoaded ? (
        <div className="places-box">
          <div>
            <h2>Digite seu endereço para pesquisar produtos</h2>
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
