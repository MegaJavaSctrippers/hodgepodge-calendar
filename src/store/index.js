import { configureStore } from '@reduxjs/toolkit'
import OrganizationBarReducer from './OrganizationBarSlice'
import UserBarReducer from './UserBarSlice'
import LocationBarReducer from './LocationBarSlice'
import CreatePositionReducer from './CreatePositionSlice'
import SearchPositionReducer from './SearchPositionSlice'

export default configureStore({
  reducer: {
    organizationBar: OrganizationBarReducer,
    userBar: UserBarReducer,
    locationBar: LocationBarReducer,
    createPosition: CreatePositionReducer,
    searchPosition: SearchPositionReducer,
  },
})
