import React, { useState } from 'react'
import Dropdown from './Dropdown/Dropdown'
import s from './CreateButton.module.css'

export default function CreateButton() {
  const [active, setActive] = useState(false)
  const openDropdown = () => {
    setActive(!active)
  }

  return (
    <div>
      <button className={s.btn} type="button" onClick={openDropdown}>
        + Создать
      </button>

      {active && <Dropdown setActive={setActive} active={active} />}
    </div>
  )
}
