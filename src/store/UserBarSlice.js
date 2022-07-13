import { createSlice } from '@reduxjs/toolkit'

const UserBarSlice = createSlice({
  name: 'userBar',
  initialState: {
    userBar: false,
  },
  reducers: {
    openUserBar(state) {
      state.userBar = true
    },
    closeUserBar(state) {
      state.userBar = false
    },
  },
})

export const { openUserBar, closeUserBar } = UserBarSlice.actions
export default UserBarSlice.reducer
