import * as React from 'react'
import TextField from '@mui/material/TextField'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { ru } from 'date-fns/locale'

export default function BasicDatePicker() {
  const [value, setValue] = React.useState(new Date())

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>
      <DatePicker
        label="Дата"
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}
