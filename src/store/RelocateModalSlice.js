import { createSlice } from '@reduxjs/toolkit'

const RelocateModalSlice = createSlice({
  name: 'relocateModal',
  initialState: {
    relocateModal: false,
  },
  reducers: {
    openRelocateModal(state) {
      state.relocateModal = true
    },
    closeRelocateModal(state) {
      state.relocateModal = false
    },
  },
})

export const { openRelocateModal, closeRelocateModal } = RelocateModalSlice.actions
export default RelocateModalSlice.reducer
