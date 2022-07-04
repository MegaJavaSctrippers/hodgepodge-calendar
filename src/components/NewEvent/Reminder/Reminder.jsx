import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const reminderList = [
  { label: 'Нет', id: 1 },
  { label: 'В момент события', id: 2 },
  { label: 'За 5 минут', id: 3 },
  { label: 'За 10 минут', id: 4 },
  { label: 'За 15 минут', id: 5 },
  { label: 'За 30 минут', id: 6 },
  { label: 'За 1 час', id: 7 },
  { label: 'За 2 часа', id: 8 },
  { label: 'За 1 день', id: 9 },
  { label: 'За 2 дня', id: 10 },
  { label: 'За неделю', id: 11 },
]

export default function Reminder() {
  return (
    <Autocomplete
      disablePortal
      id="reminder1"
      options={reminderList}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Напоминание 1" />}
    />
  )
}
