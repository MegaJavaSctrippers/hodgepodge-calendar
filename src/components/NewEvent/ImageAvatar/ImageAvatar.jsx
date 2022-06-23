import React from 'react'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Jenny from '../../../assets/img/Jenny.jpg'

export default function ImageAvatar() {
  return (
    <Stack>
      <Avatar alt="Jenny" src={Jenny} sx={{ width: 30, height: 30 }} />
    </Stack>
  )
}
