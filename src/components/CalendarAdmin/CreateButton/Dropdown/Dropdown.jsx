import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { createPosition } from '../../../../store/CreatePositionSlice'
import s from './Dropdown.module.css'

export default function Dropdown({ setActive, active }) {
  const dispatch = useDispatch()

  const openCreatePosition = () => {
    dispatch(createPosition())
  }

  Dropdown.propTypes = {
    setActive: PropTypes.func.isRequired,
    active: PropTypes.func.isRequired,
  }

  return (
    <div>
      <div className={s.dropdownContent} onMouseLeave={() => setActive(!active)}>
        <button className={s.dropdownItem} type="button">
          Организация
        </button>
        <button className={s.dropdownItem} type="button">
          Отдел
        </button>
        <button className={s.dropdownItem} type="button" onClick={openCreatePosition}>
          Должность
        </button>
      </div>
    </div>
  )
}
