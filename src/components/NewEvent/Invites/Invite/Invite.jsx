import React from 'react'
import Badge from '@mui/material/Badge'
import s from './Invite.module.css'
import ImageAvatar from '../../ImageAvatar/ImageAvatar'

function Invite() {
  return (
    <div>
      <div className={s.event_wrapper}>
        <div className={s.name_wrapper}>
          <ImageAvatar />
          <Badge
            color="success"
            variant="dot"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <div className={s.name}>Jenny Wilson</div>
          </Badge>
        </div>
        <div>Проект-менеджер</div>
        <div>Отдел разработок</div>
      </div>
      <hr className={s.divider} />
    </div>
  )
}

export default Invite
