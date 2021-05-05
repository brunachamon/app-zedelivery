import React, { useRef } from 'react'

import InputSearch from '../../components/InputSearch'

import './style.scss'

const Home = () => {
  const searchBoxRef = useRef()

  const handlePlaceSelected = (place) => console.log('searchBoxRef', place)

  // useEffect(() => {

  // }, [])

  return (
    <div className="places">
      <div className="places-box">
        <div>
          <h2>Digite seu endereço para pesquisar produtos</h2>
        </div>

        <InputSearch handlePlaceSelected={handlePlaceSelected} className="places-input" />
      </div>
    </div>
  )
}

export default Home
