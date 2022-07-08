import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import orgIcon from '../../../assets/icons/Organization.svg'
import user from '../../../assets/icons/Profile.svg'
import location from '../../../assets/icons/Location.svg'
import s from './AsideBar.module.css'

export default function AsideBar(props) {
  AsideBar.propTypes = {
    activeOrg: PropTypes.func.isRequired,
    activeUser: PropTypes.func.isRequired,
    activeLocation: PropTypes.func.isRequired,
    showOrganizationBar: PropTypes.func.isRequired,
    showUserBar: PropTypes.func.isRequired,
    showLocationBar: PropTypes.func.isRequired,
  }
  return (
    <aside className={s.aside}>
      <button
        className={classNames(s.aside_item, { [s.active]: props.activeOrg })}
        type="button"
        onClick={props.showOrganizationBar}
      >
        <img src={orgIcon} alt="organization-icon" />
        <p>Организация</p>
      </button>
      <button
        className={classNames(s.aside_item, { [s.active]: props.activeUser })}
        type="button"
        onClick={props.showUserBar}
      >
        <img src={user} alt="user-icon" />
        <p>Пользователи</p>
      </button>
      <button
        className={classNames(s.aside_item, { [s.active]: props.activeLocation })}
        type="button"
        onClick={props.showLocationBar}
      >
        <img src={location} alt="location-icon" />
        <p>Помещения</p>
      </button>
    </aside>
  )
}
