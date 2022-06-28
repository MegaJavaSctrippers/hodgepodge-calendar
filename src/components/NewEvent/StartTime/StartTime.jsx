import React, { useState } from 'react'
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { TextField } from '@mui/material'

function StartTime() {
  const [selectedTime, setselectedTime] = useState(new Date())
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label="Начало"
        renderInput={(params) => <TextField {...params} />}
        value={selectedTime}
        onChange={(newValue) => {
          setselectedTime(newValue)
        }}
        ampm={false}
      />
    </LocalizationProvider>
  )
}

export default StartTime
