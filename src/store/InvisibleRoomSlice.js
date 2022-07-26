import { createSlice } from '@reduxjs/toolkit'

const InvisibleRoomSlice = createSlice({
  name: 'invisibleRoom',
  initialState: {
    invisibleRoom: false,
  },
  reducers: {
    invisibleRoom(state) {
      state.invisibleRoom = true
    },
    visibleRoom(state) {
      state.invisibleRoom = false
    },
  },
})

export const { invisibleRoom, visibleRoom } = InvisibleRoomSlice.actions
export default InvisibleRoomSlice.reducer
