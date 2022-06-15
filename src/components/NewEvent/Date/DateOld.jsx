import React, { useEffect, useRef, useState } from 'react'
import { addDays } from 'date-fns'
import format from 'date-fns/format'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import s from './Date.module.css'

function Date() {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: 'selection',
    },
  ])

  // open close
  const [open, setOpen] = useState(false)

  // get the target element to toggle
  const refOne = useRef(null)

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false)
    }
  }

  useEffect(() => {
    // event listeners
    document.addEventListener('keydown', hideOnEscape, true)
    document.addEventListener('click', hideOnClickOutside, true)
  }, [])

  return (
    <div className={s.whenCalender}>
      <input
        className={s.whenInput}
        type="text"
        autoComplete="off"
        name="date"
        placeholder="Когда?"
        value={`${format(range[0].startDate, 'dd/MM/yyyy')} до 
        ${format(range[0].endDate, 'dd/MM/yyyy')}`}
        readOnly
        onClick={() => setOpen((open) => !open)}
      />

      <div ref={refOne}>
        {open && (
          <div className={s.dropdownContent}>
            <DateRangePicker
              onChange={(item) => setRange([item.selection])}
              editableDateInputs
              moveRangeOnFirstSelection={false}
              ranges={range}
              months={1}
              direction="horizontal"
              className="calendarElement"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Date
