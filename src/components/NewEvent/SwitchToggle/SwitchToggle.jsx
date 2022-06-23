import React from 'react'
import { FormControlLabel, Switch } from '@mui/material'

export default function SwitchToggle() {
  return (
    <FormControlLabel
      control={<Switch />}
      label="Рабочий день"
      sx={{
        '& .MuiTypography-root': {
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 300,
          fontSize: 14,
          color: 'rgba(46, 46, 46, 0.5)',
        },
      }}
    />
  )
}
