import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import orgIcon from '../../../assets/icons/Organization.svg'
import user from '../../../assets/icons/Profile.svg'
import location from '../../../assets/icons/Location.svg'
import s from './AsideBar.module.css'

export default function AsideBar() {
  const [activeOrg, setActiveOrg] = useState(false)
  const [activeUser, setActiveUser] = useState(false)
  const [activeLocation, setActiveLocation] = useState(false)

  const makeActiveOrg = () => {
    setActiveOrg(true)
    setActiveUser(false)
    setActiveLocation(false)
  }
  const makeActiveUser = () => {
    setActiveUser(true)
    setActiveOrg(false)
    setActiveLocation(false)
  }
  const makeActiveLocation = () => {
    setActiveLocation(true)
    setActiveOrg(false)
    setActiveUser(false)
  }

  return (
    <aside className={s.aside}>
      <Link
        to="organization"
        className={classNames(s.aside_item, { [s.active]: activeOrg })}
        type="button"
        onClick={makeActiveOrg}
      >
        <img src={orgIcon} alt="organization-icon" />
        <p>Организация</p>
      </Link>
      <Link
        to="users"
        className={classNames(s.aside_item, { [s.active]: activeUser })}
        type="button"
        onClick={makeActiveUser}
      >
        <img src={user} alt="user-icon" />
        <p>Пользователи</p>
      </Link>
      <Link
        to="rooms"
        className={classNames(s.aside_item, { [s.active]: activeLocation })}
        type="button"
        onClick={makeActiveLocation}
      >
        <img src={location} alt="location-icon" />
        <p>Помещения</p>
      </Link>
    </aside>
  )
}
