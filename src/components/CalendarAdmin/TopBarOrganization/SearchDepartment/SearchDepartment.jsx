import React from 'react'
import { useDispatch } from 'react-redux'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import s from './SearchDepartment.module.css'
import { deleteDepartmentModal } from '../../../../store/DeleteDepartmentModalSlice'

export default function SearchDepartment() {
  const dispatch = useDispatch()

  const openDeleteDepartmentModal = () => {
    dispatch(deleteDepartmentModal())
  }

  return (
    <div className={s.wrapper}>
      <div className={s.position}>
        <div className={s.create}>Поиск:</div>
        <div className={s.create_item}>Отдел безопасности</div>
      </div>
      <div className={s.inputs}>
        <div>
          <p className={s.title}>Название отдела</p>
          <p className={s.input}>Отдел безопасности</p>
        </div>
        <div>
          <p className={s.title}>Руководитель отдела</p>
          <p className={s.input}>Асанов Тилек Асанович</p>
        </div>
        <ModeEditIcon className={s.icon} color="primary" />
        <DeleteOutlineIcon className={s.icon} color="primary" onClick={openDeleteDepartmentModal} />
      </div>
    </div>
  )
}
