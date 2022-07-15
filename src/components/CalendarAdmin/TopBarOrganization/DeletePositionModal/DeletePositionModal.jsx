import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch } from 'react-redux'
import s from './DeletePositionModal.module.css'
import { closeDeletePositionModal } from '../../../../store/DeletePositionModalSlice'

export default function DeletePositionModal() {
  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(closeDeletePositionModal())
  }

  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <p className={s.title}>Удалить должность “UX/UI дизайнер” из отдела Разработок?</p>
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
