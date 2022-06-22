import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import './styles/app.css'

function TilekMP() {
  return <h1>hello</h1>
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<TilekMP />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default App
