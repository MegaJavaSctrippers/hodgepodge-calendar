import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import Badge from '@mui/material/Badge'
import ImageAvatar from '../ImageAvatar/ImageAvatar'
import s from './Invites.module.css'
import Invite from './Invite/Invite'

function Notifications() {
  return (
    <div className={s.overlay}>
      <div className={s.invites}>
        <div className={s.container}>
          <p className={s.title}>Пригласить</p>
          <CloseIcon className={s.close} />
          <input className={s.input} type="text" />
          <SearchIcon className={s.search} />
          <div className={s.invite_wrapper}>
            <Invite />
            <Invite />
            <Invite />
            <Invite />
            <Invite />
            <Invite />
            <Invite />
            <Invite />
            <Invite />
            <Invite />
            <Invite />
          </div>
          <div className={s.participants_wrapper}>
            <ImageAvatar />
            <ImageAvatar />
            <ImageAvatar />
            <Badge className={s.participants_badge} badgeContent="x" color="secondary" size="small">
              <ImageAvatar />
            </Badge>
          </div>
          <button className={s.btn} type="button">
            Пригласить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Notifications
