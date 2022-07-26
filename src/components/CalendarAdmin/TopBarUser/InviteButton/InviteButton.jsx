import React, { useState } from 'react'
import InviteDropdown from './InviteDropdown/InviteDropdown'
import s from './InviteButton.module.css'

export default function InviteButton() {
  const [active, setActive] = useState(false)
  const openDropdown = () => {
    setActive(!active)
  }

  return (
    <div>
      <button className={s.btn} type="button" onClick={openDropdown}>
        + Пригласить
      </button>

      {active && <InviteDropdown setActive={setActive} active={active} />}
    </div>
  )
}
