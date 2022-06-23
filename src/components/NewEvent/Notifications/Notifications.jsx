import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import s from './Notifications.module.css'
import Notification from './Notification/Notification'

function Notifications() {
  return (
    <div className={s.overlay}>
      <div className={s.notifications}>
        <div className={s.container}>
          <p className={s.title}>Уведомления</p>
          <CloseIcon className={s.close} />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
          <Notification />
        </div>
      </div>
    </div>
  )
}

export default Notifications
