import React from 'react'
import { TextField, Autocomplete } from '@mui/material'

const Organizationlist = [
  { label: 'Организация', id: 1 },
  { label: 'Личный', id: 2 },
  { label: 'Мероприятия', id: 3 },
  { label: 'Проекты', id: 4 },
]

export default function Organization() {
  return (
    <Autocomplete
      sx={{ width: 224 }}
      disablePortal
      id="Organization"
      options={Organizationlist}
      renderInput={(params) => <TextField {...params} label="Организация" size="small" />}
    />
  )
}
