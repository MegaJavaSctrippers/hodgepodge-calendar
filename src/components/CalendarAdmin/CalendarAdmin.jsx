import React from 'react'
import { useSelector } from 'react-redux'
import calendarIcon from '../../assets/icons/Calendaradmin.svg'
import TopBarOrganization from './TopBarOrganization/TopBarOrganization'
import TopBarUser from './TopBarUser/TopBarUser'
import TopBarLocation from './TopBarLocation/TopBarLocation'
import s from './CalendarAdmin.module.css'
import CreatePosition from './CreatePosition/CreatePosition'
import SearchPosition from './SearchPosition/SearchPosition'
import AsideBar from './AsideBar/AsideBar'

export default function CalendarAdmin() {
  const activeOrg = useSelector((state) => state.organizationBar.organizationBar)
  const activeUser = useSelector((state) => state.userBar.userBar)
  const activeLocation = useSelector((state) => state.locationBar.locationBar)
  const create = useSelector((state) => state.createPosition.createPosition)
  const search = useSelector((state) => state.searchPosition.searchPosition)

  // const showOrganizationBar = () => {
  //   setActiveOrg(true)
  //   setActiveUser(false)
  //   setActiveLocation(false)
  // }
  // const showUserBar = () => {
  //   setActiveUser(true)
  //   // setActiveOrg(false)
  //   setActiveLocation(false)
  // }
  // const showLocationBar = () => {
  //   setActiveLocation(true)
  // setActiveOrg(false)
  // setActiveUser(false)
  // }
  // const openCreatePosition = () => {
  //   setCreate(true)
  //   setSearch(false)
  // }
  // const openSearchPosition = () => {
  //   setSearch(true)
  //   // setCreate(false)
  // }

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.calendarAdmin}>
          <img className={s.calendarIcon} src={calendarIcon} alt="calendarIcon" />
          CalendarAdmin
        </div>
        {activeOrg && <TopBarOrganization />}
        {activeUser && <TopBarUser />}
        {activeLocation && <TopBarLocation />}
      </div>
      <div className={s.main}>
        <AsideBar activeOrg={activeOrg} activeUser={activeUser} activeLocation={activeLocation} />
        <section>
          {create && <CreatePosition />}
          {search && <SearchPosition />}
        </section>
      </div>
    </div>
  )
}
