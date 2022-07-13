import { configureStore } from '@reduxjs/toolkit'
import SearchPositionReducer from './SearchPositionSlice'
import CreatePositionReducer from './CreatePositionSlice'
import EditPositionReducer from './EditPositionSlice'
import DeletePositionModalReducer from './DeletePositionModalSlice'

export default configureStore({
  reducer: {
    searchPosition: SearchPositionReducer,
    createPosition: CreatePositionReducer,
    editPosition: EditPositionReducer,
    deletePositionModal: DeletePositionModalReducer,
  },
})
