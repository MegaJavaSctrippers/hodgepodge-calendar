import { createSlice } from '@reduxjs/toolkit'

const InviteUser = createSlice({
  name: 'InviteUser',
  initialState: {
    inviteUser: false,
  },
  reducers: {
    inviteUser(state) {
      state.inviteUser = true
    },
    refreshInviteUser(state) {
      state.inviteUser = false
    },
  },
})

export const { inviteUser, refreshInviteUser } = InviteUser.actions
export default InviteUser.reducer
