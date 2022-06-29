import React from 'react'
import Logo from '../Logo/Logo'

import DayPicker from '../DayPicker/DayPicker'
import RightBlock from './RightBlock/RightBlock'

import classes from './Header.module.css'

function Header() {
  return (
    <header className={classes.header}>
      <Logo />
      <DayPicker />
      <RightBlock />
    </header>
  )
}

export default Header
