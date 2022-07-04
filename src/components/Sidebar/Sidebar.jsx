import React from 'react'
import Button from '../UI/Button/Button'
import MyCalendar from '../MyCalendar/MyCalendar'
import Label from '../Label/Label'

function Sidebar() {
  return (
    <div className="sidebar">
      <Button>Создать</Button>
      <MyCalendar />
      <Label />
    </div>
  )
}

export default Sidebar
