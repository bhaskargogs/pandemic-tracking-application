import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchDistricts } from '../features/districts'
import { District, initialState } from './types/districtTypes'

const districtSlice = createSlice({
  name: 'district',
  initialState,
  reducers: {
    toggleDistricts(state, action: PayloadAction<District>) {
      const foundDistrict = state.districts.find((district) => district.value === action.payload.value)
      if (foundDistrict) {
        state.selectedDistrict.label = foundDistrict.label
        state.selectedDistrict.value = foundDistrict.value
      }
    },
  },
  extraReducers: (builder) => {
    // when send a request, fetchWeatherForecast is pending
    builder.addCase(fetchDistricts.pending, (state) => {
      // change status to loading and clear previous errors
      state.status = 'loading'
      state.error = null
    })

    // when server responses with data, fetchWeatherForecast is fullfilled
    builder.addCase(fetchDistricts.fulfilled, (state, { payload }) => {
      // change status back to idle and add forecast to forecasts state
      state.districts.push(...payload)
      state.status = 'idle'
    })

    // when server responses with error, fetchWeatherForecast is rejected
    builder.addCase(fetchDistricts.rejected, (state, { payload }) => {
      // change status back to idle and add error to state
      if (payload) state.error = payload.errorMessage
      state.status = 'idle'
    })
  },
})

export const { toggleDistricts } = districtSlice.actions

export default districtSlice.reducer
