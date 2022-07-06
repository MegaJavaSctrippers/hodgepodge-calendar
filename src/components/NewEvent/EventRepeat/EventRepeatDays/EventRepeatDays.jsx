import React from 'react'
import DayOfWeek from './DayOfWeek/DayOfWeek'
import s from './EventRepeatDays.module.css'

function EventRepeatDays() {
  const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

  return (
    <div className={s.repeat_days}>
      {days.map((day) => (
        <DayOfWeek day={day} key={day} />
      ))}
    </div>
  )
}

export default EventRepeatDays
