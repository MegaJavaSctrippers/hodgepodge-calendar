import React from 'react'
import PropTypes from 'prop-types'
import s from './Dropdown.module.css'

export default function Dropdown({ setActive, active, openCreatePosition }) {
  Dropdown.propTypes = {
    setActive: PropTypes.func.isRequired,
    active: PropTypes.func.isRequired,
    openCreatePosition: PropTypes.func.isRequired,
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
