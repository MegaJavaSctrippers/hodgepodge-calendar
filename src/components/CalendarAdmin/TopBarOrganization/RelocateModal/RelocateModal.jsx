import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { useDispatch } from 'react-redux'
import s from './RelocateModal.module.css'
import DepartmentList from './DepartmentList/DepartmentList'
import ParticipantCheckbox from './ParticipantCheckbox/ParticipantCheckbox'
import { closeRelocateModal } from '../../../../store/RelocateModalSlice'
import { relocateDepNotification } from '../../../../store/RelocateDepNotificationSlice'

export default function RelocateModal() {
  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(closeRelocateModal())
  }

  const relocateFunc = () => {
    dispatch(relocateDepNotification())
    dispatch(closeRelocateModal())
  }

  const participantsList = [
    {
      name: 'Dany Wilson',
      position: 'проект-менеджер',
      image: 'Jenny.jpg',
      id: 1,
    },
    { name: 'Dany Wilson', position: 'проект-менеджер', id: 2 },
    { name: 'Dany Wilson', position: 'проект-менеджер', id: 3 },
    { name: 'Dany Wilson', position: 'проект-менеджер', id: 4 },
    { name: 'Dany Wilson', position: 'проект-менеджер', id: 5 },
    { name: 'Dany Wilson', position: 'проект-менеджер', id: 6 },
    { name: 'Dany Wilson', position: 'проект-менеджер', id: 7 },
    { name: 'Dany Wilson', position: 'проект-менеджер', id: 8 },
    { name: 'Dany Wilson', position: 'проект-менеджер', id: 9 },
    { name: 'Dany Wilson', position: 'проект-менеджер', id: 10 },
    { name: 'Dany Wilson', position: 'проект-менеджер', id: 11 },
    { name: 'Dany Wilson', position: 'проект-менеджер', id: 12 },
  ]

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <CloseIcon className={s.icon} onClick={closeModal} />
        <p className={s.title}>Отметьте участников, которых нужно перенести в другой отдел</p>
        <div className={s.participants}>
          {participantsList.map((participant) => (
            <div className={s.participant_wrapper} key={participant.id}>
              <div>
                <div className={s.name}>{participant.name}</div>
                <div className={s.position}>{participant.position}</div>
              </div>
              <ParticipantCheckbox />
            </div>
          ))}
        </div>
      </div>
      <div className={s.bottom}>
        <DepartmentList />
        <button className={s.btn} type="button" onClick={relocateFunc}>
          Переместить
        </button>
      </div>
    </div>
  )
}
