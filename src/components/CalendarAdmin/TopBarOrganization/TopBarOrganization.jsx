import React from 'react'
import { useDispatch } from 'react-redux'
import SearchIcon from '@mui/icons-material/Search'
import { searchPosition } from '../../../store/SearchPositionSlice'
import { closeCreatePosition } from '../../../store/CreatePositionSlice'
import Organization from '../Organization/Organization'
import Department from '../Department/Department'
import Position from '../Position/Position'
import CreateButton from '../CreateButton/CreateButton'
import s from './TopBarOrganization.module.css'

export default function TopBarOrganization() {
  const dispatch = useDispatch()
  const searchPositionFunc = () => {
    dispatch(searchPosition())
    dispatch(closeCreatePosition())
  }

  return (
    <div className={s.topBar}>
      <Organization />
      <Department />
      <Position />
      <div className={s.iconWrapper}>
        <SearchIcon onClick={searchPositionFunc} />
      </div>
      <CreateButton />
    </div>
  )
}
