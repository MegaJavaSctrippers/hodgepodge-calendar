import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const Departmentlist = [
  { label: 'Отдел безопасности', id: 1 },
  { label: 'Отдел2', id: 2 },
  { label: 'Отдел3', id: 3 },
  { label: 'Отдел4', id: 4 },
]

export default function Department() {
  return (
    <Autocomplete
      disablePortal
      id="Department"
      options={Departmentlist}
      sx={{ width: 224 }}
      renderInput={(params) => <TextField {...params} label="Отдел" size="small" />}
    />
  )
}
