import React, { useState } from 'react'
import calendarIcon from '../../assets/icons/Calendaradmin.svg'
import TopBarOrganization from './TopBarOrganization/TopBarOrganization'
import TopBarUser from './TopBarUser/TopBarUser'
import TopBarLocation from './TopBarLocation/TopBarLocation'
import s from './CalendarAdmin.module.css'
import CreatePosition from './CreatePosition/CreatePosition'
import SearchPosition from './SearchPosition/SearchPosition'
import EditPosition from './EditPosition/EditPosition'
import AsideBar from './AsideBar/AsideBar'

export default function CalendarAdmin() {
  const [activeOrg, setActiveOrg] = useState(false)
  const [activeUser, setActiveUser] = useState(false)
  const [activeLocation, setActiveLocation] = useState(false)
  const [create, setCreate] = useState(false)
  const [search, setSearch] = useState(false)

  const showOrganizationBar = () => {
    setActiveOrg(true)
    setActiveUser(false)
    setActiveLocation(false)
  }
  const showUserBar = () => {
    setActiveUser(true)
    setActiveOrg(false)
    setActiveLocation(false)
  }
  const showLocationBar = () => {
    setActiveLocation(true)
    setActiveOrg(false)
    setActiveUser(false)
  }
  const openCreatePosition = () => {
    setCreate(true)
    setSearch(false)
  }
  const openSearchPosition = () => {
    setSearch(true)
    setCreate(false)
  }

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.calendarAdmin}>
          <img className={s.calendarIcon} src={calendarIcon} alt="calendarIcon" />
          CalendarAdmin
        </div>
        {activeOrg && (
          <TopBarOrganization
            openCreatePosition={openCreatePosition}
            openSearchPosition={openSearchPosition}
          />
        )}
        {activeUser && <TopBarUser />}
        {activeLocation && <TopBarLocation />}
      </div>
      <div className={s.main}>
        <AsideBar
          activeOrg={activeOrg}
          activeUser={activeUser}
          activeLocation={activeLocation}
          showOrganizationBar={showOrganizationBar}
          showUserBar={showUserBar}
          showLocationBar={showLocationBar}
        />
        <section>
          {create && <CreatePosition />}
          {search && <SearchPosition />}
          {/* <EditPosition /> */}
        </section>
      </div>
    </div>
  )
}
