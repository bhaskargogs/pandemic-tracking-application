import React, { useState } from 'react'
import Select, { ValueType } from 'react-select'
import { useAppSelector } from '../../redux/hooks'
import { Day } from '../../redux/types/dayTypes'
import './DisplayIncidence.scss'

const DisplayIncidence: React.FC = () => {
  const daysList = useAppSelector((state) => state.days.days)
  const [selectedDays, setSelectedDays] = useState<ValueType<Day, false>>(daysList[0])
  const daysHandler = async (option: ValueType<Day, false>) => {
    setSelectedDays(option)
  }

  return (
    <div className="container">
      <div className="mx-auto select-box">
        <Select<Day> value={selectedDays} getOptionLabel={(day: Day) => day.label} getOptionValue={(day: Day) => day.value.toString()} options={daysList} isClearable={true} onChange={daysHandler} />
      </div>
    </div>
  )
}

export default DisplayIncidence
