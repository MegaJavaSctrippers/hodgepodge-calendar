import React, { useState } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import s from './DayOfWeek.module.css'

function DayOfWeek({ day }) {
  DayOfWeek.propTypes = {
    day: PropTypes.func.isRequired,
  }

  const [isActive, setIsActive] = useState(false)
  const setActiveStyle = () => {
    setIsActive(!isActive)
  }

  return (
    <checkbox
      className={classNames(s.repeat_day, { [s.active]: isActive })}
      onClick={setActiveStyle}
    >
      {day}
    </checkbox>
  )
}

export default DayOfWeek
