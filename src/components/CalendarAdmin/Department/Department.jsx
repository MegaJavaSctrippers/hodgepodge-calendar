import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const Departmentlist = [
  { label: 'Отдел', id: 1 },
  { label: 'Личный', id: 2 },
  { label: 'Мероприятия', id: 3 },
  { label: 'Проекты', id: 4 },
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
