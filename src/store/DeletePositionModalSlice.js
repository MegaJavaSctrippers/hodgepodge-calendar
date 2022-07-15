import { createSlice } from '@reduxjs/toolkit'

const DeletePositionModalSlice = createSlice({
  name: 'deletePositionModal',
  initialState: {
    deletePositionModal: false,
  },
  reducers: {
    deletePositionModal(state) {
      state.deletePositionModal = true
    },
    closeDeletePositionModal(state) {
      state.deletePositionModal = false
    },
  },
})

export const { deletePositionModal, closeDeletePositionModal } = DeletePositionModalSlice.actions
export default DeletePositionModalSlice.reducer
