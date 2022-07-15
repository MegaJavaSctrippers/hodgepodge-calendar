import React from 'react'
import CheckIcon from '@mui/icons-material/Check'
import s from './RelocateDepartmentNotification.module.css'

export default function DeletefullDepartmentNotification() {
  return (
    <div className={s.notification}>
      <CheckIcon className={s.checkIcon} />
      Отдел удален, а участники перемещены
    </div>
  )
}
