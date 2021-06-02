import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './types/dayTypes'

export const daysSlice = createSlice({
  name: 'days',
  initialState,
  reducers: {},
})

export default daysSlice.reducer
