import React, { useState } from 'react'
import Icon from '@mui/material/Icon'
import s from './AddParticipant.module.css'
import Invites from '../Invites/Invites'

function AddParticipant() {
  const [active, setActive] = useState(false)

  const toggleInvites = () => {
    setActive(!active)
  }

  return (
    <div>
      <Icon className={s.plus_icon} color="primary" onClick={toggleInvites}>
        add_circle
      </Icon>

      {active && <Invites toggleInvites={toggleInvites} />}
    </div>
  )
}

export default AddParticipant
