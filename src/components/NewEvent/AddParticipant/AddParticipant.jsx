import React, { useState } from 'react'
import Icon from '@mui/material/Icon'
import s from './AddParticipant.module.css'
import Invites from '../Invites/Invites'

function AddParticipant() {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <div>
      <Icon className={s.plus_icon} color="primary" onClick={handleClick}>
        add_circle
      </Icon>

      {active && <Invites handleClick={handleClick} />}
    </div>
  )
}

export default AddParticipant
