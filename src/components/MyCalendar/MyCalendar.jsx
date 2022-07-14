import React, { useState } from 'react'
import Calendar from 'react-calendar'

import './MyCalendar.css'

// eslint-disable-next-line import/no-unresolved

function MyCalendar() {
  const [date, setDate] = useState(new Date())

  const checkProps = (value, event) => {
    const date = new Date()
    // eslint-disable-next-line no-console
    console.log(event.currentTarget)
    // eslint-disable-next-line no-console
    console.log(value)
    // eslint-disable-next-line no-console
    console.log(event.target.setAttribute('dateTime', date.getDate()))

    // .getAttribute('aria-label')
  }

  return (
    <div className="MyCalendar">
      <Calendar
        locale="ru-RU"
        value={date}
        onChange={() => setDate(date)}
        selectRange
        next2Label={null}
        prev2Label={null}
        onClickDay={checkProps}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        selectRange
      />
    </div>
  )
}

export default MyCalendar
