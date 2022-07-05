import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import s from './EventRepeatDays.module.css'

function DayOfWeek({ day }) {
  DayOfWeek.propTypes = {
    day: PropTypes.func.isRequired,
  }

  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <checkbox
      className={classNames(s.repeat_day, { [s.active]: isActive })}
      onClick={() => {
        handleClick()
      }}
    >
      {day}
    </checkbox>
  )
}

function EventRepeatDays() {
  const days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС']

  return (
    <div className={s.repeat_days}>
      {days.map((day) => (
        <DayOfWeek day={day} key={day} />
      ))}
    </div>
  )
}

export default EventRepeatDays
