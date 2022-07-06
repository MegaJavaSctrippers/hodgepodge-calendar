import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import s from './AdminEntry.module.css'
import admin from '../../assets/icons/Group 239.png'
import blue from '../../assets/icons/Vector.png'

export default function AdminEntry() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset()
  }

  return (
    <form className={s.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.admin_entry}>
        <div className={s.content}>
          <p className={s.entry}>Вход</p>
          <p className={s.label}>Логин</p>
          <input
            className={s.input}
            type="text"
            {...register('login', {
              required: 'Поле обязательно к заполнению',
            })}
          />
          <div className={s.error}>
            {errors?.login && <p>{errors?.login?.message || 'Error!'}</p>}
          </div>
          <p className={s.label}>Пароль</p>
          <input
            className={s.input}
            type="password"
            {...register('password', {
              required: 'Поле обязательно к заполнению',
            })}
          />
          <div className={s.error}>
            {errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}
          </div>
          <Link to="/forgot-password" className={s.forgot_password}>
            Забыли пароль?
          </Link>
          <button className={s.btn} type="submit">
            войти
          </button>
          {/* <Link to="/calendar-admin" className={s.btn} onClick={handleSubmit(onClick)}>
            войти
          </Link> */}
        </div>
      </div>
      <div className={s.image_block}>
        <img className={s.blue} src={blue} alt="blue_image" />
        <img className={s.admin_image} src={admin} alt="admin_image" />
        <p className={s.title}>Calendar Admin</p>
      </div>
    </form>
  )
}
