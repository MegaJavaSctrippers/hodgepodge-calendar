import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch } from 'react-redux'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import classNames from 'classnames'
import s from './DeleteDepartmentModal.module.css'
import { closeDeleteDepartmentModal } from '../../../../store/DeleteDepartmentModalSlice'
import { deletefullDepNotification } from '../../../../store/DeletefullDepNotificationSlice'
import { refreshSearchDepartment } from '../../../../store/SearchDepartmentSlice'
import { openRelocateModal } from '../../../../store/RelocateModalSlice'

export default function DeleteDepartmentModal() {
  const dispatch = useDispatch()
  const [relocate, setRelocate] = useState(false)
  const [deletefull, setDeletefull] = useState(false)

  const relocateMethod = () => {
    setRelocate(!relocate)
  }
  const deletefullMethod = () => {
    setDeletefull(!deletefull)
  }

  const closeModal = () => {
    dispatch(closeDeleteDepartmentModal())
  }

  const deleteDepartment = () => {
    dispatch(closeDeleteDepartmentModal())
    if (deletefull) {
      dispatch(deletefullDepNotification())
      dispatch(refreshSearchDepartment())
    }
    if (relocate) {
      dispatch(openRelocateModal())
    }
  }

  return (
    <div>
      <div className={s.overlay}>
        <div className={s.modal}>
          <p className={s.title}>Выберите метод удаления отдела “Безопасности”:</p>
          <CloseIcon className={s.close} onClick={closeModal} />
          <FormGroup className={s.checkbox}>
            <FormControlLabel
              control={<Checkbox checked={relocate} onChange={relocateMethod} name="relocate" />}
              label="Удалить отдел, а участников переместить в другой отдел"
            />
            <FormControlLabel
              control={
                <Checkbox checked={deletefull} onChange={deletefullMethod} name="deletefull" />
              }
              label="Удалить отдел и участников полностью"
            />
          </FormGroup>
          <button
            className={classNames(s.btn, { [s.active]: relocate }, { [s.active]: deletefull })}
            type="button"
            onClick={deleteDepartment}
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  )
}
