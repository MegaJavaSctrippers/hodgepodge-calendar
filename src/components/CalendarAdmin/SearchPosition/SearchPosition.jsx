import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { useDispatch } from 'react-redux'
import { editPosition } from '../../../store/EditPositionSlice'
import s from './SearchPosition.module.css'
import { refreshSearch } from '../../../store/SearchPositionSlice'
import { deletePositionModal } from '../../../store/DeletePositionModalSlice'

export default function SearchPosition() {
  const dispatch = useDispatch()

  const openEditPosition = () => {
    dispatch(editPosition())
    dispatch(refreshSearch())
  }
  const openDeletePositionModal = () => {
    dispatch(deletePositionModal())
  }

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
        <ModeEditIcon className={s.icon} color="primary" onClick={openEditPosition} />
        <DeleteOutlineIcon className={s.icon} color="primary" onClick={openDeletePositionModal} />
      </div>
    </div>
  )
}
