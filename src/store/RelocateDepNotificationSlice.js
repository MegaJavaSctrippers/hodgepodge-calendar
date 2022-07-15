import { createSlice } from '@reduxjs/toolkit'

const RelocateDepNotificationSlice = createSlice({
  name: 'relocateDepNotification',
  initialState: {
    relocateDepNotification: false,
  },
  reducers: {
    relocateDepNotification(state) {
      state.relocateDepNotification = true
    },
    closeRelocateDepNotification(state) {
      state.relocateDepNotification = false
    },
  },
})

export const { relocateDepNotification } = RelocateDepNotificationSlice.actions
export const { closeRelocateDepNotification } = RelocateDepNotificationSlice.actions
export default RelocateDepNotificationSlice.reducer
