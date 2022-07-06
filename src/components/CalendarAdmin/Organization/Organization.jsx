import React from 'react'
import { TextField, Autocomplete } from '@mui/material'

const Organizationlist = [
  { label: 'Организация1', id: 1 },
  { label: 'Организация2', id: 2 },
  { label: 'Организация3', id: 3 },
  { label: 'Организация4', id: 4 },
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
