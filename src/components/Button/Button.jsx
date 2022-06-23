import React, { useState } from 'react'
import NewEvent from '../NewEvent/NewEvent'
import EventRepeat from '../NewEvent/EventRepeat/EventRepeat'
import Notifications from '../NewEvent/Notifications/Notifications'
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

      {modalNewEvent && <Notifications />}
    </div>
  )
}

export default Button
