import React from 'react'
import PropTypes from 'prop-types'
import Badge from '@mui/material/Badge'
import ImageAvatar from '../../ImageAvatar/ImageAvatar'
import s from './AvatarRow.module.css'

function AvatarRow({ closeAvatar }) {
  AvatarRow.propTypes = {
    closeAvatar: PropTypes.func.isRequired,
  }

  return (
    <div className={s.participants_wrapper}>
      <Badge
        className={s.participants_badge}
        badgeContent="x"
        color="secondary"
        size="small"
        onClick={closeAvatar}
      >
        <ImageAvatar />
      </Badge>
      <Badge
        className={s.participants_badge}
        badgeContent="x"
        color="secondary"
        size="small"
        onClick={closeAvatar}
      >
        <ImageAvatar />
      </Badge>
      <Badge
        className={s.participants_badge}
        badgeContent="x"
        color="secondary"
        size="small"
        onClick={closeAvatar}
      >
        <ImageAvatar />
      </Badge>
      <Badge
        className={s.participants_badge}
        badgeContent="x"
        color="secondary"
        size="small"
        onClick={closeAvatar}
      >
        <ImageAvatar />
      </Badge>
    </div>
  )
}

export default AvatarRow
