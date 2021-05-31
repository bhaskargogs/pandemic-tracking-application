import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { daysSlice } from './daySlice'

const store = configureStore({
  reducer: {
    days: daysSlice.reducer,
  },
  middleware: [logger],
})

export default store
