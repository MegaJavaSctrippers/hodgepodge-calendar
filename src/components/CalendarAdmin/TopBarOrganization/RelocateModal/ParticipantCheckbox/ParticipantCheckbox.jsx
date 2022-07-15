import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

export default function ParticipantCheckbox() {
  const [checked, setChecked] = useState(false)
  const relocateChecked = () => {
    setChecked(!checked)
  }
  return <FormControlLabel control={<Checkbox checked={checked} onChange={relocateChecked} />} />
}
