import React from 'react'
import { Route, Routes } from 'react-router-dom'

import AdminEntry from './components/AdminEntry/AdminEntry'
import ForgotPassword from './components/AdminEntry/ForgotPassword/ForgotPassword'
import CalendarAdmin from './components/CalendarAdmin/CalendarAdmin'
import Button from './components/Button/Button'

import RegisterPage from './pages/RegisterPage'
import './styles/app.css'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      {/* <Routes>
          <Route path="/admin-entry" element={<AdminEntry />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/calendar-admin" element={<CalendarAdmin />} />
        </Routes> */}
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}
