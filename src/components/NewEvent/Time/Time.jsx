import React, { useState } from 'react'
import { TimePicker } from '@mui/x-date-pickers'
import { TextField } from '@mui/material'
import s from './Time.module.css'

function Time() {
  const [selectedTime, setselectedTime] = useState(null)
  return (
    <TimePicker
      // className={s.time}
      renderInput={(params) => <TextField {...params} />}
      value={selectedTime}
      onChange={(newValue) => {
        setselectedTime(newValue)
      }}
    />
  )
}

export default Time
