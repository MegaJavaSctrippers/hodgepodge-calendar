import React from 'react'
import downArrowSvg from '../../assets/image/downArrow.svg'
import classes from './DayPicker.module.css'
import HeaderDate from '../HeaderDate/HeaderDate'

function DayPicker() {
  return (
    <div className={classes.dayPicker}>
      {/* eslint-disable-next-line react/button-has-type */}
      <button className={`${classes.selectDay} ${classes.btn}`}>Сегодня</button>
      {/* eslint-disable-next-line react/button-has-type */}
      <button className={`${classes.selectWeek} ${classes.btn}`}>
        Неделя
        <img src={downArrowSvg} alt="downArrow" />
      </button>
      <HeaderDate />
    </div>
  )
}

export default DayPicker
