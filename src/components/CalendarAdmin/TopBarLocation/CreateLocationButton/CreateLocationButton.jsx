import React from 'react'
import { useDispatch } from 'react-redux'
import { createRoom } from '../../../../store/CreateRoomSlice'
import s from './CreateLocationButton.module.css'

export default function CreateLocationButton() {
  const dispatch = useDispatch()
  const openCreateRoomFunc = () => {
    dispatch(createRoom())
  }
  return (
    <div>
      <button className={s.btn} type="button" onClick={openCreateRoomFunc}>
        + Создать
      </button>
    </div>
  )
}
