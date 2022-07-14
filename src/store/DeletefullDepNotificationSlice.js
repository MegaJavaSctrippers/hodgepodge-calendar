import { createSlice } from '@reduxjs/toolkit'

const DeletefullDepNotificationSlice = createSlice({
  name: 'deletefullDepNotification',
  initialState: {
    deletefullDepNotification: false,
  },
  reducers: {
    deletefullDepNotification(state) {
      state.deletefullDepNotification = true
    },
    closeDeletefullDepNotification(state) {
      state.deletefullDepNotification = false
    },
  },
})

export const { deletefullDepNotification } = DeletefullDepNotificationSlice.actions
export const { closeDeletefullDepNotification } = DeletefullDepNotificationSlice.actions
export default DeletefullDepNotificationSlice.reducer
