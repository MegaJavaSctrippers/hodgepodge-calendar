import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const Positionlist = [
  { label: 'Должность1', id: 1 },
  { label: 'Должность2', id: 2 },
  { label: 'Должность3', id: 3 },
  { label: 'Должность4', id: 4 },
]

export default function Position() {
  return (
    <Autocomplete
      disablePortal
      id="Position"
      options={Positionlist}
      sx={{
        width: 224,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: 17,
      }}
      renderInput={(params) => <TextField {...params} label="Должность" size="small" />}
    />
  )
}
