import React from 'react'
import classes from './Button.module.css'

// eslint-disable-next-line react/prop-types
function Button({ children, ...props }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button {...props} className={classes.btn}>
      {children}
    </button>
  )
}

export default Button
