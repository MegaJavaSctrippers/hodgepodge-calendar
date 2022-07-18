import React from 'react'
import s from './InviteUser.module.css'

export default function InviteUser() {
  return (
    <div className={s.wrapper}>
      <div className={s.position}>
        <div className={s.create}>Пригласить:</div>
        <div className={s.create_item}>Пользователя</div>
      </div>
      <div className={s.inputs}>
        <div>
          <p className={s.title}>Email пользователя</p>
          <input className={s.input} type="email" />
        </div>
        <button className={s.btn} type="button">
          Пригласить
        </button>
      </div>
    </div>
  )
}
