import React, { useState } from 'react'
import Calendar from 'react-calendar'

import './MyCalendar.css'

// eslint-disable-next-line import/no-unresolved

function MyCalendar() {
  const [date, setDate] = useState(new Date())

  return (
    <div className="MyCalendar">
      <Calendar
        value={date}
        onChange={() => setDate(date)}
        selectRange
        next2Label={null}
        prev2Label={null}
      />
    </div>
  )
}

export default MyCalendar
