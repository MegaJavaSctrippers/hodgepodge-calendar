import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const PermissionList = [
  { label: 'Общедоступное', id: 1 },
  { label: 'Приватное', id: 2 },
]

export default function Permission() {
  return (
    <Autocomplete
      disablePortal
      id="room"
      options={PermissionList}
      sx={{ width: 288 }}
      renderInput={(params) => <TextField {...params} />}
    />
  )
}
