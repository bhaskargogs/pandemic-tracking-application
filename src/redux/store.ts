import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import daySlice from './daySlice'
import districtSlice from './districtSlice'

const store = configureStore({
  reducer: {
    days: daySlice,
    districts: districtSlice,
  },
  // middleware: [logger],
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
