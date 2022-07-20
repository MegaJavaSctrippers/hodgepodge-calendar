import { createSlice } from '@reduxjs/toolkit'

const DeleteRoomModalSlice = createSlice({
  name: 'deleteRoomModal',
  initialState: {
    deleteRoomModal: false,
  },
  reducers: {
    deleteRoomModal(state) {
      state.deleteRoomModal = true
    },
    closeDeleteRoomModal(state) {
      state.deleteRoomModal = false
    },
  },
})

export const { deleteRoomModal, closeDeleteRoomModal } = DeleteRoomModalSlice.actions
export default DeleteRoomModalSlice.reducer
