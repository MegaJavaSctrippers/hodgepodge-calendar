import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import s from './InviteDropdown.module.css'
import { inviteUser } from '../../../../../store/InviteUserSlice'
import { createUser } from '../../../../../store/CreateUserSlice'

export default function InviteDropdown({ setActive, active }) {
  const dispatch = useDispatch()
  const openInviteUserFunc = () => {
    dispatch(inviteUser())
  }
  const openCreateUserFunc = () => {
    dispatch(createUser())
  }

  InviteDropdown.propTypes = {
    setActive: PropTypes.func.isRequired,
    active: PropTypes.func.isRequired,
  }

  return (
    <div>
      <div className={s.dropdownContent} onMouseLeave={() => setActive(!active)}>
        <button className={s.dropdownItem} type="button" onClick={openCreateUserFunc}>
          Создать
        </button>
        <button className={s.dropdownItem} type="button" onClick={openInviteUserFunc}>
          Пригласить
        </button>
      </div>
    </div>
  )
}
