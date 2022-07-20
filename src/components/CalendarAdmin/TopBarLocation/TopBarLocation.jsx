import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import RefreshIcon from '@mui/icons-material/Refresh'
import { useDispatch, useSelector } from 'react-redux'
import RoomName from './RoomName/RoomName'
import RoomCapacity from './RoomCapacity/RoomCapacity'
import CreateLocationButton from './CreateLocationButton/CreateLocationButton'
import s from './TopBarLocation.module.css'
import Description from './Description/Description'
import SearchRoom from './SearchRoom/SearchRoom'
import { refreshSearchRoom, searchRoom } from '../../../store/SearchRoomSlice'
import { refreshCreateRoom } from '../../../store/CreateRoomSlice'
import CreateRoom from './CreateRoom/CreateRoom'
import EditRoom from './SearchRoom/EditRoom/EditRoom'
import { refreshEditRoom } from '../../../store/EditRoomSlice'
import DeleteRoomModal from './SearchRoom/DeleteRoomModal/DeleteRoomModal'

export default function TopBarLocation() {
  const openSearchRoom = useSelector((state) => state.searchRoom.searchRoom)
  const openCreateRoom = useSelector((state) => state.createRoom.createRoom)
  const openEditRoom = useSelector((state) => state.editRoom.editRoom)
  const openDeleteRoomModal = useSelector((state) => state.deleteRoomModal.deleteRoomModal)

  const dispatch = useDispatch()

  const openSearchRoomFunc = () => {
    dispatch(searchRoom())
  }
  const closeFunc = () => {
    dispatch(refreshSearchRoom())
    dispatch(refreshCreateRoom())
    dispatch(refreshEditRoom())
  }

  return (
    <div className={s.wrapper}>
      <div className={s.topBar}>
        <RoomName />
        <RoomCapacity />
        <Description />
        <div className={s.iconWrapper}>
          <SearchIcon onClick={openSearchRoomFunc} />
        </div>
        <button type="button" className={s.refreshIconWrapper}>
          <RefreshIcon onClick={closeFunc} />
        </button>
        <CreateLocationButton />
      </div>
      <div>
        {openSearchRoom && <SearchRoom />}
        {openCreateRoom && <CreateRoom />}
        {openEditRoom && <EditRoom />}
        {openDeleteRoomModal && <DeleteRoomModal />}
      </div>
    </div>
  )
}
