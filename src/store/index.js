import { configureStore } from '@reduxjs/toolkit'
import SearchPositionReducer from './SearchPositionSlice'
import SearchDepartmentReducer from './SearchDepartmentSlice'
import CreatePositionReducer from './CreatePositionSlice'
import EditPositionReducer from './EditPositionSlice'
import DeletePositionModalReducer from './DeletePositionModalSlice'
import DeleteDepartmentModalReducer from './DeleteDepartmentModalSlice'
import DeletefullDepNotificationReducer from './DeletefullDepNotificationSlice'
import RelocateModalReducer from './RelocateModalSlice'
import RelocateDepNotificationReducer from './RelocateDepNotificationSlice'
import SearchUsersReducer from './SearchUsersSlice'

export default configureStore({
  reducer: {
    searchPosition: SearchPositionReducer,
    searchDepartment: SearchDepartmentReducer,
    createPosition: CreatePositionReducer,
    editPosition: EditPositionReducer,
    deletePositionModal: DeletePositionModalReducer,
    deleteDepartmentModal: DeleteDepartmentModalReducer,
    deletefullDepNotification: DeletefullDepNotificationReducer,
    relocateModal: RelocateModalReducer,
    relocateDepNotification: RelocateDepNotificationReducer,
    searchUsers: SearchUsersReducer,
  },
})
