import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import PropTypes from 'prop-types'
import s from './NewEvent.module.css'
import DateNew from './Date/DateNew'
import StartTime from './StartTime/StartTime'
import EndTime from './EndTime/EndTime'
import Repeat from './Repeat/Repeat'
import Reminder from './Reminder/Reminder'
import Reminder2 from './Reminder2/Reminder2'
import Room from './Room/Room'
import Permission from './Permission/Permission'
import CalenderType from './CalenderType/CalenderType'
import ImageAvatar from './ImageAvatar/ImageAvatar'
import SwitchToggle from './SwitchToggle/SwitchToggle'
import AddParticipant from './AddParticipant/AddParticipant'

function NewEvent({ toggleModalNewEvent }) {
  NewEvent.propTypes = {
    toggleModalNewEvent: PropTypes.func.isRequired,
  }

  return (
    <div className={s.overlay}>
      <form className={s.new_event}>
        <div className={s.container}>
          <p className={s.title}>Новое событие</p>
          <CloseIcon className={s.close} onClick={toggleModalNewEvent} />
          <p className={s.label}>Название</p>
          <textarea className={s.input} />
          <input className={s.attachment} type="file" name="file" multiple />
          <div className={s.date_title}>
            <div>Дата и время</div>
            {/* <SwitchToggle /> */}
          </div>
          <div className={s.date_wrapper}>
            <DateNew />
            <StartTime />
            <EndTime />
          </div>
          <div className={s.repeat_wrapper}>
            <Repeat />
            <Reminder />
            <Reminder2 />
          </div>
          <div className={s.user_room_wrapper}>
            <div className={s.user_wrapper}>
              <div className={s.user_title}>
                <p className={s.label}>Участники(1)</p>
                <AddParticipant />
              </div>
              <div className={s.participants}>
                <ImageAvatar />
                <div>
                  <p>Jenny Wilson</p>
                  <p className={s.author}>автор</p>
                </div>
              </div>
            </div>
            <div className={s.room_wrapper}>
              <p className={s.label}>Помещение</p>
              <Room />
            </div>
          </div>
          <div className={s.calendar_permission}>
            <div className={s.calendar}>
              <p className={s.label}>Тип встречи</p>
              <CalenderType />
            </div>
            <div className={s.permission}>
              <p className={s.label}>Разрешение на доступ к мероприятию</p>
              <Permission />
            </div>
          </div>
          <button className={s.btn} type="button">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewEvent
