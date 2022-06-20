import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const repeatList = [
  { label: 'Не повторять', id: 1 },
  { label: 'Ежедневно', id: 2 },
  { label: 'По будням (Пн-Пт)', id: 3 },
  { label: 'Еженедельно (среда)', id: 4 },
  { label: 'Ежемесячно (2ой день)', id: 5 },
  { label: 'Ежемесячно (1ая среда)', id: 6 },
  { label: 'Ежегодно (2 сент.)', id: 7 },
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
