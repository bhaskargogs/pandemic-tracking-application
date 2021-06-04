import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { District } from '../redux/types/districtTypes'

type FetchDistrictsError = {
  errorMessage: string
}

export const fetchDistricts = createAsyncThunk<District[], string, { rejectValue: FetchDistrictsError }>('districts/fetchDistricts', async (payload, thunkApi) => {
  const response = await axios.get(`${process.env.REACT_APP_RKI_API_ENDPOINT}${payload}`)

  if (response.status !== 200) {
    return thunkApi.rejectWithValue({ errorMessage: 'Failed to fetch districts' })
  }

  const districtObjects = response.data.data
  const responseArray: District[] = []
  if (typeof Object.keys(districtObjects) !== 'undefined' && Object.keys(districtObjects).length > 0) {
    Object.keys(districtObjects).forEach((value) => {
      const agsValue = districtObjects[value as keyof string].ags
      const nameValue = districtObjects[value as keyof string].name
      responseArray.push({ value: agsValue, label: nameValue })
      return { agsValue, nameValue }
    })
  }
  return responseArray
})
