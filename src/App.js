import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminEntry from './components/AdminEntry/AdminEntry'
import ForgotPassword from './components/AdminEntry/ForgotPassword/ForgotPassword'
import CalendarAdmin from './components/CalendarAdmin/CalendarAdmin'
import Button from './components/Button/Button'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Button /> */}
        <Routes>
          <Route path="/admin-entry" element={<AdminEntry />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/calendar-admin" element={<CalendarAdmin />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
