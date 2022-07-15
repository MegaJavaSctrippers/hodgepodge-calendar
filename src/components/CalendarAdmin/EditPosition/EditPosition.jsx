import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { useDispatch } from 'react-redux'
import s from './EditPosition.module.css'
import { deletePositionModal } from '../../../store/DeletePositionModalSlice'

export default function EditPosition() {
  const dispatch = useDispatch()
  const openDeletePositionModal = () => {
    dispatch(deletePositionModal())
  }

  return (
    <div className={s.wrapper}>
      <div className={s.position}>
        <div className={s.create}>Редактирование:</div>
        <div className={s.create_item}>UX/UI дизайнер</div>
      </div>
      <div className={s.inputs}>
        <div>
          <p className={s.title}>Название должности</p>
          <input className={s.input} type="text" />
        </div>
        <button className={s.btn} type="button">
          Сохранить
        </button>
        <ModeEditIcon className={s.icon} color="disabled" />
        <DeleteOutlineIcon className={s.icon} color="primary" onClick={openDeletePositionModal} />
      </div>
    </div>
  )
}
