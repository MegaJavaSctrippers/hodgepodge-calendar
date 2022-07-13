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
    refreshSearch(state) {
      state.searchPosition = false
    },
  },
})

export const { searchPosition, refreshSearch } = SearchPositionSlice.actions
export default SearchPositionSlice.reducer
