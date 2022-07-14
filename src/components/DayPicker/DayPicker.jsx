import React, { useState } from 'react'
import downArrowSvg from '../../assets/image/downArrow.svg'
import classes from './DayPicker.module.css'
import HeaderDate from '../HeaderDate/HeaderDate'

// eslint-disable-next-line react/prop-types
function DayPicker(props) {
  const [open, setOpen] = useState(false)

  const modes = [
    { id: 1, name: 'День' },
    { id: 2, name: 'Неделя' },
    { id: 3, name: 'Месяц' },
  ]

  const changeMode = (id) => {
    // eslint-disable-next-line react/prop-types
    props.setSelectedMode(modes.find((mode) => mode.id === id))
    setOpen(false)
  }

  return (
    <div className={classes.dayPicker}>
      {/* eslint-disable-next-line react/button-has-type */}
      <button className={`${classes.selectDay} ${classes.btn}`}>Сегодня</button>
      <div className={classes.modes}>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={() => setOpen(!open)} className={`${classes.selectWeek} ${classes.btn}`}>
          {/* eslint-disable-next-line react/prop-types */}
          {props.selectedMode.name}
          <img src={downArrowSvg} alt="downArrow" />
        </button>
        {open && (
          <div className={classes.modePopup}>
            <div>
              {/* eslint-disable-next-line react/prop-types */}
              {modes.map((mode) => (
                // eslint-disable-next-line max-len
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
                <span onClick={() => changeMode(mode.id)} key={mode.id}>
                  {mode.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* <HeaderDate /> */}
    </div>
  )
}

export default DayPicker
