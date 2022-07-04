import React, { useState } from 'react'
import classNames from 'classnames'
import s from './RepeatDays.module.css'

function RepeatDays() {
  const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <div className={s.repeat_days}>
      {days.map((day) => (
        <checkbox
          className={classNames(s.repeat_day, { [s.active]: isActive })}
          onClick={() => {
            handleClick()
          }}
        >
          {day}
        </checkbox>
      ))}
    </div>
  )
}

export default RepeatDays
