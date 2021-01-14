import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'

import { RootState } from '../store'
import { findByTestAttr, storeFactory } from '../../tests/testUtils'
import Input from './Input'

const setup = (initialState: RootState) => {
  const store = storeFactory(initialState)
  // @ts-expect-error
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive()
  // console.log(wrapper.debug()) // for debugging purposes
  return wrapper
}
// setup({ success: false }) // for debugging purposes

describe('No guesses have been made', () => {
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper = setup({ success: false, secret: '', guesses: {} })
  })

  test('Renders component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-input')
    expect(component.length).toBe(1)
  })

  test('Renders input box', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box')
    expect(inputBox.length).toBe(1)
  })

  test('Renders submit button', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button')
    expect(submitButton.length).toBe(1)
  })
})

describe('Word has been guessed successfully', () => {
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper = setup({ success: true, secret: '', guesses: {} })
  })

  test('Renders component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-input')
    expect(component.length).toBe(1)
  })

  test('Does not render input box', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box')
    expect(inputBox.length).toBe(0)
  })

  test('Does not render submit button', () => {
    const submitButton = findByTestAttr(wrapper, 'submit-button')
    expect(submitButton.length).toBe(0)
  })
})
