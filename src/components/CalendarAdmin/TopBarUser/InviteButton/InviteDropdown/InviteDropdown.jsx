import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import s from './InviteDropdown.module.css'
import { inviteUser } from '../../../../../store/InviteUserSlice'

export default function InviteDropdown({ setActive, active }) {
  const dispatch = useDispatch()
  const openInviteUserFunc = () => {
    dispatch(inviteUser())
  }

  InviteDropdown.propTypes = {
    setActive: PropTypes.func.isRequired,
    active: PropTypes.func.isRequired,
  }

  return (
    <div>
      <div className={s.dropdownContent} onMouseLeave={() => setActive(!active)}>
        <button className={s.dropdownItem} type="button">
          Создать
        </button>
        <button className={s.dropdownItem} type="button" onClick={openInviteUserFunc}>
          Пригласить
        </button>
      </div>
    </div>
  )
}
