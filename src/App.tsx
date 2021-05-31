import React, { ChangeEvent, useState } from 'react'
import './App.scss'
import { selectFrequency } from './redux/daySlice'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { Day } from './redux/types/dayTypes'

const App: React.FC = () => {
  const daysList = useAppSelector((state) => state.days.days)
  const selectedDay = useAppSelector((state) => state.days.selectedDay)
  const dispatch = useAppDispatch()
  const [days, setDays] = useState<number>(selectedDay.value)

  const daysHandler = async (event: ChangeEvent<{ value: unknown }>) => {
    setDays(event.target.value as number)
    dispatch(selectFrequency(event.target.value as number))
  }
  return (
    <div className="App">
      <header className="App-header">
        <select value={days} onChange={daysHandler}>
          {daysList.map((frequency: Day) => (
            <option key={frequency.id} value={frequency.value}>
              {frequency.label}
            </option>
          ))}
        </select>
        <h2>Getting started with React testing library</h2>
      </header>
    </div>
  )
}

export default App
