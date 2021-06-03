export interface Day {
  label: string
  value: string
}

export interface DayOption {
  label: string
  options: Day[]
}

type InitialStateType = {
  dayOptions: DayOption[]
  days: Day[]
  selectedDay: Day
}

const days: Day[] = [
  {
    label: '1 week',
    value: '7',
  },
  {
    label: '1 month',
    value: '31',
  },
  {
    label: '3 months',
    value: '90',
  },
  {
    label: '6 months',
    value: '183',
  },
  {
    label: '1 year',
    value: '365',
  },
]

const dayOptions: DayOption[] = [
  {
    label: 'Days',
    options: days,
  },
  {
    label: 'Custom',
    options: [{ label: 'Custom', value: 'Custom' }],
  },
]

export const initialState: InitialStateType = { days, dayOptions, selectedDay: days[0] }
