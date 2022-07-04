import React from 'react'
import classes from './Register.module.css'
import logo from '../../assets/image/calendar_logo.svg'
import Form from '../Form/Form'

function Register() {
  return (
    <div className={classes.wrap}>
      <div className={classes.formWrap}>
        <div className={classes.formBlock}>
          <h2>Добро пожаловать!</h2>
          <Form />
        </div>
      </div>
      <div className={classes.bannerWrap}>
        <div className={classes.bannerBlock}>
          <h2>Calendar</h2>
          <img src={logo} alt="calendar" />
        </div>
      </div>
    </div>
  )
}

export default Register
