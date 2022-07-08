import React from 'react'
import PropTypes from 'prop-types'
import SearchIcon from '@mui/icons-material/Search'
import Organization from '../Organization/Organization'
import Department from '../Department/Department'
import Position from '../Position/Position'
import CreateButton from '../CreateButton/CreateButton'
import s from './TopBarOrganization.module.css'

export default function ToparOrganization({ openCreatePosition, openSearchPosition }) {
  ToparOrganization.propTypes = {
    openCreatePosition: PropTypes.func.isRequired,
    openSearchPosition: PropTypes.func.isRequired,
  }

  return (
    <div className={s.topBar}>
      <Organization />
      <Department />
      <Position />
      <div className={s.iconWrapper}>
        <SearchIcon onClick={openSearchPosition} />
      </div>
      <CreateButton openCreatePosition={openCreatePosition} />
    </div>
  )
}
