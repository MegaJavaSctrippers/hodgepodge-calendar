import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import RoomName from '../RoomName/RoomName'
import RoomCapacity from '../RoomCapacity/RoomCapacity'
import CreateLocationButton from '../CreateLocationButton/CreateLocationButton'
import s from './TopBarLocation.module.css'

export default function TopBarLocation() {
  return (
    <div className={s.topBar}>
      <RoomName />
      <RoomCapacity />
      <div className={s.iconWrapper}>
        <SearchIcon />
      </div>
      <CreateLocationButton />
    </div>
  )
}
