import { createSlice } from '@reduxjs/toolkit'

const SearchPositionSlice = createSlice({
  name: 'searchPosition',
  initialState: {
    searchPosition: false,
  },
  reducers: {
    searchPosition(state) {
      state.searchPosition = true
    },
    closeSearchPosition(state) {
      state.searchPosition = false
    },
  },
})

export const { searchPosition, closeSearchPosition } = SearchPositionSlice.actions
export default SearchPositionSlice.reducer
