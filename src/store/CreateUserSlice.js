import { createSlice } from '@reduxjs/toolkit'

const CreateUserSlice = createSlice({
  name: 'createUser',
  initialState: {
    createUser: false,
  },
  reducers: {
    createUser(state) {
      state.createUser = true
    },
    refreshCreateUser(state) {
      state.createUser = false
    },
  },
})

export const { createUser, refreshCreateUser } = CreateUserSlice.actions
export default CreateUserSlice.reducer
