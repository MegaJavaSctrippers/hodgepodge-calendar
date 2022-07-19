import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import classNames from 'classnames'
import s from './SearchRoom.module.css'

export default function SearchRoom() {
  return (
    <div className={s.wrapper}>
      <div className={s.position}>
        <div className={s.create}>Поиск:</div>
        <div className={s.create_item}>1 этаж, 4 кабинет</div>
      </div>
      <div className={s.inputs}>
        <div>
          <p className={s.title}>Название помещения</p>
          <p className={s.input}>1 этаж, 4 кабинет</p>
        </div>
        <div>
          <p className={s.title}>Вместимость (м2)</p>
          <p className={s.input}>12</p>
        </div>
        <div>
          <p className={s.title}>Описание</p>
          <p className={classNames(s.input, s.description)}>Кондиционер, диван, стулья</p>
        </div>
        <ModeEditIcon className={s.icon} color="primary" />
        <DeleteOutlineIcon className={s.icon} color="primary" />
        <VisibilityOffIcon className={s.icon} color="primary" />
      </div>
    </div>
  )
}
