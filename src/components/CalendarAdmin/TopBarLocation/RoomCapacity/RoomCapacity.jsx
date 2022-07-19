import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const CapacityList = [
  { label: '20м2', id: 1 },
  { label: '30м2', id: 2 },
  { label: '40м2', id: 3 },
  { label: '50м2', id: 4 },
]

export default function RoomCapacity() {
  return (
    <Autocomplete
      disablePortal
      id="RoomCapacity"
      options={CapacityList}
      sx={{ width: 224 }}
      renderInput={(params) => <TextField {...params} label="Вместимость (м2)" size="small" />}
    />
  )
}
