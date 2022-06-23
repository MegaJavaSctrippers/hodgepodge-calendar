import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const RoomList = [
  { label: 'Конференц-зал 1', id: 1 },
  { label: 'Конференц-зал 2', id: 2 },
  { label: 'Конференц-зал 3', id: 3 },
]

export default function Room() {
  return (
    <Autocomplete
      disablePortal
      id="room"
      options={RoomList}
      sx={{ width: 288 }}
      renderInput={(params) => <TextField {...params} />}
    />
  )
}
