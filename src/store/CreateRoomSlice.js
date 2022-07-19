import { createSlice } from '@reduxjs/toolkit'

const CreateRoomSlice = createSlice({
  name: 'createRoom',
  initialState: {
    createRoom: false,
  },
  reducers: {
    createRoom(state) {
      state.createRoom = true
    },
    refreshCreateRoom(state) {
      state.createRoom = false
    },
  },
})

export const { createRoom, refreshCreateRoom } = CreateRoomSlice.actions
export default CreateRoomSlice.reducer
