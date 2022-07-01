import React from 'react'
import { Link } from 'react-router-dom'
import s from './AdminEntry.module.css'
import admin from '../../assets/icons/Group 239.png'
import blue from '../../assets/icons/Vector.png'

export default function AdminEntry() {
  return (
    <div className={s.wrapper}>
      <div className={s.admin_entry}>
        <div className={s.content}>
          <p className={s.entry}>Вход</p>
          <p className={s.label}>Логин</p>
          <input className={s.input} type="text" />
          <p className={s.label}>Пароль</p>
          <input className={s.input} type="password" />
          <Link to="/forgot-password" className={s.forgot_password}>
            Забыли пароль?
          </Link>
          <Link to="/calendar-admin" className={s.btn} type="button">
            войти
          </Link>
        </div>
      </div>
      <div className={s.image_block}>
        <img className={s.blue} src={blue} alt="blue_image" />
        <img className={s.admin_image} src={admin} alt="admin_image" />
        <p className={s.title}>Calendar Admin</p>
      </div>
    </div>
  )
}
