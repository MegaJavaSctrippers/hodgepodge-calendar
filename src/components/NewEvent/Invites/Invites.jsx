import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'
import s from './Invites.module.css'
import Invite from './Invite/Invite'
import AvatarRow from './AvatarRow/AvatarRow'

function Invites({ toggleInvites }) {
  Invites.propTypes = {
    toggleInvites: PropTypes.func.isRequired,
  }

  const [open, setOpen] = useState(true)
  const closeAvatar = () => {
    setOpen(!open)
  }

  const [searchValue, setSearchValue] = useState('')

  const inputRef = useRef()

  const onClickClear = () => {
    setSearchValue('')
    inputRef.current.focus()
  }

  return (
    <div className={s.overlay}>
      <div className={s.invites}>
        <div className={s.container}>
          <p className={s.title}>Пригласить</p>
          <CloseIcon className={s.close} onClick={toggleInvites} />
          <div className={s.search_wrapper}>
            <SearchIcon className={s.search} />
            <input
              ref={inputRef}
              className={s.input}
              type="text"
              placeholder="Пригласить участников..."
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
            {searchValue && <CloseIcon className={s.close_search} onClick={onClickClear} />}
          </div>
          <div className={s.invite_wrapper}>
            <Invite />
            <Invite />
            <Invite />
            <Invite />
            <Invite />
            <Invite />
            <Invite />
            <Invite />
            <Invite />
            <Invite />
            <Invite />
          </div>
          {open && <AvatarRow closeAvatar={closeAvatar} />}
          <button className={s.btn} type="button">
            Пригласить
          </button>
        </div>
      </div>
    </div>
  )
}

export default Invites
