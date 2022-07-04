import React from 'react'
import classes from './Label.module.css'

import plusIcon from '../../assets/image/plus.svg'

function Label() {
  return (
    <div className={classes.labels}>
      <div className={classes.myLabels}>
        <span>Мои метки</span>
        {/* eslint-disable-next-line react/button-has-type */}
        <button>
          <img src={plusIcon} alt="plus" />
        </button>
      </div>
      <ul className={classes.labelsList}>
        <li className={classes.labelsItem}>
          <span className={classes.color} />
          Личный
        </li>
        <li className={classes.labelsItem}>
          <span className={classes.color} />
          Рабочий
        </li>
        <li className={classes.labelsItem}>
          <span className={classes.color} />
          Мероприятия
        </li>
        <li className={classes.labelsItem}>
          <span className={classes.color} />
          Проекты
        </li>
        <li className={classes.labelsItem}>
          <span className={classes.color} />
          Кабинет
        </li>
      </ul>
    </div>
  )
}

export default Label
