import React, { useState } from 'react'
import ruLocale from 'date-fns/locale/ru'
import dateFnsUtils from '@date-io/date-fns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { CalendarPicker } from '@mui/x-date-pickers'

function CustomCalendar() {
  const [date, setDate] = useState(new Date())
  const dateChangeHandler = () => setDate(date)
  return (
    <div>
      <LocalizationProvider dateAdapter={dateFnsUtils} locale={ruLocale}>
        <CalendarPicker date={date} onChange={dateChangeHandler}>
      </LocalizationProvider>
    </div>
  )
}

export default CustomCalendar
