import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch } from 'react-redux'
import s from './DeleteDepartmentModal.module.css'
import { closeDeleteDepartmentModal } from '../../../../store/DeleteDepartmentModalSlice'

export default function DeleteDepartmentModal() {
  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(closeDeleteDepartmentModal())
  }

  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <p className={s.title}>Выберите метод удаления отдела “Безопасности”:</p>
        <CloseIcon className={s.close} onClick={closeModal} />
        <div className={s.checkbox}>
          <label htmlFor="relocate">
            <input className={s.input} type="checkbox" aria-label="relocate" />
            Удалить отдел, а участников переместить в другой отдел
          </label>
          <label htmlFor="delete">
            <input className={s.input} type="checkbox" aria-label="delete" />
            Удалить отдел и участников полностью
          </label>
        </div>
        <button className={s.btn} type="button">
          Удалить
        </button>
      </div>
    </div>
  )
}
