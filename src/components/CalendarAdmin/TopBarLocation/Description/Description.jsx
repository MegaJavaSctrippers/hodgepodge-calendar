import React from 'react'
import s from './Description.module.css'

export default function Description() {
  return (
    <div>
      <input className={s.input} type="text" placeholder="Описание" />
    </div>
  )
}
