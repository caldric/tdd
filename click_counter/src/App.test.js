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

test('Clicking on button increments counter display', () => {
  // Find the button
  const incrementButton = findByTestAttr(wrapper, 'increment-button')

  // Click the button
  incrementButton.simulate('click')

  // Find the display, and test that the number has been incremented
  const count = findByTestAttr(wrapper, 'count').text()
  expect(count).toBe('1')
})

test('Renders decrement counter button', () => {
  const decrementButton = findByTestAttr(wrapper, 'decrement-button')
  expect(decrementButton.length).toBe(1)
})

test("Decrement button decrements the counter if it's positive", () => {
  // Initialize counter variable
  let counter

  // Set counter state to 1
  const incrementButton = findByTestAttr(wrapper, 'increment-button')
  incrementButton.simulate('click')
  counter = findByTestAttr(wrapper, 'count').text()
  expect(counter).toBe('1')

  // Find the decrement button
  const decrementButton = findByTestAttr(wrapper, 'decrement-button')

  // Click decrement button
  decrementButton.simulate('click')

  // Test that the counter has been decremented to 0
  counter = findByTestAttr(wrapper, 'count').text()
  expect(counter).toBe('0')
})

test('Decrement button does not let the counter go negative', () => {
  // Find the decrement button
  const decrementButton = findByTestAttr(wrapper, 'decrement-button')

  // Click decrement button
  decrementButton.simulate('click')

  // Test that the counter has been decremented to 0
  const counter = findByTestAttr(wrapper, 'count').text()
  expect(counter).toBe('0')
})

// test('Clicking decrement while the counter is at 0 prints an error message', () => {
//   // Write test here
// })
