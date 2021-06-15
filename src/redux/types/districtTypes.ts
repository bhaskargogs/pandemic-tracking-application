export interface District {
  label: string
  value: string
}

export interface DistrictState {
  districts: District[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  selectedDistrict: District
}

export const initialState: DistrictState = {
  districts: [],
  status: 'idle',
  error: null,
  selectedDistrict: {
    label: '',
    value: '',
  },
}
