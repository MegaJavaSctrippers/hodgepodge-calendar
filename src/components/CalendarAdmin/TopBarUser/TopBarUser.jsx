import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import UserFirstLastName from '../UserFirstLastName/UserFirstLastName'
import Organization from '../Organization/Organization'
import Department from '../Department/Department'
import Position from '../Position/Position'
import InviteButton from '../InviteButton/InviteButton'
import s from './TopBarUser.module.css'

export default function TopBarUser() {
  return (
    <div className={s.topBar}>
      <UserFirstLastName />
      <Organization />
      <Department />
      <Position />
      <div className={s.iconWrapper}>
        <SearchIcon />
      </div>
      <InviteButton />
    </div>
  )
}
