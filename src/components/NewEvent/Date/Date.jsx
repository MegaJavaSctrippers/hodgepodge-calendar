import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import s from './Date.module.css'

function Date() {
  const [selectedDate, setselectedDate] = useState(null)
  return (
    <DatePicker
      className={s.date}
      placeholderText="Выберите дату"
      selected={selectedDate}
      onChange={(date) => setselectedDate(date)}
      dateFormat="dd/MM/yyyy"
    />
  )
}

export default Date
