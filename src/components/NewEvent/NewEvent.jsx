import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { FormControlLabel, Switch } from '@mui/material'
import s from './NewEvent.module.css'
import down from '../../assets/icons/down.svg'
import Date from './Date/Date'
import DayOfWeek from './DayOfWeek/DayOfWeek'
import close from '../../assets/icons/closeIcon.png'
import Time from './Time/Time'

function NewEvent() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={s.overlay}>
        <form className={s.new_event}>
          <div className={s.container}>
            <p className={s.title}>Новое событие</p>
            <img className={s.close} src={close} alt="close icon" />
            <p className={s.label}>Название</p>
            <textarea className={s.input} />
            <p className={s.attachment}>Прикрепить файл</p>
            <div className={s.date_title}>
              <p className={s.label}>Дата и время</p>
              <FormControlLabel control={<Switch />} label="Весь день" />
            </div>
            <div className={s.date_wrapper}>
              <div className={s.date_day}>
                <Date />
                <DayOfWeek />
              </div>
              <Time />
              {/* <div className={s.hyphen}>-</div> */}
              <Time />
            </div>
            <div className={s.repeat_wrapper}>
              <div className={s.repeat}>не повторять</div>
              <img className={s.repeat_dropdown} src={down} alt="dropdown icon" />
              <div className={s.reminder}>напоминание 1</div>
              <img className={s.reminder1_dropdown} src={down} alt="dropdown icon" />
              <div className={s.reminder}>напоминание 2</div>
              <img className={s.reminder2_dropdown} src={down} alt="dropdown icon" />
            </div>
            <div className={s.user_room_wrapper}>
              <div className={s.user_wrapper}>
                <p className={s.label}>Участники(1)</p>
                <div className={s.participants}>Jenny</div>
              </div>
              <div className={s.room_wrapper}>
                <p className={s.label}>Помещение</p>
                <div className={s.room}>
                  <img className={s.room_dropdown} src={down} alt="dropdown icon" />
                </div>
              </div>
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
      </div>
    </LocalizationProvider>
  )
}

export default NewEvent
