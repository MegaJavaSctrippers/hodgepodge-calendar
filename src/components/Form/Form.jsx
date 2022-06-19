import React, { useState } from 'react'
import classes from './Form.module.css'

function Form() {
  const [register, setRegister] = useState({
    email: '',
    password: '',
    password2: '',
  })

  return (
    <form className={classes.form}>
      <div className={classes.formBlock}>
        <p>Почта</p>
        <input type="text" />
      </div>
      <div className={classes.formBlock}>
        <p>Пароль</p>
        <input type="text" />
      </div>
      <div className={classes.formBlock}>
        <p>Повторите пароль</p>
        <input type="text" />
      </div>
      <button type="button" className={classes.saveBtn}>
        Сохранить
      </button>
    </form>
  )
}

export default Form
