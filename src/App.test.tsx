// src/App.test.tsx
import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import App from './App'

const mockStore = configureStore([])

describe('<App />', () => {
  let store
  let component: ShallowWrapper

  beforeEach(() => {
    store = mockStore({
      days: {
        days: [
          { id: 1, label: '1 day', value: 1 },
          { id: 2, label: '2 days', value: 2 },
          { id: 3, label: '3 days', value: 3 },
        ],
        selectedDay: { id: 1, label: '1 day', value: 1 },
      },
    })
    component = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })

  it('should render with given state from Redux store', () => {
    expect(component).toMatchSnapshot()
  })
})

/*
Update this file once it's changed.  For instance to check if a component you added
include in App.tsx;

import { shallow } from "enzyme";
import Calculator from "./components/SomeComponent/SomeComponent";

test('should render SomeComponent', () => {
  const wrapper = shallow(<App />);
  const calculator = wrapper.find(SomeComponent);
  expect(calculator.exists()).toBe(true);
})
 */
