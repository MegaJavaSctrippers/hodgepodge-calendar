import { createSlice } from '@reduxjs/toolkit'

const EditUserSlice = createSlice({
  name: 'editUser',
  initialState: {
    editUser: false,
  },
  reducers: {
    editUser(state) {
      state.editUser = true
    },
    refreshEditUser(state) {
      state.editUser = false
    },
  },
})

export const { editUser, refreshEditUser } = EditUserSlice.actions
export default EditUserSlice.reducer
