import React from 'react'
import classes from './TimeBody.module.css'

import timeIcon from '../../assets/image/time.svg'

function TimeBody() {
  const times = [9, 10, 11, 12, 13, 14, 15, 16]

  return (
    <div className={classes.TimeBody}>
      <div className={classes.daysWrap}>
        <div className={classes.timeIcon}>
          <img src={timeIcon} alt="time icon" />
        </div>
        <div className={classes.days}>
          <div className={classes.day}>
            <p>Пн</p>
            <h5>2</h5>
          </div>
        </div>
      </div>
      <div className={classes.timesWrap}>
        {times.map((time, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={classes.times} key={idx}>
            <div className={classes.time}>
              {time}
              :00
            </div>
            <div className={classes.field} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimeBody
