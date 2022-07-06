import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const Positionlist = [
  { label: 'Должность', id: 1 },
  { label: 'Личный', id: 2 },
  { label: 'Мероприятия', id: 3 },
  { label: 'Проекты', id: 4 },
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
