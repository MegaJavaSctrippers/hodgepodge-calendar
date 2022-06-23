import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const repeatList = [
  { label: 'Не повторять', id: 1 },
  { label: 'Ежедневно', id: 2 },
  { label: 'Еженедельно', id: 3 },
  { label: 'Ежемесячно', id: 4 },
  { label: 'Ежегодно', id: 5 },
  { label: 'Настроить...', id: 6 },
]

export default function Repeat() {
  return (
    <Autocomplete
      disablePortal
      id="repeat"
      options={repeatList}
      sx={{ width: 200 }}
      renderInput={(params) => <TextField {...params} label="Повтор" />}
    />
  )
}
