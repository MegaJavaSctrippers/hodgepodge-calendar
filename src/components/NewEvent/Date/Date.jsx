import React, { useState } from 'react'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ru from 'date-fns/locale/ru'
import s from './Date.module.css'

registerLocale('ru', ru)
setDefaultLocale('ru')

function Date() {
  const [selectedDate, setselectedDate] = useState(null)
  return (
    <DatePicker
      className={s.date}
      locale={ru}
      placeholderText="Дата"
      selected={selectedDate}
      onChange={(date) => setselectedDate(date)}
      dateFormat="dd/MM/yyyy"
    />
  )
}

export default Date
