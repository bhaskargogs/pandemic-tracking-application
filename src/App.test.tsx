// src/App.test.tsx
import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import App from './App'

describe('<App />', () => {
  let component: ShallowWrapper

  beforeEach(() => {
    component = shallow(<App />)
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
