import React from 'react'
import MyIconButton from '../../UI/MyIconButton/MyIconButton'

import searchIcon from '../../../assets/image/searchIcon.svg'
import notificationIcon from '../../../assets/image/notif.svg'
import user from '../../../assets/image/user.svg'

import classes from './RightBlock.module.css'

function RightBlock() {
  return (
    <div className={classes.RightBlock}>
      <MyIconButton style={{ marginRight: '8px' }}>
        <img src={searchIcon} alt="Search Icon" />
      </MyIconButton>
      <MyIconButton style={{ marginRight: '16px' }}>
        <img src={notificationIcon} alt="Notification Icon" />
      </MyIconButton>
      {/* eslint-disable-next-line react/button-has-type */}
      <button className={classes.user}>
        <img style={{ width: '100%', height: '100%' }} src={user} alt="user" />
      </button>
    </div>
  )
}

export default RightBlock
