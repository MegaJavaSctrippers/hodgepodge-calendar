import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import RefreshIcon from '@mui/icons-material/Refresh'
import { useSelector, useDispatch } from 'react-redux'
import { searchPosition, refreshSearch } from '../../../store/SearchPositionSlice'
import { refreshEdit } from '../../../store/EditPositionSlice'
import Organization from '../Organization/Organization'
import Department from '../Department/Department'
import Position from '../Position/Position'
import CreateButton from '../CreateButton/CreateButton'
import SearchPosition from '../SearchPosition/SearchPosition'
import CreatePosition from '../CreatePosition/CreatePosition'
import EditPosition from '../EditPosition/EditPosition'
import s from './TopBarOrganization.module.css'
import { refreshCreate } from '../../../store/CreatePositionSlice'
import DeletePositionModal from './DeletePositionModal/DeletePositionModal'

export default function TopBarOrganization() {
  const search = useSelector((state) => state.searchPosition.searchPosition)
  const create = useSelector((state) => state.createPosition.createPosition)
  const edit = useSelector((state) => state.editPosition.editPosition)
  const deletePositionModal = useSelector((state) => state.deletePositionModal.deletePositionModal)

  const dispatch = useDispatch()

  const openSearchPosition = () => {
    dispatch(searchPosition())
  }
  const refreshFunc = () => {
    dispatch(refreshSearch())
    dispatch(refreshCreate())
    dispatch(refreshEdit())
  }

  return (
    <div className={s.wrapper}>
      <div className={s.topBar}>
        <Organization />
        <Department />
        <Position />
        <button type="button" className={s.iconWrapper} onClick={openSearchPosition}>
          <SearchIcon />
        </button>
        <button type="button" className={s.refreshIconWrapper} onClick={refreshFunc}>
          <RefreshIcon color="primary" />
        </button>
        <CreateButton />
      </div>
      <div>
        {search && <SearchPosition />}
        {create && <CreatePosition />}
        {edit && <EditPosition />}
        {deletePositionModal && <DeletePositionModal />}
      </div>
    </div>
  )
}
