import { configureStore } from '@reduxjs/toolkit'
import SearchPositionReducer from './SearchPositionSlice'
import SearchDepartmentReducer from './SearchDepartmentSlice'
import CreatePositionReducer from './CreatePositionSlice'
import EditPositionReducer from './EditPositionSlice'
import DeletePositionModalReducer from './DeletePositionModalSlice'
import DeleteDepartmentModalReducer from './DeleteDepartmentModalSlice'

export default configureStore({
  reducer: {
    searchPosition: SearchPositionReducer,
    searchDepartment: SearchDepartmentReducer,
    createPosition: CreatePositionReducer,
    editPosition: EditPositionReducer,
    deletePositionModal: DeletePositionModalReducer,
    deleteDepartmentModal: DeleteDepartmentModalReducer,
  },
})
