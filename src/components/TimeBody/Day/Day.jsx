import React from 'react'
import classes from '../TimeBody.module.css'
import timeIcon from '../../../assets/image/time.svg'

function Day() {
  const times = [9, 10, 11, 12, 13, 14, 15, 16]

  return (
    <div className={classes.timeWrapper}>
      <div className={classes.daysWrap}>
        <div className={classes.timeIcon}>
          <img src={timeIcon} alt="time icon" />
        </div>
        <div className={classes.days}>
          <div className={classes.day}>
            <p>{new Date().toLocaleDateString('ru-RU', { weekday: 'short' })}</p>
            <h5>{new Date().toLocaleDateString('ru-RU', { day: '2-digit' })}</h5>
          </div>
        </div>
      </div>
      <div>
        {times.map((time, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={classes.times} key={idx}>
            <div className={classes.time}>
              {time}
              :00
            </div>
            <div className={classes.slots}>
              <div className={classes.slot}>
                <div className={classes.event} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Day
