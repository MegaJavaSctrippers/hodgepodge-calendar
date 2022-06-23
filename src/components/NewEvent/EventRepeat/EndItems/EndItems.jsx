import React from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

export default function EndItems() {
  return (
    <FormControl
      sx={{
        '& .MuiTypography-root': {
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: 14,
          color: '#2E2E2E',
        },
      }}
    >
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="Никогда"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Никогда" control={<Radio />} label="Никогда" />
        <FormControlLabel value="Дата" control={<Radio />} label="Дата" />
      </RadioGroup>
    </FormControl>
  )
}
