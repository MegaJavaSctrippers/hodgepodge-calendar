import React from 'react'
import Badge from '@mui/material/Badge'
import s from './Notification.module.css'

function Notification() {
  return (
    <div>
      <div className={s.event_wrapper}>
        <div className={s.event_name}>
          <Badge
            color="primary"
            variant="dot"
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <div className={s.event_title}>Совещание</div>
          </Badge>
          <div>Darrel Steward</div>
        </div>
        <div className={s.event_date}>
          <div>22.09.2022</div>
          <div>Сегодня</div>
        </div>
        <div className={s.event_time}>
          <div>09:00</div>
          <span>-</span>
          <div>10:00</div>
        </div>
        <div className={s.location}>
          <div>1 этаж, кабинет 17</div>
        </div>
        <div className={s.department}>
          <div>Отдел разработок</div>
        </div>
      </div>
      <hr className={s.divider} />
    </div>
  )
}

export default Notification
