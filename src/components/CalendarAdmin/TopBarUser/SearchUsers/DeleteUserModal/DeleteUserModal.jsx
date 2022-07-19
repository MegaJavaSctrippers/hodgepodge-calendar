import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch } from 'react-redux'
import s from './DeleteUserModal.module.css'
import { closeDeleteUserModal } from '../../../../../store/DeleteUserModalSlice'

export default function DeleteUserModal() {
  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(closeDeleteUserModal())
  }

  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <p className={s.title}>
          Удалить пользователя `Асанов Тилек Асанович` из отдела Разработок?
        </p>
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
