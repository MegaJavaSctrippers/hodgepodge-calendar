import React, { useEffect, useState } from 'react'
import { reg } from '../../helpers/regexp'
import classes from './Form.module.css'

function Form() {
  const [register, setRegister] = useState({
    email: '',
    password: '',
    password2: '',
  })
  const [emailEmpty, setEmailEmpty] = useState(false)
  const [passwordEmpty, setPasswordEmpty] = useState(false)
  const [passwordEmptyRepeat, setPasswordEmptyRepeat] = useState(false)
  const [validForm, setValidForm] = useState(false)
  const [emailError, setEmailError] = useState('Email не может быть пустым')
  const [passError, setPassError] = useState('Пароль не может быть пустым')
  const [repeatPass, setRepeatPass] = useState('Пароль должен совпадать')

  const changeInputRegister = (e) => {
    e.persist()
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    })
    if (e.target.name === 'email') {
      if (!reg.email.test(String(e.target.value).toLowerCase())) {
        setEmailError('Некорректный емайл')
      } else {
        setEmailError('')
      }
    }
    if (e.target.name === 'password') {
      if (!reg.password.test(String(e.target.value).toLowerCase())) {
        setPassError(
          'Пароль должен состоять хотя бы из 6 строк и содержать минимум одну цифру и один символ',
        )
      } else {
        setPassError('')
      }
    }
  }

  const blurHandler = (e) => {
    // eslint-disable-next-line default-case
    switch (e.target.name) {
      case 'email':
        setEmailEmpty(true)
        break
      case 'password':
        setPasswordEmpty(true)
        break
      case 'password2':
        setPasswordEmptyRepeat(true)
    }
  }

  useEffect(() => {
    if (emailError || passError || register.password !== register.password2) {
      setValidForm(false)
      setRepeatPass('Пароль не совподает')
    } else {
      setValidForm(true)
      setRepeatPass('')
    }
  }, [register.email, register.password, register.password2])

  return (
    <form className={classes.form}>
      <div className={classes.formBlock}>
        <p>Почта</p>
        <input
          onBlur={(e) => blurHandler(e)}
          onChange={(e) => changeInputRegister(e)}
          type="text"
          name="email"
          value={register.email}
        />
        {emailEmpty ? <div>{emailError}</div> : ''}
      </div>
      <div className={classes.formBlock}>
        <p>Пароль</p>
        <input
          onBlur={(e) => blurHandler(e)}
          onChange={changeInputRegister}
          type="password"
          name="password"
          value={register.password}
        />
        {passwordEmpty ? <div>{passError}</div> : ''}
      </div>
      <div className={classes.formBlock}>
        <p>Повторите пароль</p>
        <input
          onBlur={(e) => blurHandler(e)}
          onChange={changeInputRegister}
          type="password"
          name="password2"
          value={register.password2}
        />
        {passwordEmptyRepeat ? <div>{repeatPass}</div> : ''}
      </div>
      <button disabled={!validForm} type="submit" className={classes.saveBtn}>
        Сохранить
      </button>
    </form>
  )
}

export default Form
