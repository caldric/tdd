import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() })

let wrapper

beforeEach(() => {
  wrapper = shallow(<App />)
})

test('Renders <App /> without errors', () => {
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1)
})

test('Renders increment counter button', () => {
  const incrementButton = wrapper.find("[data-test='increment-button']")
  expect(incrementButton.length).toBe(1)
})

// test('Renders counter display', () => {})
// test('Counter starts at 0', () => {})
// test('Clicking on button increments counter display', () => {})
