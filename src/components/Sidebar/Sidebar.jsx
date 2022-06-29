import React from 'react'
import Button from '../UI/Button/Button'
import CustomCalendar from '../CustomCalendar/CustomCalendar'

function Sidebar() {
  return (
    <div className="sidebar">
      <Button>Создать</Button>
      <CustomCalendar />
    </div>
  )
}

export default Sidebar
