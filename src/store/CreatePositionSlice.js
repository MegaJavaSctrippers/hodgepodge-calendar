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
    refreshCreate(state) {
      state.createPosition = false
    },
  },
})

export const { createPosition, refreshCreate } = CreatePositionSlice.actions
export default CreatePositionSlice.reducer
