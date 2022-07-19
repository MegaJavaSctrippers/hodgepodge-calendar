import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import RefreshIcon from '@mui/icons-material/Refresh'
import RoomName from './RoomName/RoomName'
import RoomCapacity from './RoomCapacity/RoomCapacity'
import CreateLocationButton from './CreateLocationButton/CreateLocationButton'
import s from './TopBarLocation.module.css'
import Description from './Description/Description'

export default function TopBarLocation() {
  return (
    <div className={s.topBar}>
      <RoomName />
      <RoomCapacity />
      <Description />
      <div className={s.iconWrapper}>
        <SearchIcon />
      </div>
      <button type="button" className={s.refreshIconWrapper}>
        <RefreshIcon />
      </button>
      <CreateLocationButton />
    </div>
  )
}
