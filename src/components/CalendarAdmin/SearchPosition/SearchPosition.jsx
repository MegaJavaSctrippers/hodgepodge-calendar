import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import s from './SearchPosition.module.css'

export default function SearchPosition() {
  return (
    <div className={s.wrapper}>
      <div className={s.position}>
        <div className={s.create}>Поиск:</div>
        <div className={s.create_item}>UX/UI дизайнер</div>
      </div>
      <div className={s.inputs}>
        <div>
          <p className={s.title}>Название должности</p>
          <input className={s.input} type="text" />
        </div>
        <div>
          <p className={s.title}>Отдел</p>
          <input className={s.input} type="text" />
        </div>
        <div>
          <p className={s.title}>Организация</p>
          <input className={s.input} type="text" />
        </div>
        <ModeEditIcon className={s.icon} color="primary" />
        <DeleteOutlineIcon className={s.icon} color="primary" />
      </div>
    </div>
  )
}
