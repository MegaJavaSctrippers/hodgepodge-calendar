import React from 'react'
import { Link } from 'react-router-dom'
import calendarIcon from '../../assets/icons/Calendaradmin.svg'
import s from './CalendarAdmin.module.css'
import AsideBar from './AsideBar/AsideBar'

export default function CalendarAdmin() {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <Link to="/calendar-admin" className={s.calendarAdmin}>
          <img className={s.calendarIcon} src={calendarIcon} alt="calendarIcon" />
          CalendarAdmin
        </Link>
      </div>
      <div className={s.main}>
        <AsideBar />
      </div>
    </div>
  )
}
