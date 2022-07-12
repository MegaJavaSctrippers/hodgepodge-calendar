import { createSlice } from '@reduxjs/toolkit'

const LocationBarSlice = createSlice({
  name: 'locationBar',
  initialState: {
    locationBar: false,
  },
  reducers: {
    openLocationBar(state) {
      state.locationBar = true
    },
    closeLocationBar(state) {
      state.locationBar = false
    },
  },
})

export const { openLocationBar, closeLocationBar } = LocationBarSlice.actions
export default LocationBarSlice.reducer
