import React, { useState } from 'react'
import s from './CreateLocationButton.module.css'

export default function CreateLocationButton() {
  const [active, setActive] = useState(false)
  const openDropdown = () => {
    setActive(!active)
  }

  return (
    <div>
      <button className={s.btn} type="button" onClick={openDropdown}>
        + Создать
      </button>
    </div>
  )
}
