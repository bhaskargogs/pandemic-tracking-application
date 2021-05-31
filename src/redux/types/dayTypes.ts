export interface Day {
  id: number;
  label: string;
  value: number;
}

const selectedDay: Day = { id: 1, label: '1 week', value: 7 };

type InitialStateType = {
  days: Day[];
  selectedDay: Day;
};

const days: Day[] = [
  {
    id: 1,
    label: '1 week',
    value: 7,
  },
  {
    id: 2,
    label: '1 month',
    value: 31,
  },
  {
    id: 3,
    label: '3 months',
    value: 90,
  },
  {
    id: 4,
    label: '6 months',
    value: 183,
  },
  {
    id: 5,
    label: '1 year',
    value: 365,
  },
];

export const initialState: InitialStateType = { days, selectedDay };
