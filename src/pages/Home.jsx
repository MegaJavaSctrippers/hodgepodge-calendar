import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'

function Home() {
  return (
    <div className="grid_container">
      <Header />
      <Sidebar />
      <div className="time_body" />
    </div>
  )
}

export default Home
