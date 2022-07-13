import React, { useState } from 'react'
import s from './InviteButton.module.css'

export default function InviteButton() {
  return (
    <div>
      <button className={s.btn} type="button">
        + Пригласить
      </button>
    </div>
  )
}
