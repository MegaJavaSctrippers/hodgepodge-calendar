import { createSlice } from '@reduxjs/toolkit'

const DeleteUserModalSlice = createSlice({
  name: 'deleteUserModal',
  initialState: {
    deleteUserModal: false,
  },
  reducers: {
    deleteUserModal(state) {
      state.deleteUserModal = true
    },
    closeDeleteUserModal(state) {
      state.deleteUserModal = false
    },
  },
})

export const { deleteUserModal, closeDeleteUserModal } = DeleteUserModalSlice.actions
export default DeleteUserModalSlice.reducer
