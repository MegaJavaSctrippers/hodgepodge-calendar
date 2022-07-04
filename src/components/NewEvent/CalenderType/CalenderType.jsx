import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const CalenderList = [
  { label: 'Рабочий', id: 1 },
  { label: 'Личный', id: 2 },
  { label: 'Мероприятия', id: 3 },
  { label: 'Проекты', id: 4 },
]

export default function CalenderType() {
  return (
    <Autocomplete
      disablePortal
      id="room"
      options={CalenderList}
      sx={{ width: 288 }}
      renderInput={(params) => <TextField {...params} />}
    />
  )
}
