import { createSlice } from '@reduxjs/toolkit'

const SearchRoomSlice = createSlice({
  name: 'searchRoom',
  initialState: {
    searchRoom: false,
  },
  reducers: {
    searchRoom(state) {
      state.searchRoom = true
    },
    refreshSearchRoom(state) {
      state.searchRoom = false
    },
  },
})

export const { searchRoom, refreshSearchRoom } = SearchRoomSlice.actions
export default SearchRoomSlice.reducer
