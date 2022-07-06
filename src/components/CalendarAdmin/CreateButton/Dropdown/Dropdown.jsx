import React from 'react'
import PropTypes from 'prop-types'
import s from './Dropdown.module.css'

export default function Dropdown({ setActive, active }) {
  Dropdown.propTypes = {
    setActive: PropTypes.func.isRequired,
    active: PropTypes.func.isRequired,
  }

  const dropdownList = ['Организация', 'Отдел', 'Должность']

  return (
    <div className={s.dropdownContent} onMouseLeave={() => setActive(!active)}>
      {dropdownList.map((dropdownItem) => (
        <div className={s.dropdownItem}>{dropdownItem}</div>
      ))}
    </div>
  )
}
