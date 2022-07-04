import React, { useState } from 'react'
import PropTypes from 'prop-types'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import s from './Invites.module.css'
import Invite from './Invite/Invite'
import AvatarRow from './AvatarRow/AvatarRow'

function Notifications({ handleClick }) {
  Notifications.propTypes = {
    handleClick: PropTypes.func.isRequired,
  }

  const [open, setOpen] = useState(true)
  const closeAvatar = () => {
    setOpen(!open)
  }

  return (
    <div className={s.overlay}>
      <div className={s.invites}>
        <div className={s.container}>
          <p className={s.title}>Пригласить</p>
          <CloseIcon className={s.close} onClick={handleClick} />
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
          {open && <AvatarRow closeAvatar={closeAvatar} />}
          <button className={s.btn} type="button">
            Пригласить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Notifications
