import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Organization from '../Organization/Organization'
import Department from '../Department/Department'
import Position from '../Position/Position'
import CreateButton from '../CreateButton/CreateButton'
import s from './TopBarOrganization.module.css'

export default function ToparOrganization() {
  return (
    <div className={s.topBar}>
      <Organization />
      <Department />
      <Position />
      <div className={s.iconWrapper}>
        <SearchIcon />
      </div>
      <CreateButton />
    </div>
  )
}
