import React from 'react'
import { Outlet } from 'react-router-dom'
import CalendarAdmin from '../components/CalendarAdmin/CalendarAdmin'

function AdminCalendar() {
  return (
    <div>
      <CalendarAdmin />
      <Outlet />
    </div>
  )
}

export default AdminCalendar
