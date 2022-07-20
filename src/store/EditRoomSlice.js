import { createSlice } from '@reduxjs/toolkit'

const EditRoomSlice = createSlice({
  name: 'editRoom',
  initialState: {
    editRoom: false,
  },
  reducers: {
    editRoom(state) {
      state.editRoom = true
    },
    refreshEditRoom(state) {
      state.editRoom = false
    },
  },
})

export const { editRoom, refreshEditRoom } = EditRoomSlice.actions
export default EditRoomSlice.reducer
