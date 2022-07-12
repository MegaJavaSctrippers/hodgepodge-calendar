import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { openOrganizationBar, closeOrganizationBar } from '../../../store/OrganizationBarSlice'
import { openUserBar, closeUserBar } from '../../../store/UserBarSlice'
import { openLocationBar, closeLocationBar } from '../../../store/LocationBarSlice'
import { closeCreatePosition } from '../../../store/CreatePositionSlice'
import { closeSearchPosition } from '../../../store/SearchPositionSlice'
import orgIcon from '../../../assets/icons/Organization.svg'
import user from '../../../assets/icons/Profile.svg'
import location from '../../../assets/icons/Location.svg'
import s from './AsideBar.module.css'

export default function AsideBar({ activeOrg, activeUser, activeLocation }) {
  const dispatch = useDispatch()
  const openOrganizationBarFunc = () => {
    dispatch(openOrganizationBar())
    dispatch(closeUserBar())
    dispatch(closeLocationBar())
  }
  const openUserBarFunc = () => {
    dispatch(openUserBar())
    dispatch(closeOrganizationBar())
    dispatch(closeLocationBar())
    dispatch(closeCreatePosition())
    dispatch(closeSearchPosition())
  }
  const openLocationBarFunc = () => {
    dispatch(openLocationBar())
    dispatch(closeUserBar())
    dispatch(closeOrganizationBar())
    dispatch(closeCreatePosition())
    dispatch(closeSearchPosition())
  }

  AsideBar.propTypes = {
    activeOrg: PropTypes.func.isRequired,
    activeUser: PropTypes.func.isRequired,
    activeLocation: PropTypes.func.isRequired,
  }
  return (
    <aside className={s.aside}>
      <button
        className={classNames(s.aside_item, { [s.active]: activeOrg })}
        type="button"
        onClick={openOrganizationBarFunc}
      >
        <img src={orgIcon} alt="organization-icon" />
        <p>Организация</p>
      </button>
      <button
        className={classNames(s.aside_item, { [s.active]: activeUser })}
        type="button"
        onClick={openUserBarFunc}
      >
        <img src={user} alt="user-icon" />
        <p>Пользователи</p>
      </button>
      <button
        className={classNames(s.aside_item, { [s.active]: activeLocation })}
        type="button"
        onClick={openLocationBarFunc}
      >
        <img src={location} alt="location-icon" />
        <p>Помещения</p>
      </button>
    </aside>
  )
}
