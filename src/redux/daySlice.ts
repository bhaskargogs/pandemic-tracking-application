import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Day, initialState } from './types/dayTypes'

export const daysSlice = createSlice({
  name: 'days',
  initialState,
  reducers: {
    toggleDays(state, action: PayloadAction<Day>) {
      const foundDay = state.days.find((day) => day.value === action.payload.value)
      if (foundDay) {
        state.selectedDay.id = foundDay.id
        state.selectedDay.label = foundDay.label
        state.selectedDay.value = foundDay.value
      }
    },
  },
})

export const { toggleDays } = daysSlice.actions

export default daysSlice.reducer
