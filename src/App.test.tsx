// src/App.test.tsx
import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import App from './App'

describe('<App />', () => {
  let component: ShallowWrapper

  beforeEach(() => {
    component = shallow(<App />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })

  it('should render to match snapshot', () => {
    expect(component.getElements()).toMatchSnapshot()
  })

  it('should contain "Covid-19 tracker application"', () => {
    const header = component.find('h3')
    expect(header.text()).toEqual('COVID-19 Tracker application')
  })

  it('should contain "DisplayIncidence" component', () => {
    const displayIncidenceComponent = component.find('DisplayIncidence')
    expect(displayIncidenceComponent).toHaveLength(1)
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
