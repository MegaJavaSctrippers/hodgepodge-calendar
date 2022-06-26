import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import './styles/app.css'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default App
