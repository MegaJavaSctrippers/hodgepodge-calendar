import React from 'react'
import logo from '../../assets/image/logo.svg'

import classes from './Logo.module.css'

function Logo() {
  return (
    <a className={classes.logo} href="/">
      <img src={logo} alt="calendar logo" />
      Calendar
    </a>
  )
}

export default Logo
