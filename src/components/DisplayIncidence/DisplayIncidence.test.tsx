import { shallow } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import DisplayIncidence from './DisplayIncidence'

const mockStore = configureStore([])

describe('<DisplayIncidence />', () => {
  let component
  let store

  beforeEach(() => {
    store = mockStore({
      days: {
        days: [
          { label: '1 day', value: '1' },
          { label: '2 days', value: '2' },
          { label: '3 days', value: '3' },
        ],
        daysOptions: [
          {
            label: 'Days',
            options: [
              { label: '1 day', value: '1' },
              { label: '2 days', value: '2' },
              { label: '3 days', value: '3' },
            ],
          },
        ],
        selectedDay: { label: '1 day', value: '1' },
      },
    })
    component = shallow(
      <Provider store={store}>
        <DisplayIncidence />
      </Provider>
    )
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
