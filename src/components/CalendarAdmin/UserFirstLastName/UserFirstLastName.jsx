import React from 'react'
import { TextField, Autocomplete } from '@mui/material'

const UserFirstLastNameList = [
  { label: 'ФИО1', id: 1 },
  { label: 'ФИО2', id: 2 },
  { label: 'ФИО3', id: 3 },
  { label: 'ФИО4', id: 4 },
]

export default function UserFirstLastName() {
  return (
    <Autocomplete
      sx={{ width: 224 }}
      disablePortal
      id="Organization"
      options={UserFirstLastNameList}
      renderInput={(params) => <TextField {...params} label="ФИО" size="small" />}
    />
  )
}
