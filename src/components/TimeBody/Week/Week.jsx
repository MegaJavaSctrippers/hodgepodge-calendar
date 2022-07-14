import React, { useState } from 'react'
import classes from './Week.module.css'
import timeIcon from '../../../assets/image/time.svg'

const d = new Date()
const d2 = new Date(d)
const d3 = new Date(d2)
const d4 = new Date(d3)
const d5 = new Date(d4)
const d6 = new Date(d5)
d2.setDate(d.getDate() + 1)
d3.setDate(d2.getDate() + 1)
d4.setDate(d3.getDate() + 1)
d5.setDate(d4.getDate() + 1)
d6.setDate(d5.getDate() + 1)

const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

function Week() {
  const [week, setWeek] = useState([
    {
      dayNumber: d.toLocaleDateString('ru-Ru', { day: '2-digit' }),
      dayName: d.toLocaleDateString('ru-Ru', { weekday: 'short' }),
    },
    {
      dayNumber: d2.toLocaleDateString('ru-Ru', { day: '2-digit' }),
      dayName: d2.toLocaleDateString('ru-Ru', { weekday: 'short' }),
    },
    {
      dayNumber: d3.toLocaleDateString('ru-Ru', { day: '2-digit' }),
      dayName: d3.toLocaleDateString('ru-Ru', { weekday: 'short' }),
    },
    {
      dayNumber: d4.toLocaleDateString('ru-Ru', { day: '2-digit' }),
      dayName: d4.toLocaleDateString('ru-Ru', { weekday: 'short' }),
    },
    {
      dayNumber: d5.toLocaleDateString('ru-Ru', { day: '2-digit' }),
      dayName: d5.toLocaleDateString('ru-Ru', { weekday: 'short' }),
    },
    {
      dayNumber: d6.toLocaleDateString('ru-Ru', { day: '2-digit' }),
      dayName: d6.toLocaleDateString('ru-Ru', { weekday: 'short' }),
    },
  ])

  // eslint-disable-next-line no-console
  console.log(week)
  const times = [9, 10, 11, 12, 13, 14, 15, 16]

  return (
    <div className={classes.timeWrapper}>
      <div className={classes.daysWrap}>
        <div className={classes.timeIcon}>
          <img src={timeIcon} alt="time icon" />
        </div>
        <div className={classes.days}>
          {week.map((day) => (
            <div key={day.dayNumber} className={classes.day}>
              <p>{day.dayName}</p>
              <h5>{day.dayNumber}</h5>
            </div>
          ))}
          {/* <div className={classes.day}> */}
          {/*   <p>Пн</p> */}
          {/*   <h5>2</h5> */}
          {/* </div> */}
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
              {[...new Array(6)].map((_, idx) => (
                // eslint-disable-next-line react/no-array-index-key
                <div className={classes.slot} key={idx}>
                  <div className={classes.event} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Week
