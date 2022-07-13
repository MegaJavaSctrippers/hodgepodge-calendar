import { createSlice } from '@reduxjs/toolkit'

const DeleteDepartmentModalSlice = createSlice({
  name: 'deleteDepartmentModal',
  initialState: {
    deleteDepartmentModal: false,
  },
  reducers: {
    deleteDepartmentModal(state) {
      state.deleteDepartmentModal = true
    },
    closeDeleteDepartmentModal(state) {
      state.deleteDepartmentModal = false
    },
  },
})

export const { deleteDepartmentModal } = DeleteDepartmentModalSlice.actions
export const { closeDeleteDepartmentModal } = DeleteDepartmentModalSlice.actions
export default DeleteDepartmentModalSlice.reducer
