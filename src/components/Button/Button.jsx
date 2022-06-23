import React, { useState } from 'react'
import NewEvent from '../NewEvent/NewEvent'
import EventRepeat from '../NewEvent/EventRepeat/EventRepeat'
import Notifications from '../NewEvent/Notifications/Notifications'
import Invites from '../NewEvent/Invites/Invites'
import s from './Button.module.css'

function Button() {
  const [modalNewEvent, setModalNewEvent] = useState(false)
  const toggleModalNewEvent = () => {
    setModalNewEvent(!modalNewEvent)
  }

  return (
    <div>
      <button className={s.btn} type="button" onClick={toggleModalNewEvent}>
        Создать
      </button>

      {modalNewEvent && <Invites />}
    </div>
  )
}

export default Button
