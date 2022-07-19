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
import InviteUserReducer from './InviteUserSlice'
import CreateUserReducer from './CreateUserSlice'
import EditUserReducer from './EditUserSlice'
import DeleteUserModalReducer from './DeleteUserModalSlice'

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
    inviteUser: InviteUserReducer,
    createUser: CreateUserReducer,
    editUser: EditUserReducer,
    deleteUserModal: DeleteUserModalReducer,
  },
})
