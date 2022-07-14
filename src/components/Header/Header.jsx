import React from 'react'
import Logo from '../Logo/Logo'

import DayPicker from '../DayPicker/DayPicker'
import RightBlock from './RightBlock/RightBlock'

import classes from './Header.module.css'

function Header(props) {
  return (
    <header className={classes.header}>
      <Logo />
      {/* eslint-disable-next-line react/prop-types,max-len */}
      <DayPicker
        // eslint-disable-next-line react/prop-types
        selectedMode={props.selectedMode}
        // eslint-disable-next-line react/prop-types
        setSelectedMode={props.setSelectedMode}
      />
      <RightBlock />
    </header>
  )
}

export default Header
