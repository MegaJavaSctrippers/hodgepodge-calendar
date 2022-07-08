import React from 'react'
import s from './CreatePosition.module.css'

export default function CreatePosition() {
  return (
    <div className={s.wrapper}>
      <div className={s.position}>
        <div className={s.create}>Создать:</div>
        <div className={s.create_item}>Должность</div>
      </div>
      <div className={s.inputs}>
        <div>
          <p className={s.title}>Название должности</p>
          <input className={s.input} type="text" />
        </div>
        <div>
          <p className={s.title}>Отдел</p>
          <input className={s.input} type="text" />
        </div>
        <button className={s.btn} type="button">
          Сохранить
        </button>
      </div>
    </div>
  )
}
