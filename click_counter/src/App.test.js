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
  const count = findByTestAttr(wrapper, 'counter').text()
  expect(count).toBe('0')
})

test('Clicking on button increments counter display', () => {
  // Find and click the button
  const incrementButton = findByTestAttr(wrapper, 'increment-button')
  incrementButton.simulate('click')

  // Find the counter, and test that the number has been incremented
  const counter = findByTestAttr(wrapper, 'counter')
  expect(counter.text()).toBe('1')
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
  counter = findByTestAttr(wrapper, 'counter').text()
  expect(counter).toBe('1')

  // Find and click the decrement button
  const decrementButton = findByTestAttr(wrapper, 'decrement-button')
  decrementButton.simulate('click')

  // Test that the counter has been decremented to 0
  counter = findByTestAttr(wrapper, 'counter').text()
  expect(counter).toBe('0')
})

test('Decrement button does not let the counter go negative', () => {
  // Find and click the decrement button
  const decrementButton = findByTestAttr(wrapper, 'decrement-button')
  decrementButton.simulate('click')

  // Test that the counter has been decremented to 0
  const counter = findByTestAttr(wrapper, 'counter').text()
  expect(counter).toBe('0')
})

test('Renders an error message when clicking decrement while the counter is at 0', () => {
  // Find and click the decrement button
  const decrementButton = findByTestAttr(wrapper, 'decrement-button')
  decrementButton.simulate('click')

  // Test that the decrement error message has been generated
  const decrementError = findByTestAttr(wrapper, 'decrement-error')
  expect(decrementError.length).toBe(1)
})

test('Removes error message when clicking increment button', () => {
  // Find and click the decrement button
  const decrementButton = findByTestAttr(wrapper, 'decrement-button')
  decrementButton.simulate('click')

  // Find and click the increment button
  const incrementButton = findByTestAttr(wrapper, 'increment-button')
  incrementButton.simulate('click')

  // Test that the decrement error message has been cleared
  const decrementError = findByTestAttr(wrapper, 'decrement-error')
  expect(decrementError.length).toBe(0)
})
