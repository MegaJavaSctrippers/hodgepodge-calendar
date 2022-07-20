import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch } from 'react-redux'
import s from './DeleteRoomModal.module.css'
import { closeDeleteRoomModal } from '../../../../../store/DeleteRoomModalSlice'

export default function DeleteUserModal() {
  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(closeDeleteRoomModal())
  }

  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <p className={s.title}>Удалить помещение `1 этаж, 4 кабинет`?</p>
        <CloseIcon className={s.close} onClick={closeModal} />
        <div className={s.btnWrapper}>
          <button className={s.btnNo} type="button" onClick={closeModal}>
            Нет
          </button>
          <button className={s.btnYes} type="button">
            Да
          </button>
        </div>
      </div>
    </div>
  )
}
