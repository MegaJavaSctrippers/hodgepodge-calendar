import React from 'react'
import classes from './MyIconButton.module.css'

// eslint-disable-next-line react/prop-types
function MyIconButton({ children, ...props }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={classes.MyIconButton} {...props}>
      {children}
    </button>
  )
}

export default MyIconButton
