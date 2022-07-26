import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import RefreshIcon from '@mui/icons-material/Refresh'
import { useSelector, useDispatch } from 'react-redux'
import { searchPosition, refreshSearch } from '../../../store/SearchPositionSlice'
import { searchDepartment, refreshSearchDepartment } from '../../../store/SearchDepartmentSlice'
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
import SearchDepartment from './SearchDepartment/SearchDepartment'
import DeleteDepartmentModal from './DeleteDepartmentModal/DeleteDepartmentModal'
import DeletefullDepartmentNotification from './DeletefullDepartmentNotification/DeletefullDepartmentNotification'
import RelocateDepartmentNotification from './RelocateDepartmentNotification/RelocateDepartmentNotification'
import { closeDeletefullDepNotification } from '../../../store/DeletefullDepNotificationSlice'
import RelocateModal from './RelocateModal/RelocateModal'
import { closeRelocateDepNotification } from '../../../store/RelocateDepNotificationSlice'

export default function TopBarOrganization() {
  const search = useSelector((state) => state.searchPosition.searchPosition)
  const searchDep = useSelector((state) => state.searchDepartment.searchDepartment)
  const create = useSelector((state) => state.createPosition.createPosition)
  const edit = useSelector((state) => state.editPosition.editPosition)
  const deletefullDepNotification = useSelector(
    (state) => state.deletefullDepNotification.deletefullDepNotification,
  )
  const deletePositionModal = useSelector((state) => state.deletePositionModal.deletePositionModal)
  const deleteDepartmentModal = useSelector(
    (state) => state.deleteDepartmentModal.deleteDepartmentModal,
  )
  const openRelocateModal = useSelector((state) => state.relocateModal.relocateModal)
  const relocateDepNotification = useSelector(
    (state) => state.relocateDepNotification.relocateDepNotification,
  )

  const dispatch = useDispatch()

  const openSearchPosition = () => {
    dispatch(searchPosition())
  }

  const openSearchDepartment = () => {
    dispatch(searchDepartment())
  }

  const refreshFunc = () => {
    dispatch(refreshSearch())
    dispatch(refreshSearchDepartment())
    dispatch(refreshCreate())
    dispatch(refreshEdit())
    dispatch(closeDeletefullDepNotification())
    dispatch(closeRelocateDepNotification())
  }

  return (
    <div className={s.wrapper}>
      <div className={s.topBar}>
        <Organization />
        <Department />
        <button type="button" className={s.iconWrapper} onClick={openSearchDepartment}>
          <SearchIcon />
        </button>
        <Position />
        <button type="button" className={s.iconWrapper} onClick={openSearchPosition}>
          <SearchIcon />
        </button>
        <button type="button" className={s.refreshIconWrapper} onClick={refreshFunc}>
          <RefreshIcon />
        </button>
        <CreateButton />
      </div>
      <div>
        {search && <SearchPosition />}
        {searchDep && <SearchDepartment />}
        {create && <CreatePosition />}
        {edit && <EditPosition />}
        {deletePositionModal && <DeletePositionModal />}
        {deleteDepartmentModal && <DeleteDepartmentModal />}
        {deletefullDepNotification && <DeletefullDepartmentNotification />}
        {openRelocateModal && <RelocateModal />}
        {relocateDepNotification && <RelocateDepartmentNotification />}
      </div>
    </div>
  )
}
