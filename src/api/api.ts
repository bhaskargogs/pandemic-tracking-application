import axios from 'axios'
import { District } from '../redux/types/districtTypes'

const uri = `${process.env.REACT_APP_RKI_API_ENDPOINT}`
// export const fetchDistrictData = async (ags: string | null = null, days: number | ''): Promise<DistrictHistory[]> => {
//   let districtUri = uri
//   if (ags && days) {
//     districtUri = `${uri}/${ags}/${process.env.REACT_APP_RKI_HISTORY}/${days}`
//   }
//   try {
//     const response = await axios.get(districtUri)
//     return response.data.data[`${ags}`].history
//   } catch (error) {
//     return error
//   }
// }

// export const fetchAllRegionData = async (ags: string | null = null): Promise<DistrictHistory[]> => {
//   let allDistrictUri = uri
//   if (ags) {
//     allDistrictUri = `${allDistrictUri}/${ags}/${process.env.REACT_APP_RKI_HISTORY}/`
//   }
//   try {
//     const response = await axios.get(allDistrictUri)
//     return response.data.data[`${ags}`].history
//   } catch (error) {
//     return error
//   }
// }

/* export const fetchDistricts = async (): Promise<District[]> => {
  try {
    const {
      data: { data: districtObjects },
    } = await axios.get(uri)
    const responseArray: District[] = []
    if (typeof Object.keys(districtObjects) !== 'undefined' && Object.keys(districtObjects).length > 0) {
      Object.keys(districtObjects).forEach((value) => {
        const agsValue = districtObjects[value as keyof string].ags
        const nameValue = districtObjects[value as keyof string].name
        responseArray.push({ ags: agsValue, name: nameValue })
        return { agsValue, nameValue }
      })
    }
    return responseArray
  } catch (error) {
    return error
  }
} */
