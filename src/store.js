import { configureStore } from '@reduxjs/toolkit'

import locationReducer from './slices/location'
import distribuitorsSlice from './slices/distribuitors'

export default configureStore({
  reducer: {
    location: locationReducer,
    distribuitors: distribuitorsSlice
  },
})
