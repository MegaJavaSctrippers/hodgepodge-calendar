import { createSlice } from '@reduxjs/toolkit'

const OrganizationBarSlice = createSlice({
  name: 'organizationBar',
  initialState: {
    organizationBar: false,
  },
  reducers: {
    openOrganizationBar(state) {
      state.organizationBar = true
    },
    closeOrganizationBar(state) {
      state.organizationBar = false
    },
  },
})

export const { openOrganizationBar, closeOrganizationBar } = OrganizationBarSlice.actions
export default OrganizationBarSlice.reducer
