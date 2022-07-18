import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import s from './EditUser.module.css'

export default function EditUser() {
  return (
    <div className={s.wrapper}>
      <div className={s.position}>
        <div className={s.create}>Редактирование:</div>
        <div className={s.create_item}>Отдел разработок, Java разработчик</div>
      </div>
      <div className={s.inputs}>
        <div>
          <p className={s.title}>ФИО пользователя</p>
          <input className={s.input} type="text" value="Асанов Тилек Асанович" />
        </div>
        <div>
          <p className={s.title}>Отдел пользователя</p>
          <input className={s.input} type="text" value="Отдел разработок" />
        </div>
        <div>
          <p className={s.title}>Должность</p>
          <input className={s.input} type="text" value="Java разработчик" />
        </div>
        <div>
          <p className={s.title}>E-mail</p>
          <input className={s.input} type="email" value="ast@gmail.com" />
        </div>
        <button className={s.btn} type="button">
          Сохранить
        </button>
        <ModeEditIcon className={s.icon} color="disabled" />
        <DeleteOutlineIcon className={s.icon} color="primary" />
      </div>
    </div>
  )
}
