import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import EventRepeat from '../EventRepeat/EventRepeat'

const repeatList = [
  { label: 'Не повторять', id: 1 },
  { label: 'Ежедневно', id: 2 },
  { label: 'Еженедельно', id: 3 },
  { label: 'Ежемесячно', id: 4 },
  { label: 'Ежегодно', id: 5 },
  { label: 'Настроить...', id: 6 },
]

export default function Repeat() {
  const [value, setValue] = useState(repeatList[0])
  const [open, setOpen] = useState(true)
  const closeFunc = () => {
    setOpen(!open)
  }

  return (
    <div>
      <Autocomplete
        disablePortal
        id="repeat"
        options={repeatList}
        sx={{ width: 200 }}
        renderInput={(params) => <TextField {...params} label="Повтор" />}
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      />
      {value.id === repeatList[repeatList.length - 1].id && open && (
        <EventRepeat closeFunc={closeFunc} />
      )}
    </div>
  )
}
