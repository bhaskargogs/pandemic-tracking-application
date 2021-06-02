import React, { useState } from 'react'
import { selectFrequency } from '../../redux/daySlice'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Day } from '../../redux/types/dayTypes'
import './DisplayIncidence.scss'

const DisplayIncidence: React.FC = () => {
  const daysList = useAppSelector((state) => state.days.days)
  const selectedDay = useAppSelector((state) => state.days.selectedDay)
  const dispatch = useAppDispatch()
  const [days, setDays] = useState<number>(selectedDay.value)

  const daysHandler = async (event: React.ChangeEvent<{ value: unknown }>) => {
    setDays(event.target.value as number)
    dispatch(selectFrequency(event.target.value as number))
  }
  return (
    <div className="DisplayIncidence">
      <select value={days} onChange={daysHandler}>
        {daysList.map((frequency: Day) => (
          <option key={frequency.id} value={frequency.value}>
            {frequency.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default DisplayIncidence
