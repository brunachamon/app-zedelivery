import React, { useContext } from 'react'

import { googleMapsContext } from '../../App'
import InputSearch from '../../components/InputSearch'
import Loader from '../../components/Loader'

import './style.scss'

const Home = () => {
  const { isLoaded: isGoogleMapsLoaded = false } = useContext(googleMapsContext);

  const handlePlaceSelected = (place) => console.log('searchBoxRef', place)

  // useEffect(() => {

  // }, [])

  return (
    <div className="places">
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
