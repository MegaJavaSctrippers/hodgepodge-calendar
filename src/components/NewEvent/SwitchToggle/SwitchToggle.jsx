import React, { useState } from 'react'
import { FormControlLabel, Switch } from '@mui/material'

export default function SwitchToggle() {
  const [checked, setChecked] = useState(false)
  const handleChange = () => {
    setChecked(!checked)
  }
  return (
    <FormControlLabel
      control={<Switch onChange={handleChange} />}
      label="Рабочий день"
      sx={{
        marginRight: 0,
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
