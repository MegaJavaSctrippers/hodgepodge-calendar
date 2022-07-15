import React from 'react'
import { Route, Routes } from 'react-router-dom'

import RegisterPage from './pages/RegisterPage'
import './styles/app.css'
import Home from './pages/Home'
import AdminCalendar from './pages/AdminCalendar'
import TopBarOrganization from './components/CalendarAdmin/TopBarOrganization/TopBarOrganization'
import TopBarUser from './components/CalendarAdmin/TopBarUser/TopBarUser'
import TopBarLocation from './components/CalendarAdmin/TopBarLocation/TopBarLocation'

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/calendar-admin" element={<AdminCalendar />}>
        <Route path="organization" element={<TopBarOrganization />} />
        <Route path="users" element={<TopBarUser />} />
        <Route path="rooms" element={<TopBarLocation />} />
      </Route>
    </Routes>
  )
}

export default App
