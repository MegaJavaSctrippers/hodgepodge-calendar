import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import EventRepeatDays from './EventRepeatDays/EventRepeatDays'
import EndOfRepeat from './EndOfRepeat/EndOfRepeat'
import s from './EventRepeat.module.css'

function EventRepeat({ close }) {
  EventRepeat.propTypes = {
    close: PropTypes.func.isRequired,
  }

  const [repeat, setRepeat] = useState('день')
  const pickDay = (event) => {
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
            <select className={s.item} value={repeat} onChange={pickDay}>
              <option value="day">дней</option>
              <option value="week">недель</option>
              <option value="months">месяцев</option>
              <option value="year">лет</option>
            </select>
          </div>
          <p className={s.subtitle}>Дни повторения</p>
          <EventRepeatDays />
          <p className={classNames(s.subtitle, s.end)}>Окончание</p>
          <EndOfRepeat />
          <input className={classNames(s.item, s.date)} type="date" />
          <div className={s.ready_wrapper}>
            <button className={classNames(s.subtitle, s.cancel)} type="button" onClick={close}>
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
