import React from 'react'
import RefreshIcon from '@mui/icons-material/Refresh'
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch, useSelector } from 'react-redux'
import UserFirstLastName from '../UserFirstLastName/UserFirstLastName'
import Organization from '../Organization/Organization'
import Department from '../Department/Department'
import Position from '../Position/Position'
import InviteButton from './InviteButton/InviteButton'
import s from './TopBarUser.module.css'
import SearchUsers from './SearchUsers/SearchUsers'
import { refreshSearchUsers, searchUsers } from '../../../store/SearchUsersSlice'
import InviteUser from './InviteUser/InviteUser'
import { refreshInviteUser } from '../../../store/InviteUserSlice'
import CreateUser from './CreateUser/CreateUser'
import { refreshCreateUser } from '../../../store/CreateUserSlice'

export default function TopBarUser() {
  const openSearchUsers = useSelector((state) => state.searchUsers.searchUsers)
  const openInviteUser = useSelector((state) => state.inviteUser.inviteUser)
  const openCreateUser = useSelector((state) => state.createUser.createUser)

  const dispatch = useDispatch()

  const openSearchUsersFunc = () => {
    dispatch(searchUsers())
  }

  const closeFunc = () => {
    dispatch(refreshSearchUsers())
    dispatch(refreshInviteUser())
    dispatch(refreshCreateUser())
  }

  return (
    <div className={s.wrapper}>
      <div className={s.topBar}>
        <UserFirstLastName />
        <Organization />
        <Department />
        <Position />
        <button type="button" className={s.iconWrapper} onClick={openSearchUsersFunc}>
          <SearchIcon />
        </button>
        <button type="button" className={s.refreshIconWrapper}>
          <RefreshIcon onClick={closeFunc} />
        </button>
        <InviteButton />
      </div>
      <div>
        {openSearchUsers && <SearchUsers />}
        {openInviteUser && <InviteUser />}
        {openCreateUser && <CreateUser />}
      </div>
    </div>
  )
}
