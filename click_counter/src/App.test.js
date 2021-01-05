import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import App from './App'

Enzyme.configure({ adapter: new EnzymeAdapter() })

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)

let wrapper
beforeEach(() => {
  wrapper = shallow(<App />)
})

test('Renders <App /> without errors', () => {
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
})

test('Renders increment counter button', () => {
  const incrementButton = findByTestAttr(wrapper, 'increment-button')
  expect(incrementButton.length).toBe(1)
})

test('Renders counter display', () => {
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)
})

test('Counter starts at 0', () => {
  const count = findByTestAttr(wrapper, 'count').text()
  expect(count).toBe('0')
})

// test('Clicking on button increments counter display', () => {})
