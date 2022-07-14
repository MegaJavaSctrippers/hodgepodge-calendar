import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/app.css'

import Home from './pages/Home'
import RegisterPage from './pages/RegisterPage'
import AdminEntry from './components/AdminEntry/AdminEntry'
import ForgotPassword from './components/AdminEntry/ForgotPassword/ForgotPassword'
import CalendarAdmin from './components/CalendarAdmin/CalendarAdmin'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admin-entry" element={<AdminEntry />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/calendar-admin" element={<CalendarAdmin />} />
    </Routes>
  )
}

export default App
