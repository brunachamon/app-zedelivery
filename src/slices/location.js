import { createSlice } from '@reduxjs/toolkit'

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    location: {}
  },
  reducers: {
    setLocation: (state, newLocation) => {
      state.location = newLocation
    }
  },
})

export const { setLocation } = locationSlice.actions

export default locationSlice.reducer
