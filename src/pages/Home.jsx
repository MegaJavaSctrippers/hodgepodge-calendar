import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import TimeBody from '../components/TimeBody/TimeBody'

function Home() {
  const [selectedMode, setSelectedMode] = useState({ id: 1, name: 'День' })

  return (
    <div className="grid_container">
      <Header selectedMode={selectedMode} setSelectedMode={setSelectedMode} />
      <Sidebar />
      <TimeBody selectedMode={selectedMode} />
    </div>
  )
}

export default Home
