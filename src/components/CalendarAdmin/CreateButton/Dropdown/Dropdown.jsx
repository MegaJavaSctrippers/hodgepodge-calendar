import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { createPosition } from '../../../../store/CreatePositionSlice'
import { closeSearchPosition } from '../../../../store/SearchPositionSlice'
import s from './Dropdown.module.css'

export default function Dropdown({ setActive, active }) {
  const dispatch = useDispatch()
  const createPositionFunc = () => {
    dispatch(createPosition())
    dispatch(closeSearchPosition())
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
        <button className={s.dropdownItem} type="button" onClick={createPositionFunc}>
          Должность
        </button>
      </div>
    </div>
  )
}
