import React from 'react'
import classNames from 'classnames'
import s from './CreateRoom.module.css'

export default function CreateRoom() {
  return (
    <div className={s.wrapper}>
      <div className={s.position}>
        <div className={s.create}>Создать:</div>
        <p className={s.create_item}>Помещение</p>
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
          <p className={s.title}>Описание</p>
          <input className={classNames(s.input, s.description)} type="text" />
        </div>
        <button className={s.btn} type="button">
          Сохранить
        </button>
      </div>
    </div>
  )
}
