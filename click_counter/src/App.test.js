import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() })

test('Renders <App /> without errors', () => {
  const wrapper = shallow(<App />)
  const appComponent = wrapper.find("[data-test='component-app']")
  expect(appComponent.length).toBe(1)
})

test('Renders increment counter button', () => {
  expect(false).toBe(true)
})

test('Renders counter display', () => {
  expect(false).toBe(true)
})

test('Counter starts at 0', () => {
  expect(false).toBe(true)
})

test('Clicking on button increments counter display', () => {
  expect(false).toBe(true)
})
