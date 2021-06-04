import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Day, initialState } from './types/dayTypes'

const daySlice = createSlice({
  name: 'days',
  initialState,
  reducers: {
    addDays(state, action: PayloadAction<Day>) {
      state.days.push(action.payload)
      state.dayOptions.find((day) => day.label === 'Days')?.options.push(action.payload)
    },
    toggleDays(state, action: PayloadAction<Day>) {
      const foundDay = state.days.find((day) => day.value === action.payload.value)
      if (foundDay) {
        state.selectedDay.label = foundDay.label
        state.selectedDay.value = foundDay.value
      }
    },
  },
})
export const { toggleDays, addDays } = daySlice.actions

export default daySlice.reducer
