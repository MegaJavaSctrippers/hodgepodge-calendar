import { createSlice } from '@reduxjs/toolkit'

const SearchUsersSlice = createSlice({
  name: 'searchUsers',
  initialState: {
    searchUsers: false,
  },
  reducers: {
    searchUsers(state) {
      state.searchUsers = true
    },
    refreshSearchUsers(state) {
      state.searchUsers = false
    },
  },
})

export const { searchUsers, refreshSearchUsers } = SearchUsersSlice.actions
export default SearchUsersSlice.reducer
