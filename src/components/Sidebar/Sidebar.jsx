import React, { useState } from 'react'
import Button from '../UI/Button/Button'
import MyCalendar from '../MyCalendar/MyCalendar'
import Label from '../Label/Label'
import NewEvent from '../NewEvent/NewEvent'

function Sidebar() {
  const [modalNewEvent, setModalNewEvent] = useState(false)
  const toggleModalNewEvent = () => {
    setModalNewEvent(!modalNewEvent)
  }

  return (
    <div className="sidebar">
      <Button type="button" onClick={toggleModalNewEvent}>
        Создать
      </Button>
      <MyCalendar />
      <Label />
      {modalNewEvent && <NewEvent toggleModalNewEvent={toggleModalNewEvent} />}
    </div>
  )
}

export default Sidebar
