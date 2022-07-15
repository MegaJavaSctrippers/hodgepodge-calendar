import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import s from './DepartmentList.module.css'

export default function DepartmentList() {
  const departmentList = [
    { label: 'Отдел разработок', id: 1 },
    { label: 'Отдел безопасности', id: 2 },
    { label: 'Отдел УЧР', id: 3 },
    { label: 'Отдел обслуживания', id: 4 },
  ]

  return (
    <Autocomplete
      className={s.dropdown}
      disablePortal
      id="departmentList"
      options={departmentList}
      sx={{
        width: 216,
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 14,
        lineheight: 17,
      }}
      renderInput={(params) => <TextField {...params} label="Отдел" size="small" />}
    />
  )
}
