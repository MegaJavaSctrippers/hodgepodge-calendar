import { createSlice } from '@reduxjs/toolkit'

const EditPositionSlice = createSlice({
  name: 'editPosition',
  initialState: {
    editPosition: false,
  },
  reducers: {
    editPosition(state) {
      state.editPosition = true
    },
    refreshEdit(state) {
      state.editPosition = false
    },
  },
})

export const { editPosition, refreshEdit } = EditPositionSlice.actions
export default EditPositionSlice.reducer
