import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import calendarIcon from '../../assets/icons/Calendaradmin.svg'
import s from './CalendarAdmin.module.css'
import Organization from './Organization/Organization'
import Department from './Department/Department'
import Position from './Position/Position'
import orgIcon from '../../assets/icons/Organization.svg'
import profile from '../../assets/icons/Profile.svg'
import location from '../../assets/icons/Location.svg'
import CreateButton from './CreateButton/CreateButton'

export default function CalendarAdmin() {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.calendarAdmin}>
          <img className={s.calendarIcon} src={calendarIcon} alt="calendarIcon" />
          CalendarAdmin
        </div>
        <div className={s.topBar}>
          <Organization />
          <Department />
          <Position />
          <div className={s.iconWrapper}>
            <SearchIcon />
          </div>
          <CreateButton />
        </div>
      </div>
      <aside className={s.aside}>
        <div className={s.aside_item}>
          <img src={orgIcon} alt="organization-icon" />
          <p>Организация</p>
        </div>
        <div className={s.aside_item}>
          <img src={profile} alt="organization-icon" />
          <p>Пользователи</p>
        </div>
        <div className={s.aside_item}>
          <img src={location} alt="organization-icon" />
          <p>Помещения</p>
        </div>
      </aside>
    </div>
  )
}
