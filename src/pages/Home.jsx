import React from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import TimeBody from '../components/TimeBody/TimeBody'

function Home() {
  return (
    <div className="grid_container">
      <Header />
      <Sidebar />
      <TimeBody />
    </div>
  )
}

export default Home
