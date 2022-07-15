import { createSlice } from '@reduxjs/toolkit'

const SearchDepartmentSlice = createSlice({
  name: 'searchDepartment',
  initialState: {
    searchDepartment: false,
  },
  reducers: {
    searchDepartment(state) {
      state.searchDepartment = true
    },
    refreshSearchDepartment(state) {
      state.searchDepartment = false
    },
  },
})

export const { searchDepartment, refreshSearchDepartment } = SearchDepartmentSlice.actions
export default SearchDepartmentSlice.reducer
