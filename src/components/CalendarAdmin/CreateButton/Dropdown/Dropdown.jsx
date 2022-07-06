import React from 'react'
import s from './Dropdown.module.css'

export default function Dropdown() {
  const dropdownList = ['Организация', 'Отдел', 'Должность']
  return (
    <div className={s.dropdownContent}>
      {dropdownList.map((dropdownItem) => (
        <div className={s.dropdownItem}>{dropdownItem}</div>
      ))}
    </div>
  )
}
