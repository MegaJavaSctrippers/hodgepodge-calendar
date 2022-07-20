import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import VisibilityIcon from '@mui/icons-material/Visibility'
import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import s from './SearchRoom.module.css'
import { editRoom } from '../../../../store/EditRoomSlice'
import { refreshSearchRoom } from '../../../../store/SearchRoomSlice'
import { deleteRoomModal } from '../../../../store/DeleteRoomModalSlice'
import { invisibleRoom, visibleRoom } from '../../../../store/InvisibleRoomSlice'

export default function SearchRoom() {
  const makeInvisibleRoom = useSelector((state) => state.invisibleRoom.invisibleRoom)
  const dispatch = useDispatch()

  const openEditRoomFunc = () => {
    dispatch(editRoom())
    dispatch(refreshSearchRoom())
  }
  const openDeleteRoomModalFunc = () => {
    dispatch(deleteRoomModal())
  }
  const invisibleRoomFunc = () => {
    dispatch(invisibleRoom())
  }
  const visibleRoomFunc = () => {
    dispatch(visibleRoom())
  }

  return (
    <div className={s.wrapper}>
      <div className={s.position}>
        <div className={s.create}>Поиск:</div>
        <div className={s.create_item}>1 этаж, 4 кабинет</div>
        {makeInvisibleRoom && (
          <p className={classNames(s.create_item, s.deact)}>Помещение деактивировано</p>
        )}
      </div>
      <div className={s.inputs}>
        <div>
          <p className={s.title}>Название помещения</p>
          <p className={s.input}>1 этаж, 4 кабинет</p>
        </div>
        <div>
          <p className={s.title}>Вместимость (м2)</p>
          <p className={s.input}>12</p>
        </div>
        <div>
          <p className={s.title}>Описание</p>
          <p className={classNames(s.input, s.description)}>Кондиционер, диван, стулья</p>
        </div>
        <ModeEditIcon className={s.icon} color="primary" onClick={openEditRoomFunc} />
        <DeleteOutlineIcon className={s.icon} color="primary" onClick={openDeleteRoomModalFunc} />
        <VisibilityOffIcon className={s.icon} color="primary" onClick={invisibleRoomFunc} />
        <VisibilityIcon className={s.icon} color="primary" onClick={visibleRoomFunc} />
      </div>
    </div>
  )
}
