import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const RoomNamelist = [
  { label: 'Конференц-зал1', id: 1 },
  { label: 'Конференц-зал2', id: 2 },
  { label: 'Конференц-зал13', id: 3 },
  { label: 'Конференц-зал14', id: 4 },
]

export default function RoomName() {
  return (
    <Autocomplete
      disablePortal
      id="RoomName"
      options={RoomNamelist}
      sx={{ width: 224 }}
      renderInput={(params) => <TextField {...params} label="Название помещения" size="small" />}
    />
  )
}
