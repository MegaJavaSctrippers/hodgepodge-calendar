import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import RepeatDays from './RepeatDays/RepeatDays'
import EndItems from './EndItems/EndItems'
import s from './EventRepeat.module.css'

function EventRepeat({ closeFunc }) {
  EventRepeat.propTypes = {
    closeFunc: PropTypes.func.isRequired,
  }

  const [repeat, setRepeat] = useState('день')
  const handleChange = (event) => {
    setRepeat(event.target.value)
  }

  return (
    <div className={s.overlay}>
      <form className={s.event_repeat}>
        <div className={s.container}>
          <p className={s.title}>Повтор события</p>
          <div className={s.subtitle_wrapper}>
            <p className={s.subtitle}>Повторять с интервалом</p>
            <input className={s.item} type="number" min={1} max={100} placeholder="1" />
            <select className={s.item} value={repeat} onChange={handleChange}>
              <option value="day">дней</option>
              <option value="week">недель</option>
              <option value="months">месяцев</option>
              <option value="year">лет</option>
            </select>
          </div>
          <p className={s.subtitle}>Дни повторения</p>
          <RepeatDays />
          <p className={classNames(s.subtitle, s.end)}>Окончание</p>
          <EndItems />
          <input className={classNames(s.item, s.date)} type="date" />
          <div className={s.ready_wrapper}>
            <button className={classNames(s.subtitle, s.cancel)} type="button" onClick={closeFunc}>
              Отмена
            </button>
            <button className={s.ready} type="button">
              Готово
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default EventRepeat
