import React from 'react'
import s from './NewEvent.module.css'
import down from '../../assets/down.svg'
import Date from './Date/Date'

function NewEvent() {
  return (
    <form className={s.new_event}>
      <div className={s.wrapper}>
        <p className={s.title}>Новое событие</p>
        <p className={s.label}>Название</p>
        <textarea className={s.input} />
        <p className={s.label}>Дата и время</p>
        <div className={s.date_wrapper}>
          <div className={s.date_day}>
            <Date />
            <div className={s.day}>среда</div>
          </div>
          <div className={s.start_time}>время</div>
          <div className={s.hyphen}>-</div>
          <div className={s.end_time}>время</div>
          <div className={s.repeat}>не повторять</div>
        </div>
        <p className={s.label}>Участники(1)</p>
        <div className={s.participants}>Jenny</div>
        <p className={s.label}>Помещение</p>
        <div className={s.dropdown}>
          <img className={s.dropdown_icon} src={down} alt="dropdown icon" />
        </div>
        <div className={s.calendar_permission}>
          <div className={s.calendar}>
            <p className={s.label}>Календарь</p>
            <div className={s.calendar_item}>Рабочий</div>
          </div>
          <div className={s.permission}>
            <p className={s.label}>Разрешение на доступ к мероприятию</p>
            <div className={s.permission_item}>Общедоступное</div>
            <img className={s.down_icon} src={down} alt="dropdown icon" />
          </div>
        </div>
        <button className={s.btn} type="button">
          Сохранить
        </button>
      </div>
    </form>
  )
}

export default NewEvent
