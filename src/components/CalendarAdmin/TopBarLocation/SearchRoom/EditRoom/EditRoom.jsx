import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useDispatch } from 'react-redux'
import s from './EditRoom.module.css'
import { deleteRoomModal } from '../../../../../store/DeleteRoomModalSlice'

export default function EditUser() {
  const dispatch = useDispatch()
  const openDeleteRoomModalFunc = () => {
    dispatch(deleteRoomModal())
  }

  return (
    <div className={s.wrapper}>
      <div className={s.position}>
        <div className={s.create}>Редактирование помещения:</div>
        <div className={s.create_item}>1 этаж, 4 кабинет</div>
      </div>
      <div className={s.inputs}>
        <div>
          <p className={s.title}>Название помещения</p>
          <input className={s.input} type="text" />
        </div>
        <div>
          <p className={s.title}>Вместимость (м2)</p>
          <input className={s.input} type="text" />
        </div>
        <div>
          <p className={s.title}>Должность</p>
          <input className={s.input} type="text" />
        </div>
        <div>
          <p className={s.title}>Описание</p>
          <input className={s.input} type="text" />
        </div>
        <button className={s.btn} type="button">
          Сохранить
        </button>
        <ModeEditIcon className={s.icon} color="disabled" />
        <DeleteOutlineIcon className={s.icon} color="primary" onClick={openDeleteRoomModalFunc} />
        <VisibilityOffIcon className={s.icon} color="primary" />
      </div>
    </div>
  )
}
