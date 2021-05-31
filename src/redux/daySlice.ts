import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './types'
import { initialState } from './types/dayTypes'

export const daysSlice = createSlice({
  name: 'days',
  initialState,
  reducers: {
    selectFrequency: (state, action: PayloadAction<number>) => {
      state.selectedDay.value = action.payload
    },
  },
})

export const { selectFrequency } = daysSlice.actions

export const getDaysList = (state: RootState) => state.days.days

export default daysSlice.reducer
