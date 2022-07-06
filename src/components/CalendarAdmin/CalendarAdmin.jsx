import React, { useState } from 'react'
import classNames from 'classnames'
import calendarIcon from '../../assets/icons/Calendaradmin.svg'
import orgIcon from '../../assets/icons/Organization.svg'
import user from '../../assets/icons/Profile.svg'
import location from '../../assets/icons/Location.svg'
import TopBarOrganization from './TopBarOrganization/TopBarOrganization'
import TopBarUser from './TopBarUser/TopBarUser'
import TopBarLocation from './TopBarLocation/TopBarLocation'
import s from './CalendarAdmin.module.css'

export default function CalendarAdmin() {
  const [activeOrg, setActiveOrg] = useState(false)
  const [activeUser, setActiveUser] = useState(false)
  const [activeLocation, setActiveLocation] = useState(false)

  const showOrganizationBar = () => {
    setActiveOrg(!activeOrg)
    setActiveUser(false)
    setActiveLocation(false)
  }
  const showUserBar = () => {
    setActiveUser(!activeUser)
    setActiveOrg(false)
    setActiveLocation(false)
  }
  const showLocationBar = () => {
    setActiveLocation(!activeLocation)
    setActiveOrg(false)
    setActiveUser(false)
  }

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.calendarAdmin}>
          <img className={s.calendarIcon} src={calendarIcon} alt="calendarIcon" />
          CalendarAdmin
        </div>
        {activeOrg && <TopBarOrganization />}
        {activeUser && <TopBarUser />}
        {activeLocation && <TopBarLocation />}
      </div>
      <aside className={s.aside}>
        <button
          className={classNames(s.aside_item, { [s.active]: activeOrg })}
          type="button"
          onClick={showOrganizationBar}
        >
          <img src={orgIcon} alt="organization-icon" />
          <p>Организация</p>
        </button>
        <button
          className={classNames(s.aside_item, { [s.active]: activeUser })}
          type="button"
          onClick={showUserBar}
        >
          <img src={user} alt="user-icon" />
          <p>Пользователи</p>
        </button>
        <button
          className={classNames(s.aside_item, { [s.active]: activeLocation })}
          type="button"
          onClick={showLocationBar}
        >
          <img src={location} alt="location-icon" />
          <p>Помещения</p>
        </button>
      </aside>
    </div>
  )
}
