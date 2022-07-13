import { createSlice } from '@reduxjs/toolkit'

const CreatePositionSlice = createSlice({
  name: 'createPosition',
  initialState: {
    createPosition: false,
  },
  reducers: {
    createPosition(state) {
      state.createPosition = true
    },
    closeCreatePosition(state) {
      state.createPosition = false
    },
  },
})

export const { createPosition, closeCreatePosition } = CreatePositionSlice.actions
export default CreatePositionSlice.reducer
