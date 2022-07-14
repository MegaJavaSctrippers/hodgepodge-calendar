import React from 'react'
import classes from './TimeBody.module.css'

import Day from './Day/Day'
import Week from './Week/Week'

function TimeBody(props) {
  // eslint-disable-next-line react/prop-types
  if (props.selectedMode.name === 'День') {
    return (
      <div className={classes.TimeBody}>
        <Day />
      </div>
    )
  }
  // eslint-disable-next-line react/prop-types
  if (props.selectedMode.name === 'Неделя') {
    return (
      <div className={classes.TimeBody}>
        <Week />
      </div>
    )
  }
}

export default TimeBody
